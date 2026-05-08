import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Subject from "./components/subject";
import Resolution from "./components/resolution";
import Benefits from "./components/benefits";
import Service from "./components/service";
import Testimonials from "./components/testimonials";
import DetailedForm from "./components/detailedForm";
import CTA from "./components/cta";
import Footer from "./components/footer";
import Chatbot from "./components/chatbot";

export default function Home() {
  return (
    <div className="bg-white-alt">
      <Navbar />
      <div id="accueil" className="snap-start min-h-screen flex flex-col justify-center pt-20 md:pt-24">
        <Hero />
      </div>
      <div id="subject" className="snap-start min-h-screen flex flex-col justify-center">
        <Subject />
      </div>
      <div id="resolution" className="snap-start min-h-screen flex flex-col justify-center">
        <Resolution />
      </div>
      <div id="bilan-form" className="snap-start min-h-screen flex flex-col justify-center">
        <DetailedForm />
      </div>
      <div id="bienfaits" className="snap-start min-h-screen flex flex-col justify-center">
        <Benefits />
      </div>
      <div id="services" className="snap-start min-h-screen flex flex-col justify-center">
        <Service />
      </div>
      <div id="temoignages" className="snap-start min-h-screen flex flex-col justify-center">
        <Testimonials />
      </div>
      <div id="cta" className="snap-start min-h-screen flex flex-col justify-center">
        <CTA />
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}
