import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Marc Dubois",
    age: 48,
    smokingYears: "25 ans de tabagisme",
    image:
      "https://images.unsplash.com/photo-1764084051711-45a3b7c84c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1pZGRsZS1hZ2VkJTIwbWFuJTIwc21pbGluZyUyMG91dGRvb3J8ZW58MXx8fHwxNzczNzY4NDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    testimonial:
      "Après 25 ans de tabagisme, je pensais que c'était impossible. Grâce au programme personnalisé et au soutien incroyable de mon coach, je suis libre depuis 8 mois. Ma santé s'est transformée, je respire mieux et j'ai retrouvé mon énergie.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    age: 35,
    smokingYears: "12 ans de tabagisme",
    image:
      "https://images.unsplash.com/photo-1656009178152-1e4402050560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdlbGxuZXNzJTIwY29hY2h8ZW58MXx8fHwxNzczNzUxMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    testimonial:
      "Le groupe de soutien a été essentiel pour moi. Partager mon expérience avec d'autres personnes qui comprennent vraiment ce que je traverse m'a donné la force de continuer. Les techniques de gestion du stress ont complètement changé ma vie.",
    rating: 5,
  },
  {
    name: "Camille Martin",
    age: 29,
    smokingYears: "10 ans de tabagisme",
    image:
      "https://images.unsplash.com/photo-1713145869505-18f4434f127c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwaGVhbHRoeSUyMGxpZmVzdHlsZSUyMHNtaWxlfGVufDF8fHx8MTc3Mzc2ODQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    testimonial:
      "J'avais essayé d'arrêter plusieurs fois sans succès. Ce programme m'a appris à comprendre mes déclencheurs et à développer de nouvelles habitudes. Le suivi quotidien de mes progrès m'a vraiment motivée. Je suis non-fumeuse depuis 6 mois !",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="px-4 md:px-6 bg-white-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-helvetica mb-4">
            Ils ont réussi, <span className="text-blue">pourquoi pas toi ?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-poppins">
            Découvre les témoignages inspirants de personnes qui ont repris le
            contrôle de leur vie
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 rounded-2xl hover:border-blue/30 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-blue/20 mb-4" />

              <p className="text-gray-700 leading-relaxed font-poppins mb-6">
                &ldquo;{testimonial.testimonial}&rdquo;
              </p>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-blue text-blue"
                  />
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue/20"
                />
                <div>
                  <h4 className="font-bold font-helvetica text-gray-900">
                    {testimonial.name}, {testimonial.age} ans
                  </h4>
                  <p className="text-sm text-blue font-poppins">
                    {testimonial.smokingYears}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
