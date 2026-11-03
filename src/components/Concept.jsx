import Vis from "./Vis.jsx";

export default function Concept() {
  return (
<section style={{background:"var(--k2)"}}>
      <div className="w">
        <span className="tag">Concept, not a client project</span>
        <h2 style={{marginTop:"20px"}}>Your stream. Your identity. Reimagined.</h2>
        <p className="lead" style={{margin:"24px 0 56px"}}>Shadow Wolf is a fictional streamer identity we built to show how one system runs from mascot to overlay to alert to Discord.</p>
        <div className="bgd">
          <div className="bn b1" data-s="0">
            <Vis id="twitch" />
            <p className="mut">Main overlay, webcam frame and live alert</p>
          </div>
          <div className="bn b2" data-s="-60">
            <Vis id="art" />
            <p className="mut">Mascot, emotes and subscriber badges</p>
          </div>
          <div className="bn b3" data-s="-30">
            <Vis id="discord" />
            <p className="mut">Discord banner and server icon</p>
          </div>
          <div className="bn b4" data-s="-70">
            <Vis id="motion" />
            <p className="mut">Animated raid alert</p>
          </div>
          <div className="bn b5" data-s="-20">
            <Vis id="brand" />
            <p className="mut">Brand guidelines</p>
          </div>
        </div>
        <div className="row">
          <a className="btn" href="#case-shadow-wolf">Open the case study</a>
        </div>
      </div>
    </section>
  );
}
