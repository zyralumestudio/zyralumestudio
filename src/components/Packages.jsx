import { P } from "../data/content";

export default function Packages() {
  return (
    <section className="lt">
      <div className="w">
        <h2>Request a quote.</h2>
        <p className="lead" style={{ margin: "20px 0 40px" }}>Pricing depends on scope, so each package starts with a quote.</p>
        <div className="pk">
          {P.map(([title, text, service]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p className="mut">{text}</p>
              <a className="btn o" href="#contact" data-pre={service}>Request a quote</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
