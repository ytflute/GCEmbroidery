import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export function Portfolio() {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      image: "/images/portfolio-1.jpg",
      title: t('portfolio.project1.title'),
      description: t('portfolio.project1.description')
    },
    {
      id: 2,
      image: "/images/portfolio-2.jpg",
      title: t('portfolio.project2.title'),
      description: t('portfolio.project2.description')
    },
    {
      id: 3,
      image: "/images/portfolio-3.jpg",
      title: t('portfolio.project3.title'),
      description: t('portfolio.project3.description')
    },
    {
      id: 4,
      image: "/images/portfolio-4.jpg",
      title: t('portfolio.project4.title'),
      description: t('portfolio.project4.description')
    },
    {
      id: 5,
      image: "/images/portfolio-5.jpg",
      title: t('portfolio.project5.title'),
      description: t('portfolio.project5.description')
    },
    {
      id: 6,
      image: "/images/portfolio-6.jpg",
      title: t('portfolio.project6.title'),
      description: t('portfolio.project6.description')
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#e8e2d5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gray-800">{t('portfolio.title')}</h2>
          <div className="w-20 h-1 bg-gray-700 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-2 border-gray-300 hover:border-gray-600 transition-all hover:shadow-lg bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

