import { memo } from "react";
import About from "./About.jsx";
import Concept from "./Concept.jsx";
import Contact from "./Contact.jsx";
import Cta from "./Cta.jsx";
import Hero from "./Hero.jsx";
import Intro from "./Intro.jsx";
import Marquee from "./Marquee.jsx";
import Packages from "./Packages.jsx";
import Process from "./Process.jsx";
import Services from "./Services.jsx";
import Why from "./Why.jsx";
import Work from "./Work.jsx";

// The one-page layout. The <i class="an"> elements are scroll anchors used by the navigation.
// Memoised on purpose: lib/site.js animates this DOM directly, so it must never re-render.
function Page() {
  return (
    <>
      <i id="home" className="an" />
      <Hero />
      <Marquee />
      <Intro />
      <i id="services" className="an" />
      <Services />
      <i id="work" className="an" />
      <Work />
      <Concept />
      <i id="about" className="an" />
      <About />
      <i id="process" className="an" />
      <Process />
      <Why />
      <Packages />
      <i id="contact" className="an" />
      <Contact />
      <Cta />
    </>
  );
}
export default memo(Page);
