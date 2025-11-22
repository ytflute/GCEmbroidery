import { Award, Users, TrendingUp, Heart } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Award,
      title: "專業技術",
      description: "豐富的行業經驗與專業技術團隊",
    },
    {
      icon: Users,
      title: "優質口碑",
      description: "深受同業與客戶群的信賴與好評",
    },
    {
      icon: TrendingUp,
      title: "穩定成長",
      description: "持續進步，保持技術與服務領先",
    },
    {
      icon: Heart,
      title: "用心服務",
      description: "客戶至上，提供最優質的服務體驗",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">我們的優勢</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto" />
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
