import { S } from "../data/content";
import Vis from "./Vis.jsx";

// Pinned services showcase: the list on the left, visuals that change on scroll on the right.
export default function Services() {
  return (
    <section className="ps" id="ps">
      <div className="w psi">
        <div className="pl">
          <h2>Everything you need.<br />One creative studio.</h2>
          <ol className="pn">
            {S.map((s) => (
              <li key={s.id}>
                <span>{s.n}</span>
                <a href={"#service-" + s.id}>{s.t}</a>
                <p>{s.d}</p>
                <div className="mv"><Vis id={s.id} /></div>
              </li>
            ))}
          </ol>
        </div>
        <div className="pr" aria-hidden="true">
          {S.map((s) => (
            <div className="st2" key={s.id}><Vis id={s.id} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
