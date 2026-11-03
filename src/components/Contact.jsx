import { useEffect, useState } from "react";
import { CONFIG, SVC } from "../data/content";

const BUDGETS = ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+"];
const TIMELINES = ["Under 2 weeks", "2 – 4 weeks", "1 – 3 months", "3+ months"];
const EMPTY = { name: "", email: "", company: "", type: "", services: [], budget: "", timeline: "", description: "", links: "", social: "", website: "" };

// Project inquiry form: validates on the client, then POSTs to /api/contact (see api/contact.js).
export default function Contact() {
  const [v, setV] = useState(EMPTY);
  const [err, setErr] = useState({});
  const [status, setStatus] = useState({ kind: "idle" });

  useEffect(() => {
    // "Request a quote" buttons elsewhere on the page preselect a service.
    const onPre = (e) => setV((p) => ({ ...p, type: e.detail, services: [e.detail] }));
    window.addEventListener("zy:pre", onPre);
    return () => window.removeEventListener("zy:pre", onPre);
  }, []);

  const set = (k) => (e) => setV((p) => ({ ...p, [k]: e.target.value }));
  const toggle = (s) => setV((p) => ({ ...p, services: p.services.includes(s) ? p.services.filter((x) => x !== s) : [...p.services, s] }));

  const validate = () => {
    const e = {};
    if (v.name.trim().length < 2) e.name = "Enter your full name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email.trim())) e.email = "Enter a valid email address, for example name@example.com.";
    if (!v.type) e.type = "Choose a project type.";
    if (v.description.trim().length < 20) e.description = "Describe your project in at least 20 characters.";
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErr(e);
    const first = Object.keys(e)[0];
    if (first) { document.getElementById("f-" + first)?.focus(); return; }
    if (v.website) return; // honeypot
    const data = { ...v };
    delete data.website;
    if (!CONFIG.formEndpoint) {
      const brief = Object.entries(data).filter(([, x]) => x && x.length).map(([k, x]) => k + ": " + (Array.isArray(x) ? x.join(", ") : x)).join("\n");
      setStatus({ kind: "nosrv", brief });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const r = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw j.error || 0;
      setStatus({ kind: "ok" });
      setV(EMPTY);
    } catch (x) {
      setStatus({ kind: "fail", msg: typeof x === "string" ? x : "The server did not accept the inquiry. Try again, or contact the studio directly." });
    }
  };

  const field = (k) => ({ id: "f-" + k, value: v[k], onChange: set(k), "aria-invalid": err[k] ? "true" : undefined });
  return (
    <section>
      <div className="w">
        <h2 data-nosplit>Let’s build something<br />remarkable.</h2>
        <p className="lead" style={{ margin: "28px 0 48px" }}>Have an idea in mind? Tell us what you’re creating, and let’s turn it into something exceptional.</p>
        <form id="f" noValidate onSubmit={submit}>
          <div className="two">
            <div>
              <label htmlFor="f-name">Full name *</label>
              <input {...field("name")} name="name" autoComplete="name" required />
              <div className="er">{err.name}</div>
            </div>
            <div>
              <label htmlFor="f-email">Email address *</label>
              <input {...field("email")} name="email" type="email" autoComplete="email" required />
              <div className="er">{err.email}</div>
            </div>
          </div>
          <div className="two">
            <div>
              <label htmlFor="f-company">Company or streamer name</label>
              <input {...field("company")} name="company" />
            </div>
            <div>
              <label htmlFor="f-type">Project type *</label>
              <select {...field("type")} name="type" required>
                <option value="">Choose one</option>
                {SVC.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <div className="er">{err.type}</div>
            </div>
          </div>
          <fieldset>
            <legend>Required services</legend>
            <div className="ck">
              {SVC.map((s) => (
                <label key={s}>
                  <input type="checkbox" checked={v.services.includes(s)} onChange={() => toggle(s)} />
                  {s}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="two">
            <div>
              <label htmlFor="f-budget">Estimated budget</label>
              <select {...field("budget")} name="budget">
                <option value="">Not sure yet</option>
                {BUDGETS.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="f-timeline">Expected timeline</label>
              <select {...field("timeline")} name="timeline">
                <option value="">Flexible</option>
                {TIMELINES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="f-description">Project description *</label>
            <textarea {...field("description")} name="description" rows={6} required />
            <div className="er">{err.description}</div>
          </div>
          <div>
            <label htmlFor="f-links">Reference links</label>
            <input {...field("links")} name="links" />
          </div>
          <div>
            <label htmlFor="f-social">Social or other contact details</label>
            <input {...field("social")} name="social" />
          </div>
          <div style={{ position: "absolute", left: -9999 }} aria-hidden="true">
            <label>Leave empty<input name="website" tabIndex={-1} autoComplete="off" value={v.website} onChange={set("website")} /></label>
          </div>
          <div>
            <button className="btn" type="submit" disabled={status.kind === "sending"}>{status.kind === "sending" ? "Sending…" : "Send project inquiry"}</button>
          </div>
          <div role="status" aria-live="polite">
            {status.kind === "ok" && <div className="note">Thanks. Your inquiry was received.</div>}
            {status.kind === "fail" && <div className="note"><b>Not sent.</b> {status.msg}</div>}
            {status.kind === "nosrv" && (
              <div className="note">
                <b>Not sent.</b> This form has no server endpoint configured yet, so nothing was submitted.{" "}
                {CONFIG.contactEmail ? "Email your brief to " + CONFIG.contactEmail + "." : "The studio needs to add its contact email or endpoint."} You can copy your brief below.
                <br />
                <button className="btn o" type="button" style={{ marginTop: 12 }} onClick={() => navigator.clipboard && navigator.clipboard.writeText(status.brief)}>Copy my brief</button>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
