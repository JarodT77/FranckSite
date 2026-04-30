"use client";

import { Brain, HeartPulse, ShieldAlert, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const problems = [
  {
    icon: Brain,
    title: "Problèmes psychologiques",
    description:
      "L\u2019addiction au tabac ne vient pas seulement de la nicotine. Elle est souvent li\u00e9e au stress, \u00e0 l\u2019anxi\u00e9t\u00e9 ou \u00e0 la d\u00e9pression. Si tu n\u2019arrives pas \u00e0 arr\u00eater, ce n\u2019est pas un manque de volont\u00e9 : ton cerveau utilise la cigarette comme une \u00e9chappatoire. En comprenant ces d\u00e9clencheurs \u00e9motionnels, tu peux enfin arr\u00eater durablement.",
  },
  {
    icon: HeartPulse,
    title: "Problèmes physiques",
    description:
      "L\u2019addiction au tabac a aussi des cons\u00e9quences physiques graves : maladies cardiaques, troubles respiratoires, fatigue chronique. Tu te retrouves dans un cercle vicieux o\u00f9 fumer aggrave ta sant\u00e9 tout en rendant l\u2019arr\u00eat encore plus difficile. Comprendre cet impact est essentiel pour reprendre le contr\u00f4le.",
  },
  {
    icon: ShieldAlert,
    title: "Problèmes liés aux tentatives d\u2019arrêt",
    description:
      "Tenter d\u2019arr\u00eater peut provoquer des sympt\u00f4mes de sevrage comme des naus\u00e9es, des tremblements ou des sueurs. Ces r\u00e9actions sont normales : ton corps se lib\u00e8re de la nicotine. En comprenant ces sympt\u00f4mes et en les anticipant, tu peux mieux les g\u00e9rer et r\u00e9ussir \u00e0 arr\u00eater durablement.",
  },
];

export default function Subject() {
    return (
        <section id="subject" className="mx-4 md:mx-40 mt-12 md:mt-24">
            <h2 className="text-2xl md:text-4xl font-bold font-helvetica text-center">
                Tu n'arrives pas arreter ?<br/><span className="text-black"> mais les conséquences sont déja là</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
                {problems.map((problem, index) => {
                  const Icon = problem.icon;
                  return (
                    <div
                      key={index}
                      className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-500/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-red-400/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-500 transition-colors duration-300 [&_svg]:text-red-500 [&_svg]:group-hover:text-white">
                        <Icon className="w-7 h-7 transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold font-helvetica text-gray-900 mb-4">
                        {problem.title}
                      </h3>
                      <p className="font-poppins text-gray-500 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  );
                })}
            </div>
            <div className="hidden md:flex flex-col items-center gap-6 mt-12">
                            <h2 className="text-2xl md:text-4xl font-bold font-helvetica text-center">DÉCIDE, AGIS, LIBÈRE TOI</h2>
                            <a href="#bilan-form" className="px-8 text-center bg-red-400 text-red-900 font-bold font-poppins text-lg py-4 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                                Je veux arrêter de fumer
                            </a>
                        </div>
            <div className="flex flex-col justify-center mt-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-4xl font-bold font-helvetica text-center mt-12 md:mt-24"
                >
                    Tu te reconnais dans ces problèmes ?
                </motion.h2>
                <div className="flex flex-col md:flex-row gap-8 mt-8 md:mt-12">
                    {/* Colonne gauche — Ma méthode */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 self-start flex flex-col gap-6"
                    >
                        <div className="rounded-2xl bg-linear-to-br from-black via-red-800 to-red-900 p-8 md:p-10">
                            <h3 className="text-xl md:text-2xl font-bold font-poppins text-white">
                                Une méthode structurée et efficace pour t&apos;aider à arrêter de fumer durablement, sans rechute et sans souffrance.
                            </h3>
                            <p className="font-poppins text-gray-300 mt-4 mb-8 text-lg">Ma méthode repose sur 4 piliers :</p>
                            <div className="grid grid-cols-2 gap-5">
                                {[
                                  { number: "1", title: "Diagnostic précis", desc: "On identifie exactement où tu en es" },
                                  { number: "2", title: "Objectifs clairs", desc: "Des étapes mesurables et réalistes" },
                                  { number: "3", title: "Outils éprouvés", desc: "Des techniques qui ont fait leurs preuves" },
                                  { number: "4", title: "Autonomie", desc: "Tu deviens acteur de ton changement" },
                                ].map((pillar) => (
                                  <div key={pillar.number} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-700 text-red-500 font-bold text-lg mb-3">
                                      {pillar.number}
                                    </span>
                                    <h4 className="text-white font-bold text-lg mb-1">{pillar.title}</h4>
                                    <p className="text-gray-300 text-sm">{pillar.desc}</p>
                                  </div>
                                ))}
                            </div>
                        </div>
                        
                    </motion.div>

                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex md:hidden flex-col items-center gap-6 mt-12"
                >
                    <h2 className="text-2xl font-bold font-helvetica text-center"> DÉCIDE, AGIS, LIBÈRE TOI</h2>
                    <a href="#contact" className="w-3/4 text-center bg-red-400 text-red-900 font-bold font-poppins text-lg py-4 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                        Je veux arrêter de fumer
                    </a>
                </motion.div>
            </div>

            <div className="flex justify-center mt-12 md:mt-16">
              <a
                href="#bilan-form"
                className="w-12 h-12 rounded-full border-2 border-red-400 flex items-center justify-center hover:border-red-500 hover:bg-red-500/5 transition-all"
              >
                <ChevronDown className="w-5 h-5 text-red-500 animate-bounce" />
              </a>
            </div>
        </section>
    );
}
