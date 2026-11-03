import { useEffect, useRef, useState } from "react";
import { PJ, S, V } from "../data/content";
import { setLock } from "../lib/site";
import Vis, { LABELS } from "./Vis.jsx";

const Chips = ({ list }) => (
  <div className="chips">{list.map((i) => <span key={i}>{i}</span>)}</div>
);

// Service and case-study popups. Opened by the "zy:dialog" event that lib/site.js sends on link clicks.
export default function Dialogs() {
  const ref = useRef(null);
  const [d, setD] = useState(null);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const open = (e) => { setD(e.detail); setTab(0); };
    const close = () => ref.current && ref.current.open && ref.current.close();
    window.addEventListener("zy:dialog", open);
    window.addEventListener("zy:closedialog", close);
    return () => { window.removeEventListener("zy:dialog", open); window.removeEventListener("zy:closedialog", close); };
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (d && el && !el.open) { el.showModal(); setLock(true); }
  }, [d]);

  const svc = d && d.type === "svc" ? S.find((x) => x.id === d.id) : null;
  const pj = d && d.type === "case" ? PJ.find((x) => x.id === d.id) : null;
  const shut = () => ref.current && ref.current.close();

  return (
    <dialog ref={ref} aria-label="Details" onClose={() => { setLock(false); setD(null); }} onClick={(e) => { if (e.target === ref.current) shut(); }}>
      {(svc || pj) && (
        <div className="dgi">
          <button className="x" type="button" onClick={shut}>Close ✕</button>
          {svc && (
            <>
              <p className="eb">Service {svc.n}</p>
              <h2 style={{ fontSize: "clamp(32px,5vw,64px)" }}>{svc.t}</h2>
              <p className="lead" style={{ margin: "18px 0 28px" }}>{svc.d}</p>
              <Vis id={svc.id} />
              {svc.items2 ? (
                <>
                  <h3 style={{ marginTop: 28 }}>{svc.h1}</h3><Chips list={svc.items} />
                  <h3>{svc.h2}</h3><Chips list={svc.items2} />
                </>
              ) : (
                <>
                  <h3 style={{ marginTop: 28 }}>What we make</h3><Chips list={svc.items} />
                </>
              )}
              <div className="note">{svc.note}</div>
              <div className="row"><a className="btn" href="#contact" data-pre={svc.t}>Request a quote</a></div>
            </>
          )}
          {pj && (
            <>
              <span className="tag">Concept project, not client work</span>
              <h2 style={{ fontSize: "clamp(32px,5vw,64px)", margin: "16px 0 6px" }}>{pj.t}</h2>
              <p className="eb">{pj.c}</p>
              <p className="lead">{pj.o}</p>
              {V[pj.id].length > 1 && (
                <div className="tabs" role="group" aria-label="Project assets">
                  {V[pj.id].map((id, i) => (
                    <button key={id} type="button" aria-pressed={i === tab} onClick={() => setTab(i)}>{LABELS[id].replace(/ concept.*/i, "")}</button>
                  ))}
                </div>
              )}
              <div style={{ margin: "20px 0 32px" }}><Vis id={V[pj.id][tab]} /></div>
              <div className="cols" style={{ margin: 0 }}>
                <div><b>Design concept</b><span className="mut">{pj.dc}</span></div>
                <div><b>Tools</b><span className="mut">{pj.tl}</span></div>
                <div><b>Deliverables</b><span className="mut">{pj.dl}</span></div>
              </div>
              <p className="mut" style={{ marginTop: 20 }}>Status: concept. Real project galleries will replace this when assets are supplied.</p>
              <div className="row"><a className="btn" href="#contact">Start a project</a></div>
            </>
          )}
        </div>
      )}
    </dialog>
  );
}
