import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { readFileSync } from "fs";
import { join } from "path";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const resend = new Resend(process.env.RESEND_API_KEY!);
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Webhook invalide" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email;

    if (customerEmail) {
      const pdfPath = join(process.cwd(), "public", "documentation.pdf");
      const pdfBuffer = readFileSync(pdfPath);
      const pdfBase64 = pdfBuffer.toString("base64");

      await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: customerEmail,
        subject: "Ton guide — Arrêter de fumer",
        html: `
          <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px;">
            <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 8px;">Merci pour ton achat !</h1>
            <p style="color: #6b7280; font-size: 15px; margin-bottom: 24px;">
              Tu trouveras ton guide complet en pièce jointe de cet email.
              Il est prêt à être téléchargé et lu dès maintenant.
            </p>
            <p style="color: #6b7280; font-size: 14px;">
              Bonne lecture,<br/>Franck
            </p>
          </div>
        `,
        attachments: [
          {
            filename: "guide-arreter-de-fumer.pdf",
            content: pdfBase64,
          },
        ],
      });
    }
  }

  return NextResponse.json({ received: true });
}
