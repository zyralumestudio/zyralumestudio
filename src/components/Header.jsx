import { useEffect, useState } from "react";
import { CONFIG, S } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("zy:closemenu", close);
    return () => window.removeEventListener("zy:closemenu", close);
  }, []);
  return (
    <header id="hd">
      <div className="w">
        <nav aria-label="Main">
          <a className="logo" href="#home" aria-label="Zyralume Studio home">
            {CONFIG.logoSrc ? (
              <img src={CONFIG.logoSrc} alt="Zyralume Studio" height="28" />
            ) : (
              <>
                <i />
                <span id="lg">ZYRALUME STUDIO</span>
              </>
            )}
          </a>
          <div className={open ? "links open" : "links"} id="lk">
            <a href="#home" data-p="home">Home</a>
            <a href="#about" data-p="about">About</a>
            <div className="dd">
              <button type="button" aria-haspopup="true">Services</button>
              <div className="menu" id="mn">
                {S.map((s) => (
                  <a key={s.id} href={"#service-" + s.id}>{s.t}</a>
                ))}
                <a href="#services">All services</a>
              </div>
            </div>
            <a href="#work" data-p="work">Work</a>
            <a href="#process" data-p="process">Process</a>
            <a href="#contact" data-p="contact">Contact</a>
          </div>
          <a className="btn nav-cta" href="#contact">Start a project</a>
          <button className="burger" id="bg" type="button" aria-label="Open menu" aria-expanded={open} aria-controls="lk" onClick={() => setOpen((o) => !o)}>☰</button>
        </nav>
      </div>
    </header>
  );
}
