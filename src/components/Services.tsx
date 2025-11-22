import { Shirt, Scissors, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Shirt,
      title: t('services.textile.title'),
      description: t('services.textile.desc'),
    },
    {
      icon: Scissors,
      title: t('services.embroidery.title'),
      description: t('services.embroidery.desc'),
    },
    {
      icon: Package,
      title: t('services.wholesale.title'),
      description: t('services.wholesale.desc'),
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">{t('services.title')}</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-yellow-500 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden h-64">
            <ImageWithFallback
              src="/images/service-factory.jpg"
              alt={t('services.image1.alt')}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-64">
            <ImageWithFallback
              src="/images/service-threads.jpg"
              alt={t('services.image2.alt')}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}