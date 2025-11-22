import React from "react";
import { Award, Users, TrendingUp, Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Features() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Award,
      title: t('features.tech.title'),
      description: t('features.tech.desc'),
    },
    {
      icon: Users,
      title: t('features.reputation.title'),
      description: t('features.reputation.desc'),
    },
    {
      icon: TrendingUp,
      title: t('features.growth.title'),
      description: t('features.growth.desc'),
    },
    {
      icon: Heart,
      title: t('features.service.title'),
      description: t('features.service.desc'),
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">{t('features.title')}</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
