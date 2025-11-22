import React, { useState } from "react";
import { Send, Loader2, Building2, Hash, User, Phone, Printer, MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";

export function ContactForm() {
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
        throw new Error('伺服器回應格式錯誤，請檢查網路連線或稍後再試');
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

      toast.success("感謝您的詢價！我們會盡快與您聯繫。", {
        description: "我們已收到您的訊息，將在第一時間回覆您。",
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
        toast.error("網路連線錯誤", {
          description: "無法連接到伺服器，請檢查您的網路連線後再試。",
        });
      } else {
        toast.error("發送失敗", {
          description: error.message || "請稍後再試，或直接來電聯繫我們。",
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
          <h2 className="mb-4">聯絡我們</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4" />
          <p className="text-gray-600">
            歡迎填寫詢價表單，我們將盡快為您服務
          </p>
        </div>

        {/* 公司資訊 - 三欄布局 */}
        <Card className="border-2 mb-8">
          <CardHeader>
            <CardTitle>公司資訊</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              {/* 第一欄 */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">公司名稱</p>
                    <p>廣承綉花實業社</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Hash className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">統一編號</p>
                    <p>56955631</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">聯絡人</p>
                    <p>黃清軒</p>
                  </div>
                </div>
              </div>

              {/* 第二欄 */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">手機</p>
                    <a href="tel:0939208003" className="text-yellow-700 hover:text-yellow-800">
                      0939-208-003
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">電話</p>
                    <a href="tel:063580355" className="text-yellow-700 hover:text-yellow-800">
                      06-3580355
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Printer className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">傳真</p>
                    <p>06-3580363</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">詢價 Line ID</p>
                    <p>0939208003</p>
                  </div>
                </div>
              </div>

              {/* 第三欄 */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">服務時間</p>
                    <p className="text-sm">07:00 AM ~ 19:00 PM</p>
                    <p className="text-sm text-gray-600">每週六、日公休</p>
                    <p className="text-sm text-gray-600">農曆除夕至初五休息</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">公司地址</p>
                    <p>台南市中西區中和街208號</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>詢價表單</CardTitle>
            <CardDescription>
              請留下您的聯絡資訊與需求，我們會在第一時間回覆您
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名 *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="請輸入您的姓名"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">公司名稱</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="請輸入公司名稱"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">聯絡電話 *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="請輸入聯絡電話"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">電子郵件</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="請輸入電子郵件"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">需求說明 *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="請描述您的需求，例如：產品類型、數量、特殊要求等"
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
                    發送中...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    送出詢價
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
