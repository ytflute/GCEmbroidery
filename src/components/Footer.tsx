import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* 公司資訊 */}
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-yellow-500 mr-2" />
              <span className="text-white">廣承綉花實業社</span>
            </div>
            <p className="text-sm mb-4">
              專業服飾配件批發、紡織巾襪制服供應商，技術專業、品質可靠、值得信賴。
            </p>
          </div>

          {/* 服務項目 */}
          <div>
            <h3 className="text-white mb-4">服務項目</h3>
            <ul className="space-y-2 text-sm">
              <li>紡織巾襪制服</li>
              <li>專業綉花加工</li>
              <li>服飾配件批發</li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="text-white mb-4">聯絡資訊</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 text-yellow-500" />
                <span>歡迎來電洽詢</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 text-yellow-500" />
                <span>歡迎透過表單詢價</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-yellow-500" />
                <span>台灣</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 廣承綉花實業社 版權所有</p>
        </div>
      </div>
    </footer>
  );
}