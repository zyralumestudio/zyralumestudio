import { PR } from "../data/content";

export default function Process() {
  return (
    <section className="pp" id="pp" style={{ background: "var(--k2)" }}>
      <div className="w ppi">
        <div>
          <h2>From concept<br />to creation.</h2>
          <div className="bw" aria-hidden="true">
            <b id="bn">01</b>
            <span id="bt">{PR[0][0]}</span>
          </div>
          <p className="lead" id="bd">{PR[0][1]}</p>
        </div>
        <div className="sw">
          <div className="rail"><i id="rl" /></div>
          <ol className="stp">
            {PR.map(([title, text], i) => (
              <li key={title}>
                <b>{"0" + (i + 1)}</b>
                <div>
                  <h3>{title}</h3>
                  <p className="mut">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
