import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground selection:bg-accent selection:text-accent-foreground">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Process />
      <ContactForm />
    </div>
  );
}
