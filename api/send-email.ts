import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 只允許 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, company, phone, email, message } = req.body;

    // 驗證必填欄位
    if (!name || !phone || !message) {
      return res.status(400).json({ error: '缺少必填欄位' });
    }

    // 發送 email
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.TO_EMAIL || 'your-email@example.com',
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
      console.error('Resend error:', error);
      return res.status(500).json({ error: '發送郵件失敗', details: error });
    }

    return res.status(200).json({ 
      success: true, 
      message: '郵件已成功發送',
      data 
    });
  } catch (error: any) {
    console.error('API error:', error);
    return res.status(500).json({ 
      error: '伺服器錯誤', 
      details: error.message 
    });
  }
}

