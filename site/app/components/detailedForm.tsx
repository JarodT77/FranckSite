"use client";

import { useState } from "react";
import { User, Cigarette, Heart, DollarSign, Target, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type FormData = {
  firstName: string;
  age: string;
  email: string;
  phone: string;
  smokingYears: string;
  cigaretteType: string[];
  cigarettesPerDay: string;
  firstCigarette: string;
  smokingMoments: string[];
  weekdayVsWeekend: string;
  aloneVsSocial: string;
  emotions: string[];
  stressManagement: string;
  stressSmoking: string;
  guilt: string;
  weightFear: string;
  failureFear: string;
  relapseCause: string;
  motivationLevel: string;
  monthlyBudget: string;
  priceInfluence: string;
  financialMotivation: string;
  savingsDestination: string[];
  calculatedSavings: string;
  quitDate: string;
  supportType: string[];
  message: string;
};

function isFieldAnswered(formData: FormData, field: keyof FormData): boolean {
  const val = formData[field];
  if (Array.isArray(val)) return val.length > 0;
  return val !== "";
}

function ProgressiveQuestion({ visible, children }: { visible: boolean; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: 24 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ overflow: "hidden" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Composants de questions réutilisables
function ChoiceButtons({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`px-6 py-2.5 rounded-full border transition-all ${
            value === option
              ? "bg-blue/10 border-blue text-blue"
              : "border-gray-200 text-gray-600 hover:border-blue/50"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function MultiChoiceButtons({
  options,
  values,
  onChange,
}: {
  options: string[];
  values: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`px-6 py-2.5 rounded-full border transition-all ${
            values.includes(option)
              ? "bg-blue/10 border-blue text-blue"
              : "border-gray-200 text-gray-600 hover:border-blue/50"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default function DetailedForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    age: "",
    email: "",
    phone: "",
    smokingYears: "",
    cigaretteType: [],
    cigarettesPerDay: "",
    firstCigarette: "",
    smokingMoments: [],
    weekdayVsWeekend: "",
    aloneVsSocial: "",
    emotions: [],
    stressManagement: "",
    stressSmoking: "",
    guilt: "",
    weightFear: "",
    failureFear: "",
    relapseCause: "",
    motivationLevel: "5",
    monthlyBudget: "",
    priceInfluence: "",
    financialMotivation: "",
    savingsDestination: [],
    calculatedSavings: "",
    quitDate: "",
    supportType: [],
    message: "",
  });

  const handleCheckboxChange = (field: keyof FormData, value: string) => {
    const currentValues = formData[field] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    setFormData((prev) => ({ ...prev, [field]: newValues }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateSection = (sectionIndex: number): boolean => {
    switch (sectionIndex) {
      case 0:
        return !!(formData.firstName && formData.age && formData.email);
      case 1:
        return !!(
          formData.smokingYears &&
          formData.cigaretteType.length > 0 &&
          formData.cigarettesPerDay &&
          formData.firstCigarette &&
          formData.smokingMoments.length > 0
        );
      case 2:
        return !!(
          formData.emotions.length > 0 &&
          formData.stressManagement &&
          formData.motivationLevel
        );
      case 3:
        return !!formData.monthlyBudget;
      case 4:
        return !!formData.quitDate;
      default:
        return false;
    }
  };

  const canGoNext = validateSection(currentStep);

  const scrollToForm = () => {
    document.getElementById("bilan-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNext = () => {
    if (canGoNext && currentStep < sections.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
      scrollToForm();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
      scrollToForm();
    }
  };

  const a = (field: keyof FormData) => isFieldAnswered(formData, field);

  const sections = [
    {
      title: "Identité",
      icon: User,
      questions: "Q 1–4",
      content: (
        <div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prénom <span className="text-blue">*</span>
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="Ton prénom"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue/50 focus:border-transparent outline-none"
            />
          </div>
          <ProgressiveQuestion visible={a("firstName")}>
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
          </ProgressiveQuestion>
          <ProgressiveQuestion visible={a("age")}>
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
          </ProgressiveQuestion>
          <ProgressiveQuestion visible={a("email")}>
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
          </ProgressiveQuestion>
        </div>
      ),
    },
    {
      title: "Consommation",
      icon: Cigarette,
      questions: "Q 5–11",
      content: (
        <div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Depuis combien d&apos;années fumes-tu ? <span className="text-blue">*</span>
            </label>
            <ChoiceButtons
              options={["Moins d'1 an", "1 à 5 ans", "5 à 10 ans", "10 à 20 ans", "+ de 20 ans"]}
              value={formData.smokingYears}
              onChange={(v) => handleChange("smokingYears", v)}
            />
          </div>

          <ProgressiveQuestion visible={a("smokingYears")}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type(s) de cigarettes <span className="text-blue">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-3">Plusieurs choix possibles</p>
            <MultiChoiceButtons
              options={["Manufacturée classique", "À rouler", "Légère / ultra-légère", "Mentholée", "Électronique", "Tabac chauffé", "Cigare / cigarillo"]}
              values={formData.cigaretteType}
              onChange={(v) => handleCheckboxChange("cigaretteType", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("cigaretteType")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Nombre de cigarettes par jour <span className="text-blue">*</span>
            </label>
            <ChoiceButtons
              options={["Moins de 5", "5 à 10", "10 à 20", "20 à 30", "30+"]}
              value={formData.cigarettesPerDay}
              onChange={(v) => handleChange("cigarettesPerDay", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("cigarettesPerDay")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Première cigarette après le réveil <span className="text-blue">*</span>
            </label>
            <ChoiceButtons
              options={["— 5 min", "5–30 min", "30 min–1h", "+ 1h"]}
              value={formData.firstCigarette}
              onChange={(v) => handleChange("firstCigarette", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("firstCigarette")}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Moments où tu fumes le plus <span className="text-blue">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-3">Plusieurs choix possibles</p>
            <MultiChoiceButtons
              options={["Au réveil", "Avec le café", "Après les repas", "En pause travail", "En voiture", "En soirée", "Avant de dormir", "Quand je m'ennuie"]}
              values={formData.smokingMoments}
              onChange={(v) => handleCheckboxChange("smokingMoments", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("smokingMoments")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Fumes-tu plus en semaine ou le week-end ?
            </label>
            <ChoiceButtons
              options={["Semaine", "Week-end", "Pareil", "Ça varie"]}
              value={formData.weekdayVsWeekend}
              onChange={(v) => handleChange("weekdayVsWeekend", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("weekdayVsWeekend")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Fumes-tu davantage seul(e) ou en société ?
            </label>
            <ChoiceButtons
              options={["Plutôt seul(e)", "Plutôt en société", "Les deux pareil"]}
              value={formData.aloneVsSocial}
              onChange={(v) => handleChange("aloneVsSocial", v)}
            />
          </ProgressiveQuestion>
        </div>
      ),
    },
    {
      title: "Psychologie & émotions",
      icon: Heart,
      questions: "Q 12–19",
      content: (
        <div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quelle(s) émotion(s) te pousse(nt) à allumer une cigarette ? <span className="text-blue">*</span>
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
                  type="button"
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

          <ProgressiveQuestion visible={a("emotions")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Le tabac t&apos;aide-t-il à gérer ton stress au quotidien ? <span className="text-blue">*</span>
            </label>
            <ChoiceButtons
              options={["Oui, beaucoup", "Un peu", "Pas vraiment", "Non"]}
              value={formData.stressManagement}
              onChange={(v) => handleChange("stressManagement", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("stressManagement")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              As-tu tendance à fumer plus en période de stress intense ?
            </label>
            <ChoiceButtons
              options={["Oui, beaucoup plus", "Un peu plus", "Non, pareil", "Moins"]}
              value={formData.stressSmoking}
              onChange={(v) => handleChange("stressSmoking", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("stressSmoking")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Ressens-tu de la culpabilité après avoir fumé ?
            </label>
            <ChoiceButtons
              options={["Toujours", "Souvent", "Parfois", "Jamais"]}
              value={formData.guilt}
              onChange={(v) => handleChange("guilt", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("guilt")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              As-tu peur de prendre du poids en arrêtant ?
            </label>
            <ChoiceButtons
              options={["Oui, très peur", "Un peu", "Non"]}
              value={formData.weightFear}
              onChange={(v) => handleChange("weightFear", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("weightFear")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              As-tu peur de ne pas réussir à arrêter ?
            </label>
            <ChoiceButtons
              options={["Oui, très peur", "Un peu", "Non, confiant(e)"]}
              value={formData.failureFear}
              onChange={(v) => handleChange("failureFear", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("failureFear")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Qu&apos;est-ce qui t&apos;a fait rechuter lors de tentatives passées ?
            </label>
            <ChoiceButtons
              options={["Stress soudain", "Entourage fumeur", "Alcool / fête", "Manque physique intense", "Prise de poids", "Ennui / vide", "Pas de tentative passée"]}
              value={formData.relapseCause}
              onChange={(v) => handleChange("relapseCause", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("relapseCause")}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sur 10, ton niveau de motivation à arrêter <span className="text-blue">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-4">1 = pas du tout — 10 = totalement déterminé(e)</p>
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  type="button"
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
          </ProgressiveQuestion>
        </div>
      ),
    },
    {
      title: "Budget & finances",
      icon: DollarSign,
      questions: "Q 20–24",
      content: (
        <div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Combien dépenses-tu par mois en cigarettes ? <span className="text-blue">*</span>
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
                  type="button"
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

          <ProgressiveQuestion visible={a("monthlyBudget")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Le prix des cigarettes influence-t-il ta consommation ?
            </label>
            <ChoiceButtons
              options={["Oui, beaucoup", "Un peu", "Non, pas vraiment"]}
              value={formData.priceInfluence}
              onChange={(v) => handleChange("priceInfluence", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("priceInfluence")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              L&apos;aspect financier est-il une motivation pour arrêter ?
            </label>
            <ChoiceButtons
              options={["Oui, c'est ma raison principale", "Oui, parmi d'autres raisons", "Non, pas vraiment"]}
              value={formData.financialMotivation}
              onChange={(v) => handleChange("financialMotivation", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("financialMotivation")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Si tu économisais cet argent, à quoi le destinerais-tu ?
            </label>
            <MultiChoiceButtons
              options={["Voyages", "Épargne", "Sport / bien-être", "Ma famille", "Alimentation", "Pas encore défini"]}
              values={formData.savingsDestination}
              onChange={(v) => handleCheckboxChange("savingsDestination", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("savingsDestination")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              As-tu calculé ce que tu économiserais en arrêtant ?
            </label>
            <ChoiceButtons
              options={["Oui, et c'est motivant", "Oui, mais pas décisif", "Non, jamais calculé"]}
              value={formData.calculatedSavings}
              onChange={(v) => handleChange("calculatedSavings", v)}
            />
          </ProgressiveQuestion>
        </div>
      ),
    },
    {
      title: "Objectifs & accompagnement",
      icon: Target,
      questions: "Q 25–27",
      content: (
        <div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Quand souhaites-tu arrêter de fumer ? <span className="text-blue">*</span>
            </label>
            <ChoiceButtons
              options={["Immédiatement", "Dans la semaine", "Dans le mois", "D'ici 3 mois", "Pas encore décidé"]}
              value={formData.quitDate}
              onChange={(v) => handleChange("quitDate", v)}
            />
          </div>

          <ProgressiveQuestion visible={a("quitDate")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Quel type d&apos;accompagnement préfères-tu ?
            </label>
            <MultiChoiceButtons
              options={["Suivi individuel", "Groupe de soutien", "Coaching en ligne", "Exercices pratiques", "Méditation / relaxation", "Suivi par e-mail"]}
              values={formData.supportType}
              onChange={(v) => handleCheckboxChange("supportType", v)}
            />
          </ProgressiveQuestion>

          <ProgressiveQuestion visible={a("supportType")}>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Un message pour ton coach ?
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Contexte particulier, attentes, questions…"
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue/50 focus:border-transparent outline-none resize-none"
            />
          </ProgressiveQuestion>
        </div>
      ),
    },
  ];

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Ton bilan a été envoyé avec succès ! Un coach te contactera très prochainement.");
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
                    type="button"
                    onClick={() => isAccessible && setCurrentStep(index)}
                    disabled={!isAccessible}
                    className={`flex flex-col items-center gap-2 transition-all ${
                      isAccessible ? "cursor-pointer" : "cursor-not-allowed opacity-40"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${
                        isCurrent
                          ? "bg-blue text-white scale-110 shadow-lg"
                          : isCompleted
                            ? "bg-blue/10 text-blue"
                            : "bg-gray-100 text-gray-400"
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
                        isCurrent ? "text-blue" : isCompleted ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      {section.title}
                    </span>
                  </button>
                  {index < sections.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 ${isCompleted ? "bg-blue" : "bg-gray-200"}`} />
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
                <h3 className="text-xl md:text-2xl font-helvetica text-gray-800 truncate">
                  {sections[currentStep].title}
                </h3>
              </div>
              <span className="text-sm text-gray-400 font-medium shrink-0">
                {sections[currentStep].questions}
              </span>
            </div>
            <div className="px-4 md:px-8 py-6 md:py-8">{sections[currentStep].content}</div>
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
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 md:px-8 py-3 rounded-full transition-all text-base md:text-lg font-medium ${
                currentStep === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 shadow hover:shadow-lg"
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Précédent
            </button>

            {currentStep < sections.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!canGoNext}
                className={`flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 md:px-8 py-3 rounded-full transition-all text-base md:text-lg font-medium ${
                  !canGoNext
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-blue text-white hover:bg-blue/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                }`}
              >
                Suivant
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canGoNext}
                className={`flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 md:px-8 py-3 rounded-full transition-all text-base md:text-lg font-medium ${
                  !canGoNext
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-blue text-white hover:bg-blue/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                }`}
              >
                Envoyer mon bilan
                <Check className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-400 text-center mt-6">
          {!canGoNext && "Remplis les champs obligatoires (*) pour continuer"}
        </p>
      </div>
    </section>
  );
}
