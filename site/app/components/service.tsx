import { BookOpen, Users, FileText, Check } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Accompagnement",
    description:
      "Une méthode structurée pour t'aider à arrêter de fumer à ton rythme avec un cadre clair et des étapes précises.",
    features: [
      "Un programme complet étape par étape",
      "Des actions concrètes à appliquer",
      "Un suivi personnalisé pour rester motivé",
      "Une progression logique",
      "Un cadre pour éviter les rechutes",
    ],
    cta: "Je veux être accompagné",
    highlighted: false,
  },
  {
    icon: Users,
    title: "Coaching",
    description:
      "Un accompagnement 100% sur mesure avec un coach dédié pour t'aider à arrêter efficacement et durablement.",
    features: [
      "Un plan entièrement personnalisé",
      "Un suivi régulier avec un coach",
      "Un accompagnement humain et bienveillant",
      "Des ajustements selon tes progrès",
    ],
    cta: "Démarrer mon coaching",
    highlighted: true,
    badge: "Le plus populaire",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Accède à des contenus pratiques pour comprendre ton addiction et commencer à arrêter par toi-même.",
    features: [
      "Guides et méthodes simples",
      "Techniques anti-envie",
      "Conseils applicables immédiatement",
      "Accès instantané",
    ],
    cta: "Accéder aux ressources",
    highlighted: false,
  },
];

export default function Service() {
  return (
    <section id="services" className="py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-helvetica mb-4">
            Choisis le niveau d&apos;accompagnement
            <br />
            <span className="text-blue">dont tu as besoin</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-poppins">
            Que tu veuilles être guidé de A à Z ou avancer seul, il existe une
            solution adaptée à ta situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.highlighted
                    ? "bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 text-white shadow-lg scale-[1.02] md:scale-105 border border-white/10"
                    : "bg-white border border-gray-200 shadow-sm hover:border-blue/30"
                }`}
              >
                {service.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue text-white text-sm font-semibold font-poppins px-4 py-1 rounded-full whitespace-nowrap">
                    {service.badge}
                  </span>
                )}

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    service.highlighted ? "bg-white/15" : "bg-blue/10"
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 ${service.highlighted ? "text-white" : "text-blue"}`}
                  />
                </div>

                <h3
                  className={`text-2xl font-bold font-helvetica text-center mb-3 ${
                    service.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-center font-poppins mb-6 leading-relaxed ${
                    service.highlighted ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>

                <div className="flex-1">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            service.highlighted ? "bg-white/20" : "bg-blue/10"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${service.highlighted ? "text-white" : "text-blue"}`}
                          />
                        </div>
                        <span
                          className={`font-poppins text-sm ${
                            service.highlighted ? "text-blue-50" : "text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full font-bold font-poppins text-lg py-3.5 rounded-full transition-colors ${
                    service.highlighted
                      ? "bg-white text-blue hover:bg-blue-50"
                      : "bg-blue text-white hover:bg-blue/90"
                  }`}
                >
                  {service.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
