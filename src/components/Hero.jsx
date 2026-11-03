import Vis from "./Vis.jsx";

export default function Hero() {
  return (
<section className="hero2" id="h2">
      <span className="sc" aria-hidden="true">Scroll</span>
      <div className="w">
        <div>
          <p className="eb in">Creative digital studio / design &amp; development</p>
          <h1 className="in">We create<br />what’s{" "}<span className="r">next.</span></h1>
          <p className="lead in" style={{marginTop:"28px"}}>From custom websites and powerful digital experiences to exceptional Twitch, Discord, and streamer branding, we bring ambitious ideas to life.</p>
          <div className="row in">
            <a className="btn" href="#work">Explore our work</a>
            <a className="btn o" href="#contact">Start your project</a>
          </div>
          <p className="mc in" style={{marginTop:"36px",fontSize:"13px",letterSpacing:".2em",color:"var(--g)"}}>DESIGN • DEVELOPMENT • MOTION • BRANDING</p>
        </div>
        <div className="hmw" id="hmw">
          <div className="hm hm1" data-d="30">
            <Vis id="web" />
          </div>
          <div className="hm hm2" data-d="55">
            <Vis id="twitch" />
          </div>
          <div className="hm hm3" data-d="80">
            <Vis id="art" />
          </div>
        </div>
      </div>
    </section>
  );
}
