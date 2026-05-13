import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const sessionId = req.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Session manquante" }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== "paid") {
    return NextResponse.json({ error: "Paiement non effectué" }, { status: 403 });
  }

  const filePath = join(process.cwd(), "public", "documentation.pdf");
  const fileBuffer = readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="guide-arreter-de-fumer.pdf"',
    },
  });
}
