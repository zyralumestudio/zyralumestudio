// Scroll, 3D and cursor effects (GSAP ScrollTrigger, Lenis smooth scroll, three.js scene).
// Kept as one imperative module on purpose: it drives the DOM rendered by the React components.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import Lenis from "lenis";
import { S, PR } from "../data/content";

window.gsap = gsap; window.ScrollTrigger = ScrollTrigger; window.THREE = THREE; window.Lenis = Lenis;
const $ = (q) => document.querySelector(q);
let M = null;
const emit = (n, d) => window.dispatchEvent(new CustomEvent("zy:" + n, { detail: d }));
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
function sp(el){if(el.dataset.sp)return;el.dataset.sp="1";let i=0;const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),ns=[];while(w.nextNode())ns.push(w.currentNode);el.setAttribute("aria-label",el.textContent);ns.forEach(n=>{const f=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(t=>{if(!t)return;if(/^\s+$/.test(t)){f.append(" ");return}const a=document.createElement("span");a.className="wd";a.setAttribute("aria-hidden","true");const b=document.createElement("span");b.style.setProperty("--i",i++);b.textContent=t;a.append(b);f.append(a)});n.replaceWith(f)})}
let LN=null,MM=null,HERO=null;const GS=!!(window.gsap&&window.ScrollTrigger);
if(GS)gsap.registerPlugin(ScrollTrigger);
if(GS&&!RM&&window.Lenis){LN=new Lenis({lerp:.09});LN.on("scroll",ScrollTrigger.update);gsap.ticker.add(t=>LN.raf(t*1000));gsap.ticker.lagSmoothing(0)}
document.addEventListener("pointermove",e=>{if(RM||e.pointerType!=="mouse")return;const b=e.target.closest&&e.target.closest(".btn");if(!b)return;const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`});
document.addEventListener("pointerout",e=>{const b=e.target.closest&&e.target.closest(".btn");if(b)b.style.transform=""});
function kill(){if(HERO)HERO.stop(),HERO=null;if(!GS)return;if(MM)MM.revert(),MM=null;ScrollTrigger.getAll().forEach(t=>t.kill());gsap.killTweensOf(M.querySelectorAll("*"))}
function fx(){if(RM||!GS)return;
M.querySelectorAll("h1,h2").forEach(h=>{if(h.closest(".hero2")||h.hasAttribute("data-nosplit"))return;sp(h);const p=h.closest(".hz,.ps,.pp");ScrollTrigger.create(p?{trigger:h,start:"top 95%",once:true,onEnter:()=>h.classList.add("vis")}:{trigger:h,start:"top 90%",end:"bottom top",onToggle:s=>h.classList.toggle("vis",s.isActive)})});
M.querySelectorAll(".sv,.cols>div,.card,.pk>div,.chips,.st,.vals div,.note,.lead,.fl,.tabs,.vi,.wy>div,form>div,form>fieldset").forEach(el=>{if(el.closest(".hero2,.hz,.ps,.pp,form"))return;el.classList.add("rv");el.style.transitionDelay=([...el.parentNode.children].indexOf(el)%4)*90+"ms";ScrollTrigger.create({trigger:el,start:"top 92%",end:"bottom top",onToggle:s=>el.classList.toggle("v",s.isActive)})})}
function wirehome(){if(!GS||RM){return}
gsap.from(".hm",{y:90,opacity:0,rotate:7,duration:1.3,stagger:.16,ease:"power3.out",delay:.35});
const ms=[...document.querySelectorAll(".hm")].map(e=>[gsap.quickTo(e,"x",{duration:.8}),gsap.quickTo(e,"y",{duration:.8}),+e.dataset.d]);
$("#h2").onpointermove=e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;ms.forEach(m=>{m[0](-x*m[2]);m[1](-y*m[2])});gsap.to(".hm",{rotationY:x*16,rotationX:-y*12,transformPerspective:1000,duration:.9,overwrite:"auto"})};
gsap.to("#hmw",{yPercent:-16,ease:"none",scrollTrigger:{trigger:"#h2",start:"top top",end:"bottom top",scrub:true}});
MM=gsap.matchMedia();
MM.add("(min-width:900px) and (prefers-reduced-motion:no-preference)",()=>{const ps=$("#ps"),hz=$("#hz"),L=[...ps.querySelectorAll("li")],Vs=[...ps.querySelectorAll(".st2")];ps.classList.add("pin");hz.classList.add("pin");const n=S.length,rl=document.createElement("div");rl.className="rail2";rl.innerHTML="<i></i><span></span>";ps.querySelector(".pl").append(rl);const fl=rl.firstChild,ct=rl.lastChild;
const hold=.6,step=1.6,tot=(n-1)*step+hold;let cur=-1;
const mark=i=>{if(i==cur)return;cur=i;L.forEach((l,j)=>l.classList.toggle("on",j==i));ct.textContent="0"+(i+1)+" / 0"+n};
gsap.set(Vs.slice(1),{clipPath:"inset(100% 0 0 0)"});mark(0);
const tl=gsap.timeline({defaults:{ease:"power2.inOut"},scrollTrigger:{trigger:ps,start:"top top",end:"+="+innerHeight*n*.8,pin:true,anticipatePin:1,scrub:.7,snap:{snapTo:"labelsDirectional",duration:{min:.25,max:.8},delay:.08,ease:"power2.inOut"},onUpdate:s=>{fl.style.transform="scaleY("+s.progress+")";mark(Math.min(n-1,Math.round(s.progress*tot/step)))}}});
for(let i=0;i<n;i++){tl.addLabel("s"+i,i*step);if(i<n-1){tl.to(Vs[i],{clipPath:"inset(0 0 100% 0)",scale:.92,duration:1},i*step+.3).fromTo(Vs[i+1],{clipPath:"inset(100% 0 0 0)",scale:1.08},{clipPath:"inset(0% 0 0 0)",scale:1,duration:1},i*step+.3)}}
tl.to({},{duration:hold},(n-1)*step);
const tr=$("#tr"),d=()=>tr.scrollWidth-innerWidth+40;
const tw=gsap.to(tr,{x:()=>-d(),ease:"none",scrollTrigger:{trigger:hz,start:"top top",end:()=>"+="+d(),pin:true,anticipatePin:1,scrub:.8,invalidateOnRefresh:true}});
tr.querySelectorAll(".pj").forEach(p=>{const m=p.querySelector(".mk");gsap.fromTo(m,{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0% 0 0)",ease:"none",scrollTrigger:{trigger:p,containerAnimation:tw,start:"left 98%",end:"left 55%",scrub:true}});gsap.fromTo(m.querySelector("svg"),{xPercent:-7},{xPercent:7,ease:"none",scrollTrigger:{trigger:p,containerAnimation:tw,start:"left 100%",end:"right 0%",scrub:true}})});
return()=>{rl.remove();ps.classList.remove("pin");hz.classList.remove("pin")}});
wirebento();document.fonts&&document.fonts.ready.then(()=>ScrollTrigger.refresh())}
function wirebento(){document.querySelectorAll(".bn").forEach(b=>{gsap.fromTo(b.querySelector(".vz"),{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",ease:"none",scrollTrigger:{trigger:b,start:"top 92%",end:"top 55%",scrub:true}});gsap.to(b,{y:+b.dataset.s,ease:"none",scrollTrigger:{trigger:b,start:"top bottom",end:"bottom top",scrub:true}})})}
function wireextra(){if(!GS||RM)return;
document.querySelectorAll(".dr").forEach(el=>gsap.fromTo(el,{xPercent:0},{xPercent:-35,ease:"none",scrollTrigger:{trigger:el,start:"top bottom",end:"bottom top",scrub:true}}));

document.querySelectorAll("main .lt,main .cta").forEach(el=>gsap.fromTo(el,{scale:.94,borderRadius:48},{scale:1,borderRadius:0,ease:"none",scrollTrigger:{trigger:el,start:"top bottom",end:"top 25%",scrub:true}}));
MM.add("(min-width:900px)",()=>{const pp=$("#pp"),L=[...pp.querySelectorAll("li")],q=["#bt","#bn","#bd"];pp.classList.add("pin");let cur=-1;const set=i=>{if(i==cur)return;cur=i;L.forEach((l,j)=>l.classList.toggle("on",j==i));gsap.killTweensOf(q);gsap.timeline().to(q,{y:-24,opacity:0,duration:.18}).add(()=>{$("#bn").textContent="0"+(i+1);$("#bt").textContent=PR[i][0];$("#bd").textContent=PR[i][1]}).to(q,{y:0,opacity:1,duration:.45,ease:"power3.out"})};set(0);
ScrollTrigger.create({trigger:pp,start:"top top",end:"+="+innerHeight*PR.length*.6,pin:true,anticipatePin:1,onUpdate:s=>{gsap.set("#rl",{height:s.progress*100+"%"});set(Math.min(PR.length-1,Math.floor(s.progress*PR.length)))}});return()=>pp.classList.remove("pin")});
MM.add("(max-width:899px)",()=>{gsap.to("#rl",{height:"100%",ease:"none",scrollTrigger:{trigger:".sw",start:"top 70%",end:"bottom 70%",scrub:true}})})}
function wirenav(){dots();if(!GS)return;ScrollTrigger.addEventListener("refresh",dots);ScrollTrigger.create({start:0,end:"max",onUpdate:s=>{$("#slf").style.height=s.progress*100+"%"}});["home","about","services","work","process","contact"].forEach(id=>{const a=document.getElementById(id),t=a&&a.nextElementSibling;if(t)ScrollTrigger.create({trigger:t,start:"top 55%",end:"bottom 55%",onToggle:s=>{if(s.isActive)document.querySelectorAll(".links a,.sr a").forEach(l=>l.classList.toggle("on",l.dataset.p==id))}})})}
function wirefilter(){document.querySelectorAll("[data-hf]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-hf]").forEach(x=>x.setAttribute("aria-pressed",x==b));const tr=$("#tr");document.querySelectorAll(".pj").forEach(p=>p.style.display=b.dataset.hf=="All projects"||p.dataset.c==b.dataset.hf?"":"none");tr.scrollLeft=0;if(GS){gsap.set(tr,{x:0});ScrollTrigger.refresh()}})}
function dots(){const H=Math.max(1,document.documentElement.scrollHeight-innerHeight);document.querySelectorAll(".sr a").forEach(a=>{const e=document.getElementById(a.dataset.p);if(!e)return;a.style.top=Math.min(100,Math.max(0,(e.getBoundingClientRect().top+scrollY)/H*100))+"%"})}
addEventListener("load",dots);addEventListener("resize",dots);
function world(){if(!window.THREE)return;const c=document.createElement("canvas");c.id="cv3";c.setAttribute("aria-hidden","true");let rd;try{rd=new THREE.WebGLRenderer({canvas:c,antialias:true,alpha:true})}catch(e){return}document.body.prepend(c);
rd.setPixelRatio(Math.min(devicePixelRatio,1.5));const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(45,1,.1,100),G=new THREE.Group(),W3=new THREE.Group();cam.position.z=8;
const X=(a,d,m,b)=>{const sh=new THREE.Shape();a.forEach((q,i)=>{const x=(q[0]-120)/60,y=(110-q[1])/60;i?sh.lineTo(x,y):sh.moveTo(x,y)});sh.closePath();return new THREE.Mesh(new THREE.ExtrudeGeometry(sh,{depth:d,bevelEnabled:!!b,bevelThickness:.06,bevelSize:.05,bevelSegments:2}),m)};
const head=X([[30,10],[96,70],[144,70],[210,10],[226,120],[170,190],[120,214],[70,190],[14,120]],.5,new THREE.MeshStandardMaterial({color:0x151518,metalness:.85,roughness:.28,flatShading:true}),1);
const red=new THREE.MeshStandardMaterial({color:0xDF1726,emissive:0x5a0008,metalness:.4,roughness:.4,flatShading:true}),wh=new THREE.MeshBasicMaterial({color:0xffffff});
W3.add(head,new THREE.LineSegments(new THREE.EdgesGeometry(head.geometry,25),new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.7})),X([[30,10],[70,80],[48,120]],.62,red),X([[210,10],[170,80],[192,120]],.62,red),X([[70,120],[104,134],[96,146],[62,138]],.68,wh),X([[170,120],[136,134],[144,146],[178,138]],.68,wh),X([[104,170],[120,160],[136,170],[120,186]],.68,red));
W3.position.z=-.3;G.add(W3);
const ring=new THREE.Mesh(new THREE.TorusGeometry(3.3,.014,8,140),new THREE.MeshBasicMaterial({color:0xDF1726,transparent:true,opacity:.8})),ring2=new THREE.Mesh(new THREE.TorusGeometry(4.1,.008,8,140),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.25}));G.add(ring,ring2);
const sh=[];for(let i=0;i<18;i++){const m=new THREE.Mesh(new THREE.TetrahedronGeometry(.1+Math.random()*.22),new THREE.MeshStandardMaterial({color:i%4?0x1c1c20:0xDF1726,metalness:.8,roughness:.3,flatShading:true}));m.userData={a:Math.random()*6.28,r:2.8+Math.random()*1.8,s:.15+Math.random()*.4,y:(Math.random()-.5)*3.6};G.add(m);sh.push(m)}
const pg=new THREE.BufferGeometry(),pa=new Float32Array(1200);for(let i=0;i<1200;i++)pa[i]=(Math.random()-.5)*26;pg.setAttribute("position",new THREE.BufferAttribute(pa,3));const pts=new THREE.Points(pg,new THREE.PointsMaterial({color:0x8a8a92,size:.03}));
const l1=new THREE.PointLight(0xDF1726,3,30),l2=new THREE.PointLight(0xffffff,1.3,30);l1.position.set(-4,3,5);l2.position.set(4,-2,6);sc.add(G,pts,new THREE.AmbientLight(0xffffff,.45),l1,l2);
const K=[[0,2.6,.2,0,-.35,.05,1.25,1],[.12,3.9,1.2,-2,1.2,.1,.55,.7],[.3,-3.9,-.6,-3,2.8,-.1,.5,.45],[.5,3.9,.4,-3,4.4,.15,.5,.45],[.7,-3.8,.6,-2,5.6,0,.6,.55],[.88,3.4,0,-1,6.5,.1,.85,.85],[1,0,0,0,6.28,0,1.1,1]];
const pose=p=>{let i=0;while(i<K.length-2&&p>K[i+1][0])i++;const a=K[i],b=K[i+1];let t=Math.max(0,Math.min(1,(p-a[0])/(b[0]-a[0])));t=t*t*(3-2*t);return a.map((v,j)=>v+(b[j]-v)*t)};
let tp=0,cp=0,mx=0,my=0;const rs=()=>{rd.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()};rs();addEventListener("resize",rs);
addEventListener("pointermove",e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});addEventListener("scroll",()=>{tp=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight);if(RM){cp=tp;fr(1500)}},{passive:true});
function fr(t){t*=.001;cp+=(tp-cp)*.07;const k=pose(cp),nar=Math.min(1,cam.aspect/1.6);G.position.set(k[1]*nar,k[2]+Math.sin(t)*.12,k[3]);G.rotation.set(k[5]+my*.35,k[4]+mx*.5+Math.sin(t*.5)*.08,0);G.scale.setScalar(k[6]*(.55+.45*nar));c.style.opacity=k[7];
ring.rotation.set(1.2+Math.sin(t*.3)*.15,0,t*.3);ring2.rotation.set(1.9,t*.2,0);sh.forEach(m=>{const u=m.userData,a=u.a+t*u.s;m.position.set(Math.cos(a)*u.r,u.y+Math.sin(t+u.a)*.2,Math.sin(a)*u.r);m.rotation.x=t*u.s;m.rotation.y=t*.5});pts.rotation.y=cp*3+t*.02;l1.position.x=-4+Math.sin(t*.5)*2;rd.render(sc,cam)}
if(RM)fr(1500);else{const loop=t=>{fr(t);requestAnimationFrame(loop)};requestAnimationFrame(loop)}}
world();
if(!RM&&GS&&matchMedia("(hover:hover) and (pointer:fine)").matches){const r=document.createElement("div");r.className="crs";r.setAttribute("aria-hidden","true");r.innerHTML="<span></span>";document.body.append(r);const qx=gsap.quickTo(r,"x",{duration:.35,ease:"power3"}),qy=gsap.quickTo(r,"y",{duration:.35,ease:"power3"});addEventListener("pointermove",e=>{qx(e.clientX);qy(e.clientY);const c=e.target.closest?e.target:null;r.classList.toggle("big",!!(c&&c.closest("a,button,.pj,.bn,.card")));r.classList.toggle("view",!!(c&&c.closest(".pj,.bn,.card")))})}
document.addEventListener("pointermove",e=>{if(RM||!GS||e.pointerType!=="mouse")return;const b=e.target.closest&&e.target.closest(".bn");if(!b)return;const r=b.getBoundingClientRect();gsap.to(b,{rotationY:((e.clientX-r.left)/r.width-.5)*9,rotationX:-((e.clientY-r.top)/r.height-.5)*9,transformPerspective:900,duration:.5,overwrite:"auto"})});
document.addEventListener("pointerout",e=>{const b=e.target.closest&&e.target.closest(".bn");if(b&&GS)gsap.to(b,{rotationX:0,rotationY:0,duration:.6})});
if(!RM&&matchMedia("(hover:hover)").matches){const g=document.createElement("div");g.className="gl";g.setAttribute("aria-hidden","true");document.body.append(g);addEventListener("pointermove",e=>{g.style.transform=`translate(${e.clientX-300}px,${e.clientY-300}px)`})}
let ly=0;addEventListener("scroll",()=>{const y=scrollY,hd=$("#hd");hd.classList.toggle("s",y>40);hd.classList.toggle("h",y>ly&&y>300&&!$("#lk").classList.contains("open"));ly=y;$("#pb").style.width=(y/Math.max(1,document.body.scrollHeight-innerHeight)*100)+"%"},{passive:true});
function jump(h){if(h.startsWith("service-"))return emit("dialog",{type:"svc",id:h.slice(8)});if(h.startsWith("case-"))return emit("dialog",{type:"case",id:h.slice(5)});const el=document.getElementById(h);if(!el)return;LN?LN.scrollTo(el,{offset:0,duration:1.6,force:true}):el.scrollIntoView({behavior:RM?"auto":"smooth"})}
document.addEventListener("click",e=>{const a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;e.preventDefault();if(a.dataset.pre)emit("pre",a.dataset.pre);const h=a.getAttribute("href").slice(1);emit("closedialog");emit("closemenu");jump(h);if(!/^(service|case)-/.test(h))history.replaceState(null,"","#"+h)});

export function initPage(root) {
  M = root;
  wirehome(); wirefilter(); wireextra(); fx(); wirenav();
  if (GS) requestAnimationFrame(() => ScrollTrigger.refresh());
  const h = (location.hash || "").slice(1);
  if (h) setTimeout(() => jump(h), 700);
}
export function destroyPage() { kill(); }
export const setLock = (b) => { if (LN) b ? LN.stop() : LN.start(); };
