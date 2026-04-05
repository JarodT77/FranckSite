"use client";

import { Brain, HeartPulse, ShieldAlert } from "lucide-react";
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
                Tu veux arrêter ...<br/><span className="text-blue"> mais quelque chose te bloque ?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
                {problems.map((problem, index) => {
                  const Icon = problem.icon;
                  return (
                    <div
                      key={index}
                      className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue transition-colors duration-300 [&_svg]:text-blue [&_svg]:group-hover:text-white">
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
            <div className="flex flex-col justify-center mt-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-4xl font-bold font-helvetica text-center mt-12 md:mt-24"
                >
                    Tu te reconnais dans ces problèmes ?<br/><span className="text-blue"> Arrêter de fumer ne devrait pas être une lutte permanente</span>
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
                        <div className="rounded-2xl bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 p-8 md:p-10">
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
                                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-blue font-bold text-lg mb-3">
                                      {pillar.number}
                                    </span>
                                    <h4 className="text-white font-bold text-lg mb-1">{pillar.title}</h4>
                                    <p className="text-gray-300 text-sm">{pillar.desc}</p>
                                  </div>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:flex flex-col items-center gap-6 mt-12">
                            <h2 className="text-2xl md:text-4xl font-bold font-helvetica text-center"> Tu es prêt à vraiment arrêter de fumer ?</h2>
                            <a href="#contact" className="w-1/2 text-center bg-blue text-white font-bold font-poppins text-lg py-4 rounded-full hover:bg-blue/90 transition-colors">
                                Remplir le formulaire
                            </a>
                        </div>
                    </motion.div>

                    {/* Colonne droite — On traite la cause */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold font-helvetica text-center md:text-left">
                            On traite la <span className="text-blue">cause</span>, pas seulement les symptômes
                        </h2>

                        <div className="flex-1 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
                            <h3 className="text-xl font-bold font-poppins mb-5">On travaille ensemble pour :</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: "🎯", text: "Identifier tes déclencheurs", desc: "Comprendre ce qui te pousse à fumer" },
                                    { icon: "🔄", text: "Transformer tes routines", desc: "Remplacer les mauvaises habitudes" },
                                    { icon: "🛠️", text: "Mettre en place des substituts", desc: "Efficaces et adaptés à toi" },
                                    { icon: "📊", text: "Ajuster en temps réel", desc: "Selon tes progrès et difficultés" },
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4 items-center bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                                      <span className="text-2xl shrink-0">{item.icon}</span>
                                      <div>
                                        <p className="font-semibold text-gray-900">{item.text}</p>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                      </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-blue/5 border border-blue/20 rounded-2xl p-6 md:p-8">
                            <p className="text-blue font-semibold text-lg mb-3">Pourquoi ça marche ?</p>
                            <p className="text-gray-800 text-lg leading-relaxed">
                              Parce qu&apos;on ne se contente pas de <span className="text-blue font-bold">supprimer</span> la cigarette.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mt-2">
                              On <span className="text-gray-900 font-semibold">reconstruit </span>ton rapport au stress, à l&apos;ennui, aux émotions.
                            </p>
                            <p className="text-gray-500 mt-2">
                              C&apos;est un changement profond. Pas un patch temporaire.
                            </p>
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
                    <h2 className="text-2xl font-bold font-helvetica text-center"> Tu es prêt à vraiment arrêter de fumer ?</h2>
                    <a href="#contact" className="w-3/4 text-center bg-blue text-white font-bold font-poppins text-lg py-4 rounded-full hover:bg-blue/90 transition-colors">
                        Remplir le formulaire
                    </a>
                </motion.div>
            </div>


        </section>
    );
}
