import { BookOpen, Users, FileText, Check, ChevronDown } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: BookOpen,
    title: "ACCOMPAGNEMENT",
    price: "À partir de 499€",
    duration: "6 semaines",
    description:
      "Une méthode structurée étape par étape, à ton rythme.",
    features: [
      "Un programme complet étape par étape",
      "Des actions concrètes à appliquer",
      "Un suivi personnalisé pour rester motivé",
      "Une progression logique",
      "Un cadre pour éviter les rechutes",
    ],
    note: "Le tarif final est défini après un appel découverte.",
    cta: "Je veux être accompagné",
    highlighted: false,
  },
  {
    icon: Users,
    title: "COACHING",
    price: "À partir de 399€",
    duration: "4 semaines",
    description:
      "Un accompagnement 100% sur mesure avec un coach dédié pour t'aider à arrêter efficacement et durablement.",
    features: [
      "Un plan entièrement personnalisé",
      "Un suivi régulier avec un coach",
      "Un accompagnement humain et bienveillant",
      "Des ajustements selon tes progrès",
    ],
    note: "Le tarif final est défini après un appel découverte.",
    cta: "Démarrer mon coaching",
    highlighted: true,
    badge: "Le plus populaire",
  },
  {
    icon: FileText,
    title: "DOCUMENTATION",
    price: "59€",
    duration: "Accès instantané",
    description:
      "Accède aux ressources pour comprendre ton addiction et avancer seul.",
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
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-helvetica mb-4">
            Choisis ton
            <span> niveau d'engagement</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-poppins">
            Quel que soit ton point de départ, il existe une formule adaptée à ta situation.
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
                    ? "bg-linear-to-br from-black via-red-800 to-red-900 text-white shadow-lg scale-[1.02] md:scale-105 border border-white/10"
                    : "bg-white border border-gray-200 shadow-sm hover:border-red-500/30 hover:bg-red-50/50"
                }`}
              >
                {service.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-400 text-white text-sm font-semibold font-poppins px-4 py-1 rounded-full whitespace-nowrap">
                    {service.badge}
                  </span>
                )}

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    service.highlighted ? "bg-black/10" : "bg-red-500/10"
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 ${service.highlighted ? "text-white" : "text-red-500"}`}
                  />
                </div>

                <h3
                  className={`text-2xl font-bold font-helvetica text-center mb-3 ${
                    service.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>

                <div className="text-center mb-2">
                  <span
                    className={`text-3xl font-bold font-poppins ${
                      service.highlighted ? "text-white" : "text-red-400"
                    }`}
                  >
                    {service.price}
                  </span>
                  <span
                    className={`block text-sm font-poppins mt-0.5 ${
                      service.highlighted ? "text-white/60" : "text-gray-400"
                    }`}
                  >
                    {service.duration}
                  </span>
                </div>

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
                            service.highlighted ? "bg-white/20" : "bg-red-500/10"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${service.highlighted ? "text-white" : "text-red-500"}`}
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

                {"note" in service && service.note && (
                  <p
                    className={`text-xs text-center font-poppins mb-4 italic ${
                      service.highlighted ? "text-white/50" : "text-gray-400"
                    }`}
                  >
                    {service.note}
                  </p>
                )}

                {service.title === "DOCUMENTATION" ? (
                  <Link
                    href="/documentation"
                    className={`block w-full text-center font-bold font-poppins text-lg py-3.5 rounded-full transition-colors bg-red-400 text-red-900 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white`}
                  >
                    {service.cta}
                  </Link>
                ) : (
                  <a
                    href="/contact"
                    className={`block w-full text-center font-bold font-poppins text-lg py-3.5 rounded-full transition-colors ${
                      service.highlighted
                        ? "bg-red-700 text-white hover:bg-red-400 active:bg-red-400"
                        : "bg-red-400 text-red-900 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white"
                    }`}
                  >
                    {service.cta}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-12 md:mt-16">
        <a
          href="#temoignages"
          className="w-12 h-12 rounded-full border-2 border-red-400 flex items-center justify-center hover:border-red-500 hover:bg-red-500/5 transition-all"
        >
          <ChevronDown className="w-5 h-5 text-red-500 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
