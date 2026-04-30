"use client";

import { motion } from "motion/react";

export default function Resolution() {
    return (
        <section className="mx-4 md:mx-40 mt-12 md:mt-24">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-4xl font-bold font-helvetica text-center"
            >
                On traite la <span className="text-red-500">cause</span>, pas seulement les symptômes
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-8 mt-10 md:mt-14">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 bg-linear-to-br from-black to-gray-600 rounded-2xl p-6 md:p-8 border border-gray-200"
                >
                    <h3 className="text-xl font-bold font-poppins mb-5 text-white">On travaille ensemble pour :</h3>
                    <div className="space-y-4">
                        {[
                            { icon: "🎯", text: "Identifier tes déclencheurs", desc: "Comprendre ce qui te pousse à fumer" },
                            { icon: "🔄", text: "Transformer tes routines", desc: "Remplacer les mauvaises habitudes" },
                            { icon: "🛠️", text: "Mettre en place des substituts", desc: "Efficaces et adaptés à toi" },
                            { icon: "📊", text: "Ajuster en temps réel", desc: "Selon tes progrès et difficultés" },
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4 items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-sm">
                                <span className="text-2xl shrink-0">{item.icon}</span>
                                <div>
                                    <p className="font-semibold text-white">{item.text}</p>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex-1 bg-white border border-red-500/20 rounded-2xl p-6 md:p-8 flex flex-col justify-center"
                >
                    <p className="text-red-500 font-semibold text-lg mb-3">Pourquoi ça marche ?</p>
                    <p className="text-gray-800 text-xl leading-relaxed">
                        Parce qu&apos;on ne se contente pas de <span className="text-red-500 font-bold">supprimer</span> la cigarette.
                    </p>
                    <p className="text-gray-600 text-xl leading-relaxed mt-3">
                        On <span className="text-red-500 font-semibold">reconstruit </span>ton rapport au stress, à l&apos;ennui, aux émotions.
                    </p>
                    <p className="text-gray-500 text-lg mt-4">
                        C&apos;est un changement profond. Pas un patch temporaire.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
