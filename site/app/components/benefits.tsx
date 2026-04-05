import { HeartPulse, Wallet, Clock, Smile } from "lucide-react";

const benefits = [
  {
    icon: HeartPulse,
    title: "Santé améliorée",
    description: "Après 20 minutes, votre tension artérielle diminue. Après 12 heures, le taux de monoxyde de carbone revient à la normale.",
    stats: "Risque cardiaque réduit de 50% après 1 an"
  },
  {
    icon: Wallet,
    title: "Économies considérables",
    description: "Un fumeur moyen dépense environ 3 000€ par an en cigarettes. Imaginez ce que vous pourriez faire avec cet argent !",
    stats: "Jusqu'à 3 000€ économisés par an"
  },
  {
    icon: Clock,
    title: "Plus de temps libre",
    description: "Fini les pauses cigarettes, les détours pour acheter des paquets. Récupérez du temps précieux pour ce qui compte vraiment.",
    stats: "2h par jour récupérées en moyenne"
  },
  {
    icon: Smile,
    title: "Bien-être quotidien",
    description: "Retrouvez le goût et l'odorat, respirez librement, dormez mieux et profitez d'une peau plus saine et éclatante.",
    stats: "Énergie augmentée de 40%"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 px-6 bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 text-white mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-helvetica mb-4">
            Les bienfaits de l&apos;arrêt du tabac
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-poppins">
            Votre corps commence à se régénérer dès les premières heures
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
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold font-poppins mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed mb-4 font-poppins">
                      {benefit.description}
                    </p>
                    <div className="inline-block bg-white/15 text-white px-4 py-2 rounded-full text-sm font-semibold font-poppins">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}