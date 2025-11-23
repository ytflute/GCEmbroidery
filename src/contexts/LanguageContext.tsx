import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻譯文件
const translations = {
  zh: {
    // Hero
    'hero.title.main': '廣承綉花',
    'hero.title.english': 'GUANG CHENG Embroidery',
    'hero.service1': '電腦刺繡加工',
    'hero.service2': '刺繡產品製作',
    'hero.cta': '立即諮詢',
    
    // About
    'about.title': '廣承綉花實業社',
    'about.subtitle': '創立於1989年，台南在地專業電腦刺繡加工工廠',
    'about.p1': '廣承綉花實業社創始於1989年（民國78年），由一位在地台南女人獨自創業，擁有近40年的專業刺繡經驗。',
    'about.p2': '過去曾協助大品牌（運動、內衣、服飾、綉花鞋等）刺繡加工，也樂於與在地品牌開發合作。',
    'about.p3': '廣承綉花提供設計、打版、量產加工等，各種客製化的一條龍服務。',
    'about.p4': '廣承綉花祝福您，也期待您的來訪。',
    
    // Services
    'services.title': '我們的服務',
    'services.subtitle': '提供電腦刺繡打版、加工與刺繡產品製作服務',
    'services.textile.title': '電腦刺繡打版',
    'services.textile.desc': '專業級刺繡打版服務，能夠將您的圖案轉換為刺繡機台可讀取的格式。',
    'services.embroidery.title': '電腦刺繡加工',
    'services.embroidery.desc': '廣承擁有大量電腦刺繡機台，能夠進行量產型的刺繡加工。',
    'services.wholesale.title': '刺繡產品製作',
    'services.wholesale.desc': '廣承也樂於開發刺繡產品，提供專業的刺繡產品製作服務。',
    'services.image1.alt': '專業工廠',
    'services.image2.alt': '彩色線材',
    
    // Features
    'features.title': '我們的優勢',
    'features.subtitle': '專業技術、優質服務、在地製造，是廣承綉花的核心價值',
    'features.tech.title': '專業電腦刺繡技術',
    'features.tech.desc': '擁有40年以上的電腦刺繡經驗',
    'features.reputation.title': '優質口碑',
    'features.reputation.desc': '深受同業與客戶群的信賴與好評',
    'features.growth.title': '臺灣製造',
    'features.growth.desc': '臺南在地工廠，臺灣本土製造',
    'features.service.title': '獨具匠心',
    'features.service.desc': '綉花職人的熱情，是廣承最大的動力',
    
    // Portfolio
    'portfolio.title': '相關實績',
    'portfolio.subtitle': '多年專業經驗，服務眾多企業客戶，以下為部分作品展示',
    'portfolio.project1.title': '企業制服LOGO刺繡',
    'portfolio.project1.description': '為企業客戶製作制服胸標刺繡，精準呈現品牌識別，耐洗耐用，深獲客戶好評。',
    'portfolio.project2.title': '客製化刺繡布章',
    'portfolio.project2.description': '各式圖案布章刺繡製作，可應用於外套、背包等產品，色彩鮮豔、立體飽滿。',
    'portfolio.project3.title': 'POLO衫電腦刺繡',
    'portfolio.project3.description': '高品質POLO衫刺繡加工，適合企業團體訂製，線條細緻、質感優異。',
    'portfolio.project4.title': '帽子刺繡加工',
    'portfolio.project4.description': '棒球帽、鴨舌帽等各式帽款刺繡，精準定位、針腳工整，適合品牌推廣使用。',
    'portfolio.project5.title': '毛巾織品刺繡',
    'portfolio.project5.description': '浴巾、毛巾等織品刺繡加工，可客製化圖案文字，適合飯店、SPA等業者使用。',
    'portfolio.project6.title': '繡花鞋刺繡加工',
    'portfolio.project6.description': '複雜圖案多色刺繡製作，色彩層次豐富、圖案細節完整，展現專業刺繡工藝。',
    
    // Contact
    'contact.title': '聯絡我們',
    'contact.subtitle': '歡迎填寫詢價表單，我們將盡快為您服務',
    'contact.company.title': '公司資訊',
    'contact.company.name': '公司名稱',
    'contact.company.taxId': '統一編號',
    'contact.company.contact': '聯絡人',
    'contact.company.mobile': '手機',
    'contact.company.phone': '電話',
    'contact.company.fax': '傳真',
    'contact.company.line': '詢價 Line ID',
    'contact.company.hours': '服務時間',
    'contact.company.hours.detail': '07:00 AM ~ 19:00 PM',
    'contact.company.hours.weekend': '每週六、日公休',
    'contact.company.hours.holiday': '農曆除夕至初五休息',
    'contact.company.address': '公司地址',
    'contact.form.title': '詢價表單',
    'contact.form.subtitle': '請留下您的聯絡資訊與需求，我們會在第一時間回覆您',
    'contact.form.name': '姓名',
    'contact.form.name.placeholder': '請輸入您的姓名',
    'contact.form.company': '公司名稱',
    'contact.form.company.placeholder': '請輸入公司名稱',
    'contact.form.phone': '聯絡電話',
    'contact.form.phone.placeholder': '請輸入聯絡電話',
    'contact.form.email': '電子郵件',
    'contact.form.email.placeholder': '請輸入電子郵件',
    'contact.form.message': '需求說明',
    'contact.form.message.placeholder': '請描述您的需求，例如：產品類型、數量、特殊要求等',
    'contact.form.submit': '送出詢價',
    'contact.form.submitting': '發送中...',
    'contact.form.success': '感謝您的詢價！我們會盡快與您聯繫。',
    'contact.form.success.desc': '我們已收到您的訊息，將在第一時間回覆您。',
    'contact.form.error': '發送失敗',
    'contact.form.error.network': '網路連線錯誤',
    'contact.form.error.network.desc': '無法連接到伺服器，請檢查您的網路連線後再試。',
    'contact.form.error.desc': '請稍後再試，或直接來電聯繫我們。',
    
    // Footer
    'footer.description': '台南在地的電腦刺繡加工廠，提供近40年的專業刺繡產品製作服務。',
    'footer.services': '服務項目',
    'footer.contact': '聯絡資訊',
    'footer.phone': '歡迎來電洽詢',
    'footer.email': '歡迎透過表單詢價',
    'footer.location': '台灣',
    'footer.copyright': '版權所有',
  },
  en: {
    // Hero
    'hero.title.main': 'Guang Cheng Embroidery',
    'hero.title.english': 'GUANG CHENG Embroidery',
    'hero.service1': 'Computer Embroidery Processing',
    'hero.service2': 'Embroidery Product Manufacturing',
    'hero.subtitle': 'Professional Apparel Accessories Wholesale · Textiles & Uniforms',
    'hero.cta': 'Contact Us',
    
    // About
    'about.title': 'Welcome to Guang Cheng Embroidery Industrial Co.',
    'about.subtitle': 'Established in 1989, a professional computer embroidery processing factory in Tainan',
    'about.p1': 'We are a company specializing in apparel accessories wholesale, textiles, towels, socks, and uniforms, with a professional and reliable team. In terms of technology and service, Guang Cheng Embroidery has maintained steady growth, earning a good reputation among peers and customers.',
    'about.p2': 'If you found us online, based on our experience, you may be interested in services related to apparel accessories wholesale, textiles, towels, socks, and uniforms. We value online visitors and sincerely welcome you to browse our service introductions based on your search keywords. If you have any inquiries or questions, you can leave a message in the inquiry form, and we will reply as soon as possible, hoping to prove that Guang Cheng Embroidery is your trustworthy choice.',
    'about.p3': 'Since its establishment, Guang Cheng Embroidery Industrial Co. has accumulated rich experience in apparel accessories wholesale, textiles, towels, socks, and uniforms, including B2B and B2C. Technology and quality are the core of our business, and customer trust and excellent service are the important foundations of our lasting success. We look forward to your messages and feedback, telling us your needs.',
    'about.p4': 'Guang Cheng Embroidery wishes you well and thanks you for your visit.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Focusing on apparel accessories wholesale and textile manufacturing, providing comprehensive professional services to customers',
    'services.textile.title': 'Textiles, Towels, Socks & Uniforms',
    'services.textile.desc': 'Providing various textiles, towels, socks, and uniform customization services with excellent quality and accurate delivery.',
    'services.embroidery.title': 'Professional Embroidery Processing',
    'services.embroidery.desc': 'Using professional embroidery technology to add unique value to your products with exquisite craftsmanship.',
    'services.wholesale.title': 'Apparel Accessories Wholesale',
    'services.wholesale.desc': 'Rich variety of apparel accessories, supporting B2B and B2C wholesale needs with stable supply.',
    'services.image1.alt': 'Professional Factory',
    'services.image2.alt': 'Colorful Threads',
    
    // Features
    'features.title': 'Our Advantages',
    'features.subtitle': 'Professional technology, quality service, and local manufacturing are the core values of Guang Cheng Embroidery',
    'features.tech.title': 'Professional Technology',
    'features.tech.desc': 'Rich industry experience and professional technical team',
    'features.reputation.title': 'Excellent Reputation',
    'features.reputation.desc': 'Trusted and praised by peers and customers',
    'features.growth.title': 'Steady Growth',
    'features.growth.desc': 'Continuous improvement, maintaining leadership in technology and service',
    'features.service.title': 'Dedicated Service',
    'features.service.desc': 'Customer first, providing the best service experience',
    
    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Years of professional experience, serving numerous corporate clients, below are some of our work showcases',
    'portfolio.project1.title': 'Corporate Uniform Logo Embroidery',
    'portfolio.project1.description': 'Creating uniform chest badge embroidery for well-known corporate clients, accurately presenting brand identity, wash-resistant and durable, highly praised by customers.',
    'portfolio.project2.title': 'Custom Embroidery Patches',
    'portfolio.project2.description': 'Various pattern patch embroidery production, applicable to jackets, backpacks and other products, with vibrant colors and full three-dimensional effect.',
    'portfolio.project3.title': 'Polo Shirt Computer Embroidery',
    'portfolio.project3.description': 'High-quality polo shirt embroidery processing, suitable for corporate group customization, with fine lines and excellent texture.',
    'portfolio.project4.title': 'Cap Embroidery Processing',
    'portfolio.project4.description': 'Baseball caps, visors and other cap embroidery, precise positioning, neat stitches, suitable for brand promotion.',
    'portfolio.project5.title': 'Towel Textile Embroidery',
    'portfolio.project5.description': 'Bath towels, towels and other textile embroidery processing, customizable patterns and text, suitable for hotels, spas and other businesses.',
    'portfolio.project6.title': 'Multi-color Gradient Embroidery Design',
    'portfolio.project6.description': 'Complex pattern multi-color embroidery production, rich color layers, complete pattern details, showcasing professional embroidery craftsmanship.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Please fill out the inquiry form, and we will serve you as soon as possible',
    'contact.company.title': 'Company Information',
    'contact.company.name': 'Company Name',
    'contact.company.taxId': 'Tax ID',
    'contact.company.contact': 'Contact Person',
    'contact.company.mobile': 'Mobile',
    'contact.company.phone': 'Phone',
    'contact.company.fax': 'Fax',
    'contact.company.line': 'Line ID for Inquiry',
    'contact.company.hours': 'Business Hours',
    'contact.company.hours.detail': '07:00 AM ~ 19:00 PM',
    'contact.company.hours.weekend': 'Closed on Saturdays and Sundays',
    'contact.company.hours.holiday': 'Closed from Chinese New Year\'s Eve to the 5th day',
    'contact.company.address': 'Company Address',
    'contact.form.title': 'Inquiry Form',
    'contact.form.subtitle': 'Please leave your contact information and requirements, and we will reply to you as soon as possible',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Please enter your name',
    'contact.form.company': 'Company Name',
    'contact.form.company.placeholder': 'Please enter company name',
    'contact.form.phone': 'Phone Number',
    'contact.form.phone.placeholder': 'Please enter phone number',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'Please enter email',
    'contact.form.message': 'Requirements',
    'contact.form.message.placeholder': 'Please describe your requirements, such as product type, quantity, special requirements, etc.',
    'contact.form.submit': 'Submit Inquiry',
    'contact.form.submitting': 'Sending...',
    'contact.form.success': 'Thank you for your inquiry! We will contact you as soon as possible.',
    'contact.form.success.desc': 'We have received your message and will reply to you as soon as possible.',
    'contact.form.error': 'Send Failed',
    'contact.form.error.network': 'Network Connection Error',
    'contact.form.error.network.desc': 'Unable to connect to the server, please check your network connection and try again.',
    'contact.form.error.desc': 'Please try again later or contact us directly by phone.',
    
    // Footer
    'footer.description': 'Professional apparel accessories wholesale, textile & uniform supplier, with professional technology, reliable quality, and trustworthy service.',
    'footer.services': 'Services',
    'footer.contact': 'Contact Information',
    'footer.phone': 'Welcome to call for inquiries',
    'footer.email': 'Welcome to inquire through the form',
    'footer.location': 'Taiwan',
    'footer.copyright': 'All Rights Reserved',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // 從 localStorage 讀取語言設定，預設為中文
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      return saved === 'en' ? 'en' : 'zh';
    }
    return 'zh';
  });

  useEffect(() => {
    // 儲存語言設定到 localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

