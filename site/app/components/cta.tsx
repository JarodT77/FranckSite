"use client";

import { ArrowRight, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-6 bg-linear-to-br from-black to-gray-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-helvetica mb-6">
          Prêt à reprendre le contrôle ?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-blue-100 font-poppins">
          Rejoins le programme aujourd'hui. Pas demain. Pas lundi. Aujourd'hui.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.me/33638141287"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-400 text-red-900 px-8 py-4 rounded-full hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white transition-colors flex items-center justify-center gap-2 text-lg font-bold font-poppins shadow-xl"
          >
            Commencer maintenant
            <ArrowRight className="w-5 h-5" />
          </a>
          <button
            onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
            className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 active:bg-white/10 transition-colors text-lg font-medium font-poppins"
          >
            Parler à un conseiller
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle className="w-5 h-5 text-red-500" />
            <span className="text-sm font-poppins">Sans engagement</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle className="w-5 h-5 text-red-500" />
            <span className="text-sm font-poppins">Essai gratuit 14 jours</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle className="w-5 h-5 text-red-500" />
            <span className="text-sm font-poppins">Support 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
