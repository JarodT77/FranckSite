import { Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Marque */}
          <div>
            <h3 className="text-2xl font-bold font-helvetica text-red-400 mb-4">SOUFFLE LIBRE</h3>
            <p className="text-gray-400 font-poppins leading-relaxed">
              Un accompagnement personnalisé pour arrêter de fumer durablement — sans rechute, sans souffrance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold font-helvetica mb-4">Navigation</h4>
            <ul className="space-y-3 font-poppins">
              <li>
                <a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#temoignages" className="text-gray-400 hover:text-white transition-colors">Témoignages</a>
              </li>
              <li>
                <a href="#bilan-form" className="text-gray-400 hover:text-white transition-colors">Formulaire bilan</a>
              </li>
              <li>
                <a href="/documentation" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-helvetica mb-4">Contact</h4>
            <ul className="space-y-3 font-poppins">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-400 shrink-0" />
                <a href="tel:+33638141287" className="text-gray-400 hover:text-white transition-colors">
                  06 38 14 12 87
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-red-400 shrink-0" />
                <a
                  href="https://wa.me/33638141287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm font-poppins">
            &copy; {new Date().getFullYear()} Souffle Libre — Tous droits réservés. · Site créé par{" "}
            <a
              href="https://www.nozomiweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-white transition-colors"
            >
              Nozomi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
