import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Marque */}
          <div>
            <h3 className="text-2xl font-bold font-helvetica mb-4">My Navbar</h3>
            <p className="text-blue-200 font-poppins leading-relaxed">
              Un accompagnement personnalisé pour t&apos;aider à arrêter de fumer durablement, sans rechute et sans souffrance.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-bold font-helvetica mb-4">Liens rapides</h4>
            <ul className="space-y-3 font-poppins">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#bilan-form" className="text-blue-200 hover:text-white transition-colors">
                  Bilan personnel
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-helvetica mb-4">Contact</h4>
            <ul className="space-y-3 font-poppins">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-300 shrink-0" />
                <a href="mailto:contact@example.com" className="text-blue-200 hover:text-white transition-colors">
                  contact@example.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300 shrink-0" />
                <a href="tel:+33600000000" className="text-blue-200 hover:text-white transition-colors">
                  06 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-300 shrink-0" />
                <span className="text-blue-200">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur + Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-blue-300 text-sm font-poppins">
            &copy; {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
