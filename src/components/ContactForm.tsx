import React, { useState } from "react";
import { Send, Building2, Hash, User, Smartphone, PhoneCall, Printer, MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";
import { useLanguage } from "../contexts/LanguageContext";

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 驗證必填欄位
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error(t('contact.form.error'), {
        description: t('contact.form.error.desc'),
      });
      return;
    }

    // 構建郵件內容
    const subject = encodeURIComponent(`【廣承綉花實業社】新的詢價表單 - ${formData.name}`);
    
    let body = `姓名：${formData.name}\n`;
    if (formData.company) {
      body += `公司名稱：${formData.company}\n`;
    }
    body += `聯絡電話：${formData.phone}\n`;
    if (formData.email) {
      body += `電子郵件：${formData.email}\n`;
    }
    body += `\n需求說明：\n${formData.message}`;
    
    const bodyEncoded = encodeURIComponent(body);
    
    // 您的 email 地址（請修改為您的實際 email）
    const recipientEmail = 'abc2980327@yahoo.com.tw'; // 請修改這裡為您的 email
    
    // 生成 mailto 連結
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${bodyEncoded}`;
    
    // 打開郵件客戶端
    window.location.href = mailtoLink;
    
    toast.success(t('contact.form.success'), {
      description: '郵件客戶端已開啟，請確認並發送郵件。',
    });

    // 重置表單
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">{t('contact.title')}</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4" />
          <p className="text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* 公司資訊 - 三欄布局 */}
        <Card className="border-2 border-gray-300 mb-8 bg-[#f5f2ed]">
          <CardHeader className="bg-[#f5f2ed]">
            <CardTitle className="text-gray-800">{t('contact.company.title')}</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* 第一欄 */}
              <div className="space-y-4">
                <div className="flex items-start gap-6">
                  <Building2 className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">{t('contact.company.name')}</p>
                    <p className="text-gray-800">廣承綉花實業社</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <Hash className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">{t('contact.company.taxId')}</p>
                    <p className="text-gray-800">56955631</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <User className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">{t('contact.company.contact')}</p>
                    <p className="text-gray-800">黃清軒</p>
                  </div>
                </div>
              </div>

              {/* 第二欄 */}
              <div className="space-y-4">
                <div className="flex items-start gap-6">
                  <Smartphone className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">{t('contact.company.mobile')}</p>
                    <a href="tel:0939208003" className="text-gray-800 hover:text-gray-600">
                      0939-208-003
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <PhoneCall className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">{t('contact.company.phone')}</p>
                    <a href="tel:063580355" className="text-gray-800 hover:text-gray-600">
                      06-3580355
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <Printer className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">{t('contact.company.fax')}</p>
                    <p className="text-gray-800">06-3580363</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <MessageCircle className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">{t('contact.company.line')}</p>
                    <p className="text-gray-800">0939208003</p>
                  </div>
                </div>
              </div>

              {/* 第三欄 */}
              <div className="space-y-4">
                <div className="flex items-start gap-6">
                  <Clock className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">{t('contact.company.hours')}</p>
                    <p className="text-sm text-gray-800">{t('contact.company.hours.detail')}</p>
                    <p className="text-sm text-gray-800">{t('contact.company.hours.weekend')}</p>
                    <p className="text-sm text-gray-800">{t('contact.company.hours.holiday')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <MapPin className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">{t('contact.company.address')}</p>
                    <p className="text-gray-800">台南市中西區中和街208號</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>{t('contact.form.title')}</CardTitle>
            <CardDescription>
              {t('contact.form.subtitle')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact.form.name')} *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">{t('contact.form.company')}</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t('contact.form.company.placeholder')}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact.form.phone')} *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.phone.placeholder')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.form.email')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('contact.form.message')} *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.message.placeholder')}
                  rows={6}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900"
              >
                <Send className="w-5 h-5 mr-2" />
                {t('contact.form.submit')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
