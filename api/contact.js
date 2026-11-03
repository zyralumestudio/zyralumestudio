// Vercel serverless function: POST /api/contact
// Sends the inquiry by email through Resend (https://resend.com). Keys live in Vercel environment variables.
const clean = (v, n = 4000) => String(v == null ? "" : v).replace(/\r/g, "").slice(0, n).trim();
const line = (v, n = 200) => clean(v, n).replace(/\n/g, " ");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }
  let b = req.body;
  if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } }
  b = b || {};
  if (b.website) return res.status(200).json({ ok: true }); // honeypot: bots fill this hidden field

  const name = line(b.name), email = line(b.email), type = line(b.type);
  const description = clean(b.description);
  if (name.length < 2) return res.status(400).json({ error: "Enter your full name." });
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return res.status(400).json({ error: "Enter a valid email address." });
  if (!type) return res.status(400).json({ error: "Choose a project type." });
  if (description.length < 20) return res.status(400).json({ error: "Describe your project in at least 20 characters." });

  const { RESEND_API_KEY: key, CONTACT_TO_EMAIL: to, CONTACT_FROM_EMAIL: from } = process.env;
  if (!key || !to || !from) {
    return res.status(503).json({ error: "The contact form is not configured on the server yet. Please contact the studio directly." });
  }
  const services = Array.isArray(b.services) ? b.services.map((s) => line(s, 80)).join(", ") : "";
  const text = [
    `Name: ${name}`, `Email: ${email}`, `Company / streamer: ${line(b.company)}`,
    `Project type: ${type}`, `Services: ${services}`, `Budget: ${line(b.budget)}`, `Timeline: ${line(b.timeline)}`,
    `Reference links: ${line(b.links, 500)}`, `Social / contact: ${line(b.social, 300)}`, "", "Description:", description,
  ].join("\n");
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: to.split(",").map((s) => s.trim()), reply_to: email, subject: `New project inquiry: ${type} - ${name}`, text }),
    });
    if (!r.ok) return res.status(502).json({ error: "The email provider rejected the message. Please try again later." });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: "Could not reach the email provider. Please try again later." });
  }
}
