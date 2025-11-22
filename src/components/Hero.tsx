import React from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-[#b8aa99]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <ImageWithFallback
          src="/images/hero-bg.jpg"
          alt="刺繡紡織"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="mb-2 text-white" style={{ fontSize: '20pt', letterSpacing: '0.2em' }}>
            {t('hero.title.main')}
          </h1>
          <p className="text-xl text-white tracking-widest">
            {t('hero.title.english')}
          </p>
        </div>
        <div className="space-y-2 mb-8">
          <p className="text-xl text-white">{t('hero.service1')}</p>
          <p className="text-xl text-white">{t('hero.service2')}</p>
        </div>
        <Button
          size="lg"
          variant="outline"
          onClick={scrollToContact}
          className="bg-gray-800 hover:bg-yellow-500 text-white border-2 border-white hover:border-yellow-500"
          style={{ borderColor: 'white', borderWidth: '2px' }}
        >
          {t('hero.cta')}
        </Button>
      </div>
    </div>
  );
}
