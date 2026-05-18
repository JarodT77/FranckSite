"use client";

import { Phone, MessageCircle, ArrowLeft, Mail } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white-alt flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 font-poppins text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-400/10 border border-red-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <p className="text-red-600 text-sm font-semibold font-poppins">Disponible maintenant</p>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold font-helvetica mb-2">
            Contacte Franck
          </h1>
          <p className="text-gray-500 font-poppins text-base mb-8 leading-relaxed">
            Un premier échange sans engagement. Dis-moi où tu en es, on voit ensemble comment je peux t&apos;aider.
          </p>

          {/* Coordonnées */}
          <div className="flex flex-col gap-4 mb-8">
            <a
              href="tel:+33638141287"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-red-400/40 hover:bg-red-400/5 transition-all group"
            >
              <div className="w-11 h-11 bg-red-400/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-red-400 transition-colors">
                <Phone className="w-5 h-5 text-red-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-poppins">Téléphone</p>
                <p className="text-gray-800 font-bold font-poppins">06 38 14 12 87</p>
              </div>
            </a>

            <a
              href="mailto:franck@soufflelibre.fr"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-red-400/40 hover:bg-red-400/5 transition-all group"
            >
              <div className="w-11 h-11 bg-red-400/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-red-400 transition-colors">
                <Mail className="w-5 h-5 text-red-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-poppins">Email</p>
                <p className="text-gray-800 font-bold font-poppins">franck@soufflelibre.fr</p>
              </div>
            </a>
          </div>

          {/* CTA WhatsApp */}
          <a
            href="https://wa.me/33638141287"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#1ebe5d] text-white font-bold font-poppins text-lg py-4 rounded-full transition-colors shadow-lg shadow-green-200"
          >
            <MessageCircle className="w-6 h-6" />
            Écrire sur WhatsApp
          </a>

          <p className="text-center text-xs text-gray-400 font-poppins mt-4">
            Réponse généralement sous 1h en journée
          </p>
        </motion.div>
      </div>
    </div>
  );
}
