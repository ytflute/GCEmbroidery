import { Shirt, Scissors, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Shirt,
      title: "紡織巾襪制服",
      description: "提供各類紡織品、毛巾、襪子及制服訂製服務，品質優良，交期準確。",
    },
    {
      icon: Scissors,
      title: "專業綉花加工",
      description: "運用專業綉花技術，為您的產品增添獨特價值，精緻細膩的工藝。",
    },
    {
      icon: Package,
      title: "服飾配件批發",
      description: "豐富的服飾配件種類，支援B2B、B2C批發需求，穩定供貨。",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">我們的服務</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            專注於服飾配件批發與紡織品製造，為客戶提供全方位的專業服務
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
              src="https://images.unsplash.com/photo-1673201159941-68fcdbbb4fa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmYWN0b3J5JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NjM3ODU5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="專業工廠"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-64">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1613555793439-c50b6274176a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHRocmVhZHMlMjBzZXdpbmd8ZW58MXx8fHwxNzYzNzg1OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="彩色線材"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}