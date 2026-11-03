import { TEAM } from "../data/content";

const VALUES = [["Creativity", "Explore original ideas."], ["Precision", "Focus on every detail."], ["Innovation", "Build for what’s next."], ["Collaboration", "Work closely with every client."]];
const initials = (name) => name.split(" ").map((w) => w[0]).join("").slice(0, 2);

export default function About() {
  return (
    <section>
      <div className="w">
        <div className="dr" aria-hidden="true">Small team • Big ideas • Limitless creativity •</div>
        <h2>Small team.<br />Big ideas.<br />Limitless creativity.</h2>
        <div className="two" style={{ marginTop: 48, gap: 48, alignItems: "start" }}>
          <p className="lead">Zyralume Studio is a three-member creative and development team specializing in streamer branding, motion design, visual identity, and modern web solutions. We combine creative thinking, technology, and a detail-driven approach to deliver distinctive digital experiences for creators and businesses.</p>
          <div>
            <h3>Our mission</h3>
            <p className="lead" style={{ marginTop: 12 }}>To turn ideas into impactful digital experiences through thoughtful design, innovative technology, and a commitment to quality.</p>
          </div>
        </div>
        <div style={{ marginTop: 64 }}>
          {VALUES.map(([name, text], i) => (
            <div className="vi" key={name}>
              <span>{"0" + (i + 1)}</span>
              <b>{name}</b>
              <em>{text}</em>
            </div>
          ))}
        </div>
        <h3 style={{ margin: "72px 0 0" }}>The team</h3>
        <div className="cols tm">
          {TEAM.map((m) => (
            <div key={m.n}>
              {m.p ? <img className="ph" src={m.p} alt={m.n} loading="lazy" /> : <div className="mi" aria-hidden="true">{initials(m.n)}</div>}
              <b>{m.n}</b>
              <em className="rl">{m.r}</em>
              {m.r2 && <span className="mut">{m.r2}</span>}
              <p className="mut" style={{ margin: "14px 0 0", fontSize: 15 }}>{m.d}</p>
            </div>
          ))}
        </div>
        <div className="note">Zyralume is an AI-assisted studio: we use modern creative tools together with human review.</div>
      </div>
    </section>
  );
}
