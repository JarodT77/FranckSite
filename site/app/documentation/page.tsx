"use client";

import { ArrowLeft, BookOpen, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const included = [
  "Mon plan personnel en 4 phases (cigarette → vape → liberté)",
  "Anatomie des 5 cigarettes indispensables + ordre de suppression",
  "Guide dosage nicotine selon ton profil",
  "5 techniques mentales pour ne plus rechuter",
  "5 techniques physiques pour couper un craving en moins de 5 min",
  "Routine journalière semaine par semaine",
  "Erreurs classiques à éviter absolument",
];

export default function Documentation() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white-alt">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-red-400 transition-colors font-poppins text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
          <div className="h-4 w-px bg-gray-200" />
          <span className="font-bold font-helvetica text-gray-900">Documentation</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-400/10 border border-red-400/20 rounded-full px-5 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-red-500" />
            <span className="text-red-600 text-sm font-semibold font-poppins">Guide complet · Accès instantané</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-helvetica leading-tight mb-4">
            Mon plan personnel pour
            <br />
            <span className="text-red-400">arrêter de fumer</span>
          </h1>
          <p className="text-lg text-gray-500 font-poppins max-w-xl mx-auto">
            Un plan en 4 phases construit sur la science — pas sur la volonté seule. Adapté à ton profil, applicable dès aujourd&apos;hui.
          </p>
        </div>

        {/* Ce qui est inclus */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold font-helvetica mb-5">Ce que tu obtiens</h2>
          <ul className="space-y-3">
            {included.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="font-poppins text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Paiement */}
        <div className="bg-linear-to-br from-gray-900 to-gray-700 rounded-2xl p-8 md:p-10 text-center text-white">
          <p className="text-red-400 font-poppins font-semibold text-sm mb-2">Accès immédiat après paiement</p>
          <h2 className="text-2xl md:text-3xl font-bold font-helvetica mb-2">
            Obtenir le guide complet
          </h2>
          <p className="text-gray-400 font-poppins text-sm mb-8">
            Sans engagement · Téléchargement instantané · Support inclus
          </p>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="inline-flex items-center gap-2 bg-red-400 text-red-900 font-bold font-poppins text-lg px-10 py-4 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Chargement...
              </>
            ) : (
              <>
                Accéder au guide — 59€
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

      </main>
    </div>
  );
}
