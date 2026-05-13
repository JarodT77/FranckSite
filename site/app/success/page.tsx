"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Download, ArrowLeft, Loader2, Mail } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<"loading" | "paid" | "error">("loading");

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      return;
    }

    fetch(`/api/verify-payment?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.paid ? "paid" : "error");
      })
      .catch(() => setStatus("error"));
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-white-alt flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">

        {status === "loading" && (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-10 h-10 text-red-400 animate-spin" />
            <p className="font-poppins text-gray-500">Vérification du paiement...</p>
          </div>
        )}

        {status === "paid" && (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-4">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-helvetica mb-3">
              Paiement confirmé !
            </h1>
            <p className="text-gray-500 font-poppins text-sm mb-8">
              Merci pour ton achat. Ton guide est prêt à être téléchargé.
            </p>
            <a
              href={`/api/download?session_id=${sessionId}`}
              className="inline-flex items-center gap-2 bg-red-400 text-white font-bold font-poppins text-base px-8 py-4 rounded-full hover:bg-red-500 transition-colors shadow-md w-full justify-center"
            >
              <Download className="w-5 h-5" />
              Télécharger mon guide
            </a>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400 font-poppins">
              <Mail className="w-3.5 h-3.5" />
              <span>Un email avec le guide en pièce jointe t&apos;a aussi été envoyé.</span>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm">
            <h1 className="text-xl font-bold font-helvetica mb-3 text-gray-800">
              Une erreur est survenue
            </h1>
            <p className="text-gray-500 font-poppins text-sm mb-6">
              Impossible de vérifier ton paiement. Contacte-nous si tu as été débité.
            </p>
            <Link
              href="/documentation"
              className="inline-flex items-center gap-2 text-red-400 font-poppins text-sm hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
