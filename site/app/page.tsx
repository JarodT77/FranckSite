import Navbar  from "./components/navbar";
import Hero from "./components/hero";
import Subject from "./components/subject";
import Benefits from "./components/benefits";
import Service from "./components/service";
import Testimonials from "./components/testimonials";
import DetailedForm from "./components/detailedForm";
import CTA from "./components/cta";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div className="bg-white-alt min-h-screen">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Subject />
        <Benefits />
        <Service />
        <Testimonials />
        <DetailedForm />
        <CTA />
      </main>
      <Footer />
    </div>
    
  );
}
