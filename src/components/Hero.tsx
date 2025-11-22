import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/hero-bg.jpg"
          alt="刺繡紡織"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-12 h-12 text-yellow-400" />
        </div>
        <h1 className="mb-6">{t('hero.title')}</h1>
        <p className="text-6xl mb-2 text-gray-200 max-w-2xl mx-auto">
          {t('hero.subtitle')}
          <br />
          {t('hero.tagline')}
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
        >
          {t('hero.cta')}
        </Button>
      </div>
    </div>
  );
}
