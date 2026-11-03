export const LABELS = {
  "web": "Website concept on desktop and mobile",
  "twitch": "Twitch stream overlay concept",
  "discord": "Discord server branding concept",
  "motion": "Animated alert concept with timeline",
  "art": "Mascot, emote and badge concepts",
  "brand": "Brand identity system concept"
};

const SHAPES = {
  web: (
    <>
      <rect x="0" y="0" width="480" height="300" fill="#171719" />
      <rect x="28" y="24" width="330" height="214" fill="#0B0B0D" stroke="#2B2B30" />
      <rect x="28" y="24" width="330" height="20" fill="#171719" />
      <circle cx="42" cy="34" r="3" fill="#DF1726" />
      <circle cx="53" cy="34" r="3" fill="#555" />
      <circle cx="64" cy="34" r="3" fill="#555" />
      <rect x="48" y="64" width="150" height="16" fill="#fff" />
      <rect x="48" y="86" width="100" height="16" fill="#DF1726" />
      <rect x="48" y="118" width="170" height="5" fill="#2B2B30" />
      <rect x="48" y="130" width="140" height="5" fill="#2B2B30" />
      <rect x="48" y="152" width="70" height="20" fill="#DF1726" />
      <rect x="48" y="196" width="90" height="28" fill="#171719" />
      <rect x="148" y="196" width="90" height="28" fill="#171719" />
      <rect x="248" y="196" width="90" height="28" fill="#171719" />
      <g className="ft">
        <use href="#wolf" x="236" y="56" width="110" height="100" />
        <rect x="352" y="70" width="104" height="200" rx="14" fill="#0B0B0D" stroke="#666" />
        <rect x="364" y="90" width="80" height="12" fill="#fff" />
        <rect x="364" y="108" width="50" height="12" fill="#DF1726" />
        <rect x="364" y="136" width="80" height="50" fill="#171719" />
        <rect x="364" y="194" width="80" height="50" fill="#171719" />
      </g>
    </>
  ),
  twitch: (
    <>
      <rect x="0" y="0" width="480" height="300" fill="#0B0B0D" />
      <path d="M0 300V190L120 110 220 170 330 90 480 200V300Z" fill="#171719" />
      <path d="M0 210 480 60" stroke="#DF1726" strokeWidth="2" />
      <rect x="18" y="16" width="54" height="18" fill="#DF1726" />
      <text x="26" y="29" fontSize="10" fontWeight="700" fill="#fff" fontFamily="Space Grotesk,sans-serif">LIVE</text>
      <rect x="18" y="168" width="134" height="114" fill="#0B0B0D" stroke="#DF1726" strokeWidth="3" />
      <use href="#wolf" x="30" y="178" width="110" height="96" />
      <rect x="356" y="16" width="108" height="206" fill="#171719" opacity=".92" />
      <rect x="364" y="28" width="60" height="5" fill="#fff" />
      <rect x="364" y="38" width="80" height="4" fill="#2B2B30" />
      <rect x="364" y="66" width="74" height="5" fill="#fff" />
      <rect x="364" y="76" width="80" height="4" fill="#2B2B30" />
      <rect x="364" y="104" width="88" height="5" fill="#fff" />
      <rect x="364" y="114" width="80" height="4" fill="#2B2B30" />
      <rect x="364" y="142" width="60" height="5" fill="#fff" />
      <rect x="364" y="152" width="80" height="4" fill="#2B2B30" />
      <rect x="364" y="180" width="74" height="5" fill="#fff" />
      <rect x="364" y="190" width="80" height="4" fill="#2B2B30" />
      <rect x="18" y="284" width="444" height="6" fill="#171719" />
      <g className="al">
        <rect x="112" y="24" width="230" height="46" fill="#DF1726" />
        <text x="126" y="42" fontSize="9" fontWeight="700" fill="#fff" fontFamily="Space Grotesk,sans-serif">NEW FOLLOWER</text>
        <text x="126" y="60" fontSize="16" fontWeight="700" fill="#fff" fontFamily="Space Grotesk,sans-serif">SHADOW_FAN</text>
      </g>
    </>
  ),
  discord: (
    <>
      <rect x="0" y="0" width="480" height="300" fill="#0B0B0D" />
      <rect x="0" y="0" width="52" height="300" fill="#171719" />
      <circle cx="26" cy="30" r="20" fill="#DF1726" />
      <circle cx="26" cy="76" r="16" fill="#2B2B30" />
      <circle cx="26" cy="122" r="16" fill="#2B2B30" />
      <circle cx="26" cy="168" r="16" fill="#2B2B30" />
      <rect x="52" y="0" width="120" height="300" fill="#121214" />
      <rect x="64" y="40" width="60" height="8" fill="#2B2B30" />
      <rect x="64" y="70" width="77" height="8" fill="#2B2B30" />
      <rect x="64" y="100" width="94" height="8" fill="#2B2B30" />
      <rect x="64" y="130" width="71" height="8" fill="#2B2B30" />
      <rect x="64" y="160" width="88" height="8" fill="#2B2B30" />
      <rect x="64" y="190" width="65" height="8" fill="#2B2B30" />
      <rect x="172" y="0" width="308" height="120" fill="#DF1726" />
      <use href="#wolf" x="186" y="18" width="96" height="88" />
      <text x="296" y="70" fontSize="24" fontWeight="700" fill="#fff" fontFamily="Space Grotesk,sans-serif">PULSE</text>
      <text x="296" y="96" fontSize="24" fontWeight="700" fill="#fff" fontFamily="Space Grotesk,sans-serif">GUILD</text>
      <rect x="192" y="140" width="220" height="10" fill="#fff" />
      <rect x="192" y="160" width="160" height="6" fill="#2B2B30" />
      <rect x="192" y="176" width="200" height="6" fill="#2B2B30" />
      <circle cx="204" cy="236" r="14" fill="#2B2B30" stroke="#DF1726" />
      <circle cx="240" cy="236" r="14" fill="#171719" stroke="#DF1726" />
      <circle cx="276" cy="236" r="14" fill="#2B2B30" stroke="#DF1726" />
      <circle cx="312" cy="236" r="14" fill="#171719" stroke="#DF1726" />
      <circle cx="348" cy="236" r="14" fill="#2B2B30" stroke="#DF1726" />
    </>
  ),
  motion: (
    <>
      <rect x="0" y="0" width="480" height="300" fill="#0B0B0D" />
      <circle className="rg" style={{animationDelay:"0s"}} cx="240" cy="110" r="70" fill="none" stroke="#DF1726" strokeWidth="2" />
      <circle className="rg" style={{animationDelay:"0.8s"}} cx="240" cy="110" r="70" fill="none" stroke="#DF1726" strokeWidth="2" />
      <circle className="rg" style={{animationDelay:"1.6s"}} cx="240" cy="110" r="70" fill="none" stroke="#DF1726" strokeWidth="2" />
      <use href="#wolf" x="190" y="60" width="100" height="92" />
      <text x="204" y="188" fontSize="26" fontWeight="700" fill="#fff" fontFamily="Space Grotesk,sans-serif">RAID ALERT</text>
      <rect x="30" y="226" width="420" height="56" fill="#171719" />
      <path d="M40 244l7 7-7 7-7-7z" fill="#DF1726" />
      <path d="M110 244l7 7-7 7-7-7z" fill="#DF1726" />
      <path d="M190 244l7 7-7 7-7-7z" fill="#DF1726" />
      <path d="M260 244l7 7-7 7-7-7z" fill="#DF1726" />
      <path d="M350 244l7 7-7 7-7-7z" fill="#DF1726" />
      <rect x="30" y="268" width="420" height="3" fill="#2B2B30" />
      <g className="ph">
        <rect x="60" y="226" width="2" height="56" fill="#fff" />
      </g>
    </>
  ),
  art: (
    <>
      <rect x="0" y="0" width="480" height="300" fill="#171719" />
      <rect x="0" y="0" width="480" height="300" fill="#0B0B0D" opacity=".5" />
      <path d="M0 260 480 120" stroke="#DF1726" strokeWidth="2" />
      <g className="ft">
        <use href="#wolf" x="130" y="14" width="220" height="200" />
      </g>
      <circle cx="70" cy="256" r="26" fill="#171719" stroke="#2B2B30" strokeWidth="2" />
      <use href="#wolf" x="52" y="240" width="36" height="32" />
      <circle cx="155" cy="256" r="26" fill="#171719" stroke="#2B2B30" strokeWidth="2" />
      <use href="#wolf" x="137" y="240" width="36" height="32" />
      <circle cx="240" cy="256" r="26" fill="#171719" stroke="#DF1726" strokeWidth="2" />
      <use href="#wolf" x="222" y="240" width="36" height="32" />
      <circle cx="325" cy="256" r="26" fill="#171719" stroke="#2B2B30" strokeWidth="2" />
      <use href="#wolf" x="307" y="240" width="36" height="32" />
      <circle cx="410" cy="256" r="26" fill="#171719" stroke="#2B2B30" strokeWidth="2" />
      <use href="#wolf" x="392" y="240" width="36" height="32" />
    </>
  ),
  brand: (
    <>
      <rect x="0" y="0" width="480" height="300" fill="#F6F6F4" />
      <path d="M50 70l28 28-28 28-28-28z" fill="#DF1726" />
      <text x="94" y="106" fontSize="26" fontWeight="700" fill="#0B0B0D" fontFamily="Space Grotesk,sans-serif">ZYRALUME</text>
      <rect x="24" y="150" width="44" height="60" fill="#0B0B0D" />
      <rect x="74" y="150" width="44" height="60" fill="#171719" />
      <rect x="124" y="150" width="44" height="60" fill="#DF1726" />
      <rect x="174" y="150" width="44" height="60" fill="#A80E19" />
      <rect x="224" y="150" width="44" height="60" fill="#A3A3A3" />
      <text x="290" y="100" fontSize="90" fontWeight="700" fill="#0B0B0D" fontFamily="Space Grotesk,sans-serif">Aa</text>
      <rect x="270" y="170" width="180" height="100" fill="#0B0B0D" />
      <use href="#wolf" x="284" y="184" width="50" height="46" />
      <rect x="344" y="196" width="90" height="6" fill="#fff" />
      <rect x="344" y="212" width="60" height="6" fill="#DF1726" />
    </>
  ),
};

export default function Vis({ id }) {
  const key = SHAPES[id] ? id : "web";
  return (
    <div className="vz" role="img" aria-label={LABELS[key]}>
      <svg viewBox="0 0 480 300" aria-hidden="true">{SHAPES[key]}</svg>
      <span className="cl">Concept</span>
    </div>
  );
}
