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
    'hero.title': '廣承綉花實業社',
    'hero.subtitle': '專業服飾配件批發、紡織巾襪制服供應商',
    'hero.tagline': '技術專業 · 品質可靠 · 值得信賴',
    'hero.cta': '立即諮詢',
    
    // About
    'about.title': '歡迎光臨廣承綉花實業社',
    'about.p1': '我們是以服飾配件批發、紡織巾襪制服為主要服務的公司，擁有專業可靠的工作團隊。在技術與服務上，廣承綉花始終保持穩定成長，同業與客戶群都有不錯的口碑。',
    'about.p2': '如果您從網路找到我們，根據我們的經驗，您可能對服飾配件批發、紡織巾襪制服等相關服務有興趣。我們很看重網路來訪的需求者，也誠摯歡迎您依照自己的搜尋關鍵字來瀏覽我們的服務介紹，若有任何洽詢或問題，可直接在詢價表單留言，我們會盡可能在第一時間回覆，也希望能有機會向您證明廣承綉花是您值得信賴的選擇。',
    'about.p3': '廣承綉花實業社自創業以來，在服飾配件批發、紡織巾襪制服方面已累積了相當豐富的經驗，包含B2B、B2C，技術與品質是我們的事業核心，客戶的信賴與優質的服務更是我們歷久不衰的重要根源。我們期待您的留言與指教，告訴我們您的需求。',
    'about.p4': '廣承綉花祝福您，也感謝您的來訪。',
    
    // Services
    'services.title': '我們的服務',
    'services.subtitle': '專注於服飾配件批發與紡織品製造，為客戶提供全方位的專業服務',
    'services.textile.title': '紡織巾襪制服',
    'services.textile.desc': '提供各類紡織品、毛巾、襪子及制服訂製服務，品質優良，交期準確。',
    'services.embroidery.title': '專業綉花加工',
    'services.embroidery.desc': '運用專業綉花技術，為您的產品增添獨特價值，精緻細膩的工藝。',
    'services.wholesale.title': '服飾配件批發',
    'services.wholesale.desc': '豐富的服飾配件種類，支援B2B、B2C批發需求，穩定供貨。',
    'services.image1.alt': '專業工廠',
    'services.image2.alt': '彩色線材',
    
    // Features
    'features.title': '我們的優勢',
    'features.tech.title': '專業技術',
    'features.tech.desc': '豐富的行業經驗與專業技術團隊',
    'features.reputation.title': '優質口碑',
    'features.reputation.desc': '深受同業與客戶群的信賴與好評',
    'features.growth.title': '穩定成長',
    'features.growth.desc': '持續進步，保持技術與服務領先',
    'features.service.title': '用心服務',
    'features.service.desc': '客戶至上，提供最優質的服務體驗',
    
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
    'footer.description': '專業服飾配件批發、紡織巾襪制服供應商，技術專業、品質可靠、值得信賴。',
    'footer.services': '服務項目',
    'footer.contact': '聯絡資訊',
    'footer.phone': '歡迎來電洽詢',
    'footer.email': '歡迎透過表單詢價',
    'footer.location': '台灣',
    'footer.copyright': '版權所有',
  },
  en: {
    // Hero
    'hero.title': 'Guang Cheng Embroidery Industrial Co.',
    'hero.subtitle': 'Professional Apparel Accessories Wholesale, Textile & Uniform Supplier',
    'hero.tagline': 'Professional Technology · Reliable Quality · Trustworthy',
    'hero.cta': 'Contact Us',
    
    // About
    'about.title': 'Welcome to Guang Cheng Embroidery Industrial Co.',
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
    'features.tech.title': 'Professional Technology',
    'features.tech.desc': 'Rich industry experience and professional technical team',
    'features.reputation.title': 'Excellent Reputation',
    'features.reputation.desc': 'Trusted and praised by peers and customers',
    'features.growth.title': 'Steady Growth',
    'features.growth.desc': 'Continuous improvement, maintaining leadership in technology and service',
    'features.service.title': 'Dedicated Service',
    'features.service.desc': 'Customer first, providing the best service experience',
    
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

