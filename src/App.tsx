import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Hero />
        <About />
        <Services />
        <Features />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
