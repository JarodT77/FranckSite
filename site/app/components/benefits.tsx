import { HeartPulse, Wallet, Clock, Smile, ChevronDown } from "lucide-react";

const benefits = [
  {
    icon: HeartPulse,
    title: "Santé améliorée",
    description: "Après 20 minutes, votre tension artérielle diminue. Après 12 heures, le taux de monoxyde de carbone revient à la normale.",
    stats: "-50% Risque cardiaque"
  },
  {
    icon: Wallet,
    title: "Économies considérables",
    description: "1 paquet/jour à 11€ : 4 015€ la première année. En 10 ans : plus de 40 000€. De l'argent réel que tu ne brûles plus littéralement.",
    stats: "Jusqu'à 3 000€ économisés par an"
  },
  {
    icon: Clock,
    title: "Plus de temps libre",
    description: "Fini les pauses forcées, les détours pour acheter, les sorties dans le froid. Du temps retrouvé pour ce qui en vaut la peine.",
    stats: "+2h par jour récupérées en moyenne"
  },
  {
    icon: Smile,
    title: "Bien-être quotidien",
    description: "Goût, odorat, souffle, sommeil, peau — tout se régénère. À 15 ans d'arrêt, ton cœur a les mêmes statistiques qu'un non-fumeur.",
    stats: "+40% D'énergie augmentée "
  }
];

export default function Benefits() {
  return (
    <section className="py-20 px-6 bg-linear-to-br from-black to-gray-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-helvetica mb-4">
            Les bienfaits de l&apos;arrêt du tabac
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-poppins">
            Ton corps commence à réparer dès que tu arrêtes. Voici ce que les données disent — sans enjoliver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/15 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold font-poppins mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed mb-4 font-poppins">
                      {benefit.description}
                    </p>
                    <div className="inline-block bg-red-500/50 text-white px-4 py-2 rounded-full text-sm font-semibold font-poppins">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-12 md:mt-16">
        <a
          href="#services"
          className="w-12 h-12 rounded-full border-2 border-red-400 flex items-center justify-center hover:border-red-500 hover:bg-red-500/5 transition-all"
        >
          <ChevronDown className="w-5 h-5 text-red-500 animate-bounce" />
        </a>
      </div>
    </section>
  );
}