"use client";

import { useState } from "react";
import { User, Cigarette, Heart, DollarSign, Target, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function DetailedForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState({
    // Identité
    firstName: "",
    age: "",
    email: "",
    phone: "",
    
    // Consommation
    smokingYears: "",
    cigaretteType: [] as string[],
    cigarettesPerDay: "",
    firstCigarette: "",
    smokingMoments: [] as string[],
    weekdayVsWeekend: "",
    aloneVsSocial: "",
    
    // Psychologie & émotions
    emotions: [] as string[],
    stressManagement: "",
    stressSmoking: "",
    guilt: "",
    weightFear: "",
    failureFear: "",
    relapseCause: "",
    motivationLevel: "5",
    
    // Budget & finances
    monthlyBudget: "",
    priceInfluence: "",
    financialMotivation: "",
    savingsDestination: [] as string[],
    calculatedSavings: "",
    
    // Objectifs & accompagnement
    quitDate: "",
    supportType: [] as string[],
    message: "",
  });

  const totalQuestions = 27;
  const answeredQuestions = Object.values(formData).filter(v => 
    Array.isArray(v) ? v.length > 0 : v !== ""
  ).length;
  const progress = Math.round((answeredQuestions / totalQuestions) * 100);

  const handleCheckboxChange = (field: string, value: string) => {
    const currentValues = formData[field as keyof typeof formData] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    setFormData(prev => ({ ...prev, [field]: newValues }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Validation de chaque section
  const validateSection = (sectionIndex: number): boolean => {
    switch (sectionIndex) {
      case 0: // Identité
        return !!(formData.firstName && formData.age && formData.email);
      case 1: // Consommation
        return !!(
          formData.smokingYears &&
          formData.cigaretteType.length > 0 &&
          formData.cigarettesPerDay &&
          formData.firstCigarette &&
          formData.smokingMoments.length > 0
        );
      case 2: // Psychologie & émotions
        return !!(
          formData.emotions.length > 0 &&
          formData.stressManagement &&
          formData.motivationLevel
        );
      case 3: // Budget & finances
        return !!(formData.monthlyBudget);
      case 4: // Objectifs & accompagnement
        return !!(formData.quitDate);
      default:
        return false;
    }
  };

  const canGoNext = validateSection(currentStep);

  const handleNext = () => {
    if (canGoNext && currentStep < sections.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const sections = [
    {
      title: "Identité",
      icon: User,
      questions: "Q 1–4",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prénom <span className="text-blue">*</span>
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                placeholder="Votre prénom"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue/50 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Âge <span className="text-blue">*</span>
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleChange("age", e.target.value)}
                placeholder="Ex : 34"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue/50 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail <span className="text-blue">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="vous@email.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue/50 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="06 00 00 00 00"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue/50 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Consommation",
      icon: Cigarette,
      questions: "Q 5–11",
      content: (
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Depuis combien d'années fumez-vous ? <span className="text-blue">*</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {["Moins d'1 an", "1 à 5 ans", "5 à 10 ans", "10 à 20 ans", "+ de 20 ans"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("smokingYears", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.smokingYears === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type(s) de cigarettes <span className="text-blue">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-3">Plusieurs choix possibles</p>
            <div className="flex flex-wrap gap-3">
              {["Manufacturée classique", "À rouler", "Légère / ultra-légère", "Mentholée", "Électronique", "Tabac chauffé", "Cigare / cigarillo"].map(option => (
                <button
                  key={option}
                  onClick={() => handleCheckboxChange("cigaretteType", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.cigaretteType.includes(option)
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Nombre de cigarettes par jour <span className="text-blue">*</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {["Moins de 5", "5 à 10", "10 à 20", "20 à 30", "30+"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("cigarettesPerDay", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.cigarettesPerDay === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Première cigarette après le réveil <span className="text-blue">*</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {["— 5 min", "5–30 min", "30 min–1h", "+ 1h"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("firstCigarette", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.firstCigarette === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Moments où vous fumez le plus <span className="text-blue">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-3">Plusieurs choix possibles</p>
            <div className="flex flex-wrap gap-3">
              {["Au réveil", "Avec le café", "Après les repas", "En pause travail", "En voiture", "En soirée", "Avant de dormir", "Quand je m'ennuie"].map(option => (
                <button
                  key={option}
                  onClick={() => handleCheckboxChange("smokingMoments", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.smokingMoments.includes(option)
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Fumez-vous plus en semaine ou le week-end ?
            </label>
            <div className="flex flex-wrap gap-3">
              {["Semaine", "Week-end", "Pareil", "Ça varie"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("weekdayVsWeekend", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.weekdayVsWeekend === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Fumez-vous davantage seul(e) ou en société ?
            </label>
            <div className="flex flex-wrap gap-3">
              {["Plutôt seul(e)", "Plutôt en société", "Les deux pareil"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("aloneVsSocial", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.aloneVsSocial === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Psychologie & émotions",
      icon: Heart,
      questions: "Q 12–19",
      content: (
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quelle(s) émotion(s) vous pousse(nt) à allumer une cigarette ? <span className="text-blue">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-3">Plusieurs choix possibles</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Stress", emoji: "😰" },
                { label: "Tristesse", emoji: "😔" },
                { label: "Colère", emoji: "😠" },
                { label: "Anxiété", emoji: "😟" },
                { label: "Ennui", emoji: "😴" },
                { label: "Plaisir / détente", emoji: "😌" },
                { label: "Fête / célébration", emoji: "🎉" },
                { label: "Concentration", emoji: "🤔" },
              ].map(({ label, emoji }) => (
                <button
                  key={label}
                  onClick={() => handleCheckboxChange("emotions", label)}
                  className={`p-4 rounded-xl border transition-all text-center ${
                    formData.emotions.includes(label)
                      ? "bg-blue/10 border-blue"
                      : "border-gray-200 hover:border-blue/50"
                  }`}
                >
                  <div className="text-3xl mb-2">{emoji}</div>
                  <div className="text-sm text-gray-700">{label}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Le tabac vous aide-t-il à gérer votre stress au quotidien ? <span className="text-blue">*</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {["Oui, beaucoup", "Un peu", "Pas vraiment", "Non"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("stressManagement", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.stressManagement === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Avez-vous tendance à fumer plus en période de stress intense ?
            </label>
            <div className="flex flex-wrap gap-3">
              {["Oui, beaucoup plus", "Un peu plus", "Non, pareil", "Moins"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("stressSmoking", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.stressSmoking === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Ressentez-vous de la culpabilité après avoir fumé ?
            </label>
            <div className="flex flex-wrap gap-3">
              {["Toujours", "Souvent", "Parfois", "Jamais"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("guilt", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.guilt === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Avez-vous peur de prendre du poids en arrêtant ?
            </label>
            <div className="flex flex-wrap gap-3">
              {["Oui, très peur", "Un peu", "Non"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("weightFear", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.weightFear === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Avez-vous peur de ne pas réussir à arrêter ?
            </label>
            <div className="flex flex-wrap gap-3">
              {["Oui, très peur", "Un peu", "Non, confiant(e)"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("failureFear", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.failureFear === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Qu'est-ce qui vous a fait rechuter lors de tentatives passées ?
            </label>
            <div className="flex flex-wrap gap-3">
              {["Stress soudain", "Entourage fumeur", "Alcool / fête", "Manque physique intense", "Prise de poids", "Ennui / vide", "Pas de tentative passée"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("relapseCause", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.relapseCause === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sur 10, votre niveau de motivation à arrêter <span className="text-blue">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-4">1 = pas du tout — 10 = totalement déterminé(e)</p>
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <button
                  key={num}
                  onClick={() => handleChange("motivationLevel", num.toString())}
                  className={`flex-1 py-3 rounded-lg border transition-all font-medium ${
                    formData.motivationLevel === num.toString()
                      ? "bg-blue border-blue text-white"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Pas motivé(e)</span>
              <span>Très motivé(e)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Budget & finances",
      icon: DollarSign,
      questions: "Q 20–24",
      content: (
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Combien dépensez-vous par mois en cigarettes ? <span className="text-blue">*</span>
            </label>
            <div className="space-y-3">
              {[
                { range: "Moins de 50 €", desc: "Consommation légère", yearly: "≈ 600 €/an" },
                { range: "50 à 100 €", desc: "Consommation modérée", yearly: "≈ 900 €/an" },
                { range: "100 à 150 €", desc: "Consommation régulière", yearly: "≈ 1 500 €/an" },
                { range: "150 à 200 €", desc: "Consommation élevée", yearly: "≈ 2 100 €/an" },
                { range: "+ de 200 €", desc: "Consommation très élevée", yearly: "≈ 2 500 €+/an" },
              ].map(({ range, desc, yearly }) => (
                <button
                  key={range}
                  onClick={() => handleChange("monthlyBudget", range)}
                  className={`w-full p-4 rounded-xl border transition-all text-left ${
                    formData.monthlyBudget === range
                      ? "bg-blue/10 border-blue"
                      : "border-gray-200 hover:border-blue/50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold text-gray-900">{range}</div>
                      <div className="text-sm text-gray-500">{desc}</div>
                    </div>
                    <div className="text-blue font-medium">{yearly}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Le prix des cigarettes influence-t-il votre consommation ?
            </label>
            <div className="flex flex-wrap gap-3">
              {["Oui, beaucoup", "Un peu", "Non, pas vraiment"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("priceInfluence", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.priceInfluence === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              L'aspect financier est-il une motivation pour arrêter ?
            </label>
            <div className="flex flex-wrap gap-3">
              {["Oui, c'est ma raison principale", "Oui, parmi d'autres raisons", "Non, pas vraiment"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("financialMotivation", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.financialMotivation === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Si vous économisiez cet argent, à quoi le destineriez-vous ?
            </label>
            <div className="flex flex-wrap gap-3">
              {["Voyages", "Épargne", "Sport / bien-être", "Ma famille", "Alimentation", "Pas encore défini"].map(option => (
                <button
                  key={option}
                  onClick={() => handleCheckboxChange("savingsDestination", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.savingsDestination.includes(option)
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Avez-vous calculé ce que vous économiseriez en arrêtant ?
            </label>
            <div className="flex flex-wrap gap-3">
              {["Oui, et c'est motivant", "Oui, mais pas décisif", "Non, jamais calculé"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("calculatedSavings", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.calculatedSavings === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Objectifs & accompagnement",
      icon: Target,
      questions: "Q 25–27",
      content: (
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Quand souhaitez-vous arrêter de fumer ? <span className="text-blue">*</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {["Immédiatement", "Dans la semaine", "Dans le mois", "D'ici 3 mois", "Pas encore décidé"].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange("quitDate", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.quitDate === option
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Quel type d'accompagnement préférez-vous ?
            </label>
            <div className="flex flex-wrap gap-3">
              {["Suivi individuel", "Groupe de soutien", "Coaching en ligne", "Exercices pratiques", "Méditation / relaxation", "Suivi par e-mail"].map(option => (
                <button
                  key={option}
                  onClick={() => handleCheckboxChange("supportType", option)}
                  className={`px-6 py-2.5 rounded-full border transition-all ${
                    formData.supportType.includes(option)
                      ? "bg-blue/10 border-blue text-blue"
                      : "border-gray-200 text-gray-600 hover:border-blue/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Un message pour votre coach ?
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Contexte particulier, attentes, questions…"
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue/50 focus:border-transparent outline-none resize-none"
            />
          </div>
        </div>
      ),
    },
  ];

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Votre bilan a été envoyé avec succès ! Un coach vous contactera très prochainement.");
  };

  return (
    <section id="bilan-form" className="py-20 px-4 md:px-6 bg-white-alt overflow-x-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-helvetica mb-4">
            Bilan personnel <span className="text-blue">confidentiel</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-poppins">
            Réponds à ces questions pour permettre à ton coach de préparer un programme 100 % adapté à ton profil.
          </p>
        </div>

        {/* Indicateur d'étapes */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isCompleted = validateSection(index);
              const isCurrent = index === currentStep;
              const isAccessible = index === 0 || validateSection(index - 1);
              
              return (
                <div key={index} className="flex items-center flex-1">
                  <button
                    onClick={() => isAccessible && setCurrentStep(index)}
                    disabled={!isAccessible}
                    className={`flex flex-col items-center gap-2 transition-all ${
                      isAccessible ? 'cursor-pointer' : 'cursor-not-allowed opacity-40'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${
                        isCurrent
                          ? 'bg-blue text-white scale-110 shadow-lg'
                          : isCompleted
                          ? 'bg-blue/10 text-blue'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {isCompleted && !isCurrent ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <span
                      className={`text-xs font-medium text-center hidden md:block ${
                        isCurrent ? 'text-blue' : isCompleted ? 'text-gray-700' : 'text-gray-400'
                      }`}
                    >
                      {section.title}
                    </span>
                  </button>
                  {index < sections.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 ${isCompleted ? 'bg-blue' : 'bg-gray-200'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section actuelle du formulaire */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8"
          >
            <div className="border-b border-gray-100 px-4 md:px-8 py-5 md:py-6 flex items-center justify-between gap-2">
              <div className="flex items-center gap-3 md:gap-4 min-w-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-linear-to-br from-blue/10 to-blue/5 rounded-full flex items-center justify-center shrink-0">
                  {(() => {
                    const Icon = sections[currentStep].icon;
                    return <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue" />;
                  })()}
                </div>
                <h3 className="text-xl md:text-2xl font-helvetica text-gray-800 truncate">{sections[currentStep].title}</h3>
              </div>
              <span className="text-sm text-gray-400 font-medium shrink-0">{sections[currentStep].questions}</span>
            </div>
            <div className="px-4 md:px-8 py-6 md:py-8">
              {sections[currentStep].content}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Boutons de navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center order-first md:order-0">
            <div className="text-sm text-gray-600 mb-1">
              Étape {currentStep + 1} sur {sections.length}
            </div>
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / sections.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 md:px-8 py-3 rounded-full transition-all text-base md:text-lg font-medium ${
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow hover:shadow-lg'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Précédent
            </button>

            {currentStep < sections.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className={`flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 md:px-8 py-3 rounded-full transition-all text-base md:text-lg font-medium ${
                  !canGoNext
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue text-white hover:bg-blue/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                }`}
              >
                Suivant
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canGoNext}
                className={`flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 md:px-8 py-3 rounded-full transition-all text-base md:text-lg font-medium ${
                  !canGoNext
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue text-white hover:bg-blue/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                }`}
              >
                Envoyer mon bilan
                <Check className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-400 text-center mt-6">
          {!canGoNext && "Veuillez remplir tous les champs obligatoires (*) pour continuer"}
        </p>
      </div>
    </section>
  );
}