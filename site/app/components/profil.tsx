"use client";

import Image from "next/image";
import franck2 from "../images/franck2.png";
import { CheckCircle, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const points = [
  "Ancien fumeur — je connais ce combat de l'intérieur",
  "Accompagnement 100% personnalisé — pas de programme générique",
  "Plus de 200 personnes aidées à arrêter durablement",
];

export default function Profil() {
  return (
    <section className="mx-4 md:mx-40 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-14"
      >
        <span className="inline-flex items-center gap-2 bg-red-400/10 border border-red-400/20 rounded-full px-5 py-2 mb-5">
          <span className="w-2 h-2 bg-red-400 rounded-full" />
          <p className="text-red-600 text-sm font-semibold font-poppins">
            À propos
          </p>
        </span>
        <h2 className="text-2xl md:text-4xl font-bold font-helvetica">
          Pas une théoricien.<span className="text-red-400">Un practicien.</span>
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full md:w-2/5 relative rounded-2xl shadow-2xl overflow-hidden"
        >
          <Image
            src={franck2}
            alt="Franck, coach arrêt du tabac"
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-3/5 flex flex-col gap-6"
        >
          <p className="font-poppins text-gray-600 text-lg leading-relaxed">
            Je m'appelle Franck. Je ne suis pas sorti d'une école avec un diplôme encadré. J'ai construit ma méthode sur le terrain, au contact de centaines de milliers de personnes que j'ai accompagnées dans la diminution et l'arrêt du tabac — des profils variés, des histoires uniques, des défis que les programmes standards ne savent pas traiter.
          </p>
          <p className="font-poppins text-gray-600 text-lg leading-relaxed">
            Cette expérience massive, personne ne peut la simuler en salle de cours. Elle m'a appris ce qui fonctionne vraiment, ce qui échoue, et surtout pourquoi. Mon approche est directe, bienveillante et structurée. Je ne te mens pas, je ne te flatte pas. Je travaille avec toi, pas pour toi. Parce que la vraie liberté, c'est celle que tu construis toi-même — avec le bon guide à tes côtés.
          </p>
          <p className="font-poppins text-gray-600 text-xl font-bold leading-relaxed">
            "Si tu suis ma méthode à 100%, tu verras des résultats concrets dès la première semaine. C'est ma promesse."
          </p>

          <ul className="flex flex-col gap-3 mt-2">
            {points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3 font-poppins text-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                {point}
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="inline-flex items-center justify-center gap-2 self-start bg-red-400 text-red-900 text-lg font-bold font-poppins py-3.5 px-8 rounded-full hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white transition-colors shadow-lg mt-2"
          >
            Me contacter
          </motion.a>
        </motion.div>
      </div>

      <div className="flex justify-center mt-12 md:mt-16">
        <a
          href="#subject"
          className="w-12 h-12 rounded-full border-2 border-red-400 flex items-center justify-center hover:border-red-500 hover:bg-red-500/5 transition-all"
        >
          <ChevronDown className="w-5 h-5 text-red-500 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
