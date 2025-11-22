import React, { useState } from "react";
import { Send, Loader2, Building2, Hash, User, Phone, Printer, MessageCircle, Clock, MapPin } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        // 如果回應不是 JSON，可能是網路錯誤或伺服器錯誤
        throw new Error(t('contact.form.error.network.desc'));
      }

      if (!response.ok) {
        const errorMessage = data?.error || data?.details || `HTTP ${response.status}: ${response.statusText}`;
        console.error('API Error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorMessage,
          data
        });
        throw new Error(errorMessage);
      }

      toast.success(t('contact.form.success'), {
        description: t('contact.form.success.desc'),
      });

      // 重置表單
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      console.error('Error sending email:', error);
      
      // 檢查是否為網路錯誤
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        toast.error(t('contact.form.error.network'), {
          description: t('contact.form.error.network.desc'),
        });
      } else {
        toast.error(t('contact.form.error'), {
          description: error.message || t('contact.form.error.desc'),
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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
        <Card className="border-2 mb-8">
          <CardHeader>
            <CardTitle>{t('contact.company.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              {/* 第一欄 */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.company.name')}</p>
                    <p>廣承綉花實業社</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Hash className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.company.taxId')}</p>
                    <p>56955631</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.company.contact')}</p>
                    <p>黃清軒</p>
                  </div>
                </div>
              </div>

              {/* 第二欄 */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.company.mobile')}</p>
                    <a href="tel:0939208003" className="text-yellow-700 hover:text-yellow-800">
                      0939-208-003
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.company.phone')}</p>
                    <a href="tel:063580355" className="text-yellow-700 hover:text-yellow-800">
                      06-3580355
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Printer className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.company.fax')}</p>
                    <p>06-3580363</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.company.line')}</p>
                    <p>0939208003</p>
                  </div>
                </div>
              </div>

              {/* 第三欄 */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.company.hours')}</p>
                    <p className="text-sm">{t('contact.company.hours.detail')}</p>
                    <p className="text-sm text-gray-600">{t('contact.company.hours.weekend')}</p>
                    <p className="text-sm text-gray-600">{t('contact.company.hours.holiday')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.company.address')}</p>
                    <p>台南市中西區中和街208號</p>
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
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {t('contact.form.submitting')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.form.submit')}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
