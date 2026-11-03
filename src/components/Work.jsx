import { PJ, V } from "../data/content";
import Vis from "./Vis.jsx";

const CATEGORIES = ["All projects", ...new Set(PJ.map((p) => p.c))];

// Horizontal portfolio. Add or edit projects in src/data/content.js (PJ and V).
export default function Work() {
  return (
    <section className="hz" id="hz">
      <div className="w">
        <h2>Ideas made visible.</h2>
        <p className="lead" style={{ marginTop: "18px" }}>Six concept projects made by the studio. They are not client work.</p>
        <div className="fl" role="group" aria-label="Filter projects">
          {CATEGORIES.map((c, i) => (
            <button key={c} type="button" data-hf={c} aria-pressed={i === 0}>{c}</button>
          ))}
        </div>
      </div>
      <div className="tr" id="tr">
        {PJ.map((p) => (
          <a className="pj" key={p.id} data-c={p.c} href={"#case-" + p.id}>
            <div className="mk"><Vis id={V[p.id][0]} /></div>
            <div className="pm">
              <span className="tag">Concept</span>
              <h3>{p.t}</h3>
              <span className="mut">{p.c}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
