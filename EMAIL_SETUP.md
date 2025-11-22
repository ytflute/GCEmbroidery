# Email 設定說明

## 環境變數設定

為了讓詢價表單能夠發送 email，您需要在 Vercel 專案設定中添加以下環境變數：

### 1. 取得 Resend API Key

1. 前往 [Resend](https://resend.com) 註冊帳號
2. 登入後，前往 API Keys 頁面
3. 創建一個新的 API Key
4. 複製 API Key（格式類似：`re_xxxxxxxxxxxxxxxxxxxxx`）

### 2. 在 Vercel 設定環境變數

1. 登入 [Vercel Dashboard](https://vercel.com/dashboard)
2. 選擇您的專案
3. 前往 **Settings** > **Environment Variables**
4. 添加以下環境變數：

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=your-email@example.com
```

**說明：**
- `RESEND_API_KEY`: 您的 Resend API Key
- `FROM_EMAIL`: 發送郵件的來源地址（測試時可使用 `onboarding@resend.dev`，正式環境建議使用您自己的域名）
- `TO_EMAIL`: 接收詢價郵件的地址（請改為您的實際 email）

### 3. 驗證域名（可選，正式環境建議）

如果您想使用自己的域名發送郵件：

1. 在 Resend Dashboard 中前往 **Domains**
2. 添加您的域名
3. 按照指示設定 DNS 記錄
4. 驗證完成後，將 `FROM_EMAIL` 改為 `noreply@yourdomain.com` 之類的地址

### 4. 重新部署

設定完環境變數後，請重新部署專案以使設定生效。

## 測試

設定完成後，您可以：
1. 前往網站上的詢價表單
2. 填寫表單並送出
3. 檢查您設定的 `TO_EMAIL` 是否收到郵件

## 故障排除

如果郵件無法發送，請檢查：
- Vercel 環境變數是否正確設定
- Resend API Key 是否有效
- Vercel 部署日誌中是否有錯誤訊息

