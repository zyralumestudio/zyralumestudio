import { CONFIG, S } from "../data/content";

export default function Footer() {
  const socials = Object.entries(CONFIG.socials).filter(([, url]) => url);
  return (
    <footer>
      <div className="w">
        <div className="dr" aria-hidden="true">Zyralume Studio • Imagine. Build. Elevate. •</div>
        <div className="fg">
          <div>
            <div className="logo" style={{ color: "#fff" }}><i />ZYRALUME STUDIO</div>
            <p className="d" style={{ color: "#fff", fontSize: "20px", margin: "16px 0 8px" }}>Imagine. Build. Elevate.</p>
            <p style={{ maxWidth: "42ch" }}>A three-person creative and development team for streamer branding, motion design, visual identity and web solutions.</p>
            {socials.length > 0 && (
              <p style={{ marginTop: 16 }}>
                {socials.map(([name, url]) => (
                  <a key={name} style={{ display: "inline-block", marginRight: 14 }} href={url} rel="noopener">{name}</a>
                ))}
              </p>
            )}
          </div>
          <div>
            <b style={{ color: "#fff" }}>Studio</b>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#contact">Start a project</a>
          </div>
          <div>
            <b style={{ color: "#fff" }}>Services</b>
            {S.map((s) => (
              <a key={s.id} href={"#service-" + s.id}>{s.t}</a>
            ))}
          </div>
        </div>
        <p style={{ marginTop: 40 }}>© {new Date().getFullYear()} Zyralume Studio. Privacy and Terms pages are not published yet: they need real legal text from the studio.</p>
      </div>
    </footer>
  );
}
