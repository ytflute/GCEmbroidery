import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1720982892204-b2d4ee451dbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJ5JTIwZmFicmljJTIwdGV4dGlsZXxlbnwxfHx8fDE3NjM3ODU5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
        <h1 className="mb-6">廣承綉花實業社</h1>
        <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
          專業服飾配件批發、紡織巾襪制服供應商
          <br />
          技術專業 · 品質可靠 · 值得信賴
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
        >
          立即諮詢
        </Button>
      </div>
    </div>
  );
}
