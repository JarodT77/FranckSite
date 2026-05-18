"use client";

import Image from "next/image";
import franck2 from "../images/franck2.png";
import { CheckCircle, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const points = [
  "Ancien fumeur — je connais ce combat de l'intérieur",
  "Formé aux Thérapies Cognitives et Comportementales (TCC)",
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
          Qui <span className="text-red-400">je suis</span>
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
            Je ne suis pas un thérapeute sorti d&apos;un manuel. J&apos;ai moi-même traversé l&apos;addiction au tabac — les tentatives ratées, les rechutes, la honte de recommencer. Ce combat, je l&apos;ai vécu de l&apos;intérieur, et c&apos;est exactement pour ça que j&apos;ai décidé d&apos;en faire ma raison d&apos;agir.
          </p>
          <p className="font-poppins text-gray-600 text-lg leading-relaxed">
            Aujourd&apos;hui, j&apos;accompagne des fumeurs qui en ont assez des patchs, des applications, et des bons conseils qui ne changent rien. Mon approche est directe, structurée, et ancrée dans ta réalité — parce que je sais que chaque dépendance a une histoire unique.
          </p>
          <p className="font-poppins text-gray-600 text-lg leading-relaxed">
            Ce que je t&apos;offre ne se limite pas à &quot;arrêter de fumer&quot;. Je t&apos;aide à comprendre tes déclencheurs, à reconstruire un rapport sain à toi-même, et à gagner une liberté que tu croyais peut-être perdue pour toujours.
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
