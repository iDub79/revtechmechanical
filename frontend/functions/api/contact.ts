interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO: string; // e.g. info@revtechmechanical.com.au
  CONTACT_FROM: string; // must be on a Resend-verified domain, e.g. noreply@revtechmechanical.com.au
}

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const isValidEmail = (e: string) => {
  const parts = e.split("@");
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  return !!local && !!domain && domain.includes(".");
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // 16 KB body cap
  const raw = await request.text();
  if (raw.length > 16 * 1024) return json(400, { error: "request too large" });

  let req: Record<string, string>;
  try {
    req = JSON.parse(raw);
  } catch {
    return json(400, { error: "invalid JSON" });
  }

  // Honeypot — silently accept so bots think they won
  if ((req.website ?? "").trim() !== "") return json(200, { success: true });

  const name = (req.name ?? "").trim();
  const email = (req.email ?? "").trim().toLowerCase();
  const phone = (req.phone ?? "").trim();
  const message = (req.message ?? "").trim();

  if (!name) return json(400, { error: "name is required" });
  if ([...name].length > 255) return json(400, { error: "name is too long" });
  if (!email) return json(400, { error: "email is required" });
  if (!isValidEmail(email)) return json(400, { error: "invalid email address" });
  if (!message) return json(400, { error: "message is required" });
  if ([...message].length < 10) return json(400, { error: "message is too short" });
  if ([...message].length > 5000) return json(400, { error: "message is too long" });

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: env.CONTACT_TO.split(",").map((addr) => addr.trim()).filter(Boolean),
      reply_to: email,
      subject: `New website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\n\n${message}`,
    }),
  });

  if (!resp.ok) {
    return json(500, { error: "failed to send your message. Please try again." });
  }

  return json(200, { success: true });
};
