"use client";

import Image from "next/image";
import cigarette from "../images/cigarette.jpg";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div id="accueil" className="px-4 md:px-40 mt-10 md:mt-20">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 bg-blue/10 border border-blue/20 rounded-full px-5 py-2 mb-8"
      >
        <span className="w-2 h-2 bg-blue rounded-full animate-pulse" />
        <p className="text-blue text-sm md:text-base font-semibold font-poppins">
          Ton addiction s&apos;arrête ici
        </p>
      </motion.div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-helvetica leading-tight">
            Arrête de fumer,
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-blue"
            >
              reprends le contrôle
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg md:text-xl mt-5 md:mt-6 font-poppins text-gray-600 leading-relaxed"
          >
            Un accompagnement personnalisé, un coaching adapté à ton profil et
            une IA qui t&apos;aide à choisir la meilleure méthode pour toi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a
              href="#bilan-form"
              className="inline-flex items-center justify-center gap-2 bg-blue text-white text-lg font-bold font-poppins py-3.5 px-8 rounded-full hover:bg-blue/90 transition-colors shadow-lg shadow-blue/25"
            >
              Commencer maintenant
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats */}
          <div className="flex gap-6 md:gap-12 mt-10 md:mt-14">
            {[
              { value: "80%", label: "de réussite" },
              { value: "+2 ans", label: "d\u2019espérance de vie gagnée" },
              { value: "3 600€", label: "économisés par an" },
            ].map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.15 }}
              >
                <p className="text-2xl md:text-4xl font-bold font-poppins text-blue">
                  {stat.value}
                </p>
                <span className="text-sm md:text-base text-gray-500 font-poppins">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full md:w-1/2 h-64 md:h-125 relative overflow-hidden rounded-2xl shadow-2xl"
        >
          <Image
            src={cigarette}
            alt="Arrêter de fumer"
            fill
            className="object-cover object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="flex justify-center mt-12 md:mt-16"
      >
        <a
          href="#subject"
          className="w-12 h-12 rounded-full border-2 border-blue/30 flex items-center justify-center hover:border-blue hover:bg-blue/5 transition-all"
        >
          <ChevronDown className="w-5 h-5 text-blue animate-bounce" />
        </a>
      </motion.div>
    </div>
  );
}
