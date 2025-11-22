import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 只允許 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 檢查環境變數
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev';
    const TO_EMAIL = process.env.TO_EMAIL;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY 環境變數未設定');
      return res.status(500).json({ 
        error: '伺服器設定錯誤', 
        details: 'RESEND_API_KEY 環境變數未設定，請在 Vercel 專案設定中添加此環境變數。' 
      });
    }

    if (!TO_EMAIL || TO_EMAIL === 'your-email@example.com') {
      console.error('TO_EMAIL 環境變數未設定或使用預設值');
      return res.status(500).json({ 
        error: '伺服器設定錯誤', 
        details: 'TO_EMAIL 環境變數未設定，請在 Vercel 專案設定中添加您的 email 地址。' 
      });
    }

    const { name, company, phone, email, message } = req.body;

    // 驗證必填欄位
    if (!name || !phone || !message) {
      return res.status(400).json({ error: '缺少必填欄位', details: '請確認姓名、電話和需求說明都已填寫。' });
    }

    // 初始化 Resend
    const resend = new Resend(RESEND_API_KEY);

    console.log('準備發送郵件:', {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `【廣承綉花實業社】新的詢價表單 - ${name}`
    });

    // 發送 email
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `【廣承綉花實業社】新的詢價表單 - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">
            新的詢價表單
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #111827; margin-top: 0;">客戶資訊</h3>
            
            <p style="margin: 10px 0;">
              <strong>姓名：</strong> ${name}
            </p>
            
            ${company ? `
            <p style="margin: 10px 0;">
              <strong>公司名稱：</strong> ${company}
            </p>
            ` : ''}
            
            <p style="margin: 10px 0;">
              <strong>聯絡電話：</strong> ${phone}
            </p>
            
            ${email ? `
            <p style="margin: 10px 0;">
              <strong>電子郵件：</strong> ${email}
            </p>
            ` : ''}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #fbbf24; margin: 20px 0;">
            <h3 style="color: #111827; margin-top: 0;">需求說明</h3>
            <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>此郵件由廣承綉花實業社官網自動發送</p>
            <p>發送時間：${new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API 錯誤:', JSON.stringify(error, null, 2));
      return res.status(500).json({ 
        error: '發送郵件失敗', 
        details: error.message || 'Resend API 返回錯誤',
        resendError: error
      });
    }

    console.log('郵件發送成功:', data);

    return res.status(200).json({ 
      success: true, 
      message: '郵件已成功發送',
      data 
    });
  } catch (error: any) {
    console.error('API 執行錯誤:', error);
    console.error('錯誤堆疊:', error.stack);
    return res.status(500).json({ 
      error: '伺服器錯誤', 
      details: error.message || '未知錯誤',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

