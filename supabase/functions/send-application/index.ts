import { corsHeaders } from "@supabase/supabase-js/cors";

const RECIPIENT_EMAIL = "jeff@sidebysidetherapy.ca";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, phone, position, message, resumeText } = await req.json();

    // Validate required fields
    if (!name || !email || !position) {
      return new Response(
        JSON.stringify({ error: "Name, email, and position are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const htmlBody = `
      <h2>New Job Application - Side by Side Therapy</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Position:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(position)}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(phone || "Not provided")}</td></tr>
      </table>
      ${message ? `<h3>Cover Letter / Message:</h3><p style="white-space: pre-wrap;">${escapeHtml(message)}</p>` : ""}
      ${resumeText ? `<h3>Resume / Additional Info:</h3><p style="white-space: pre-wrap;">${escapeHtml(resumeText)}</p>` : ""}
      <hr />
      <p style="color: #666; font-size: 12px;">This application was submitted via the Side by Side Therapy careers page.</p>
    `;

    // Use Supabase's built-in email or a simple SMTP approach
    // For now, we'll use the Resend-compatible approach via fetch
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (!RESEND_API_KEY) {
      // Fallback: log the application (in production, you'd want an email service)
      console.log("Application received:", { name, email, phone, position, message });
      return new Response(
        JSON.stringify({ success: true, message: "Application received" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Side by Side Therapy Careers <careers@sidebysidetherapy.ca>",
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject: `New Application: ${position} - ${name}`,
        html: htmlBody,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Email send failed:", errorData);
      return new Response(
        JSON.stringify({ error: "Failed to send application" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Application sent successfully" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing application:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
