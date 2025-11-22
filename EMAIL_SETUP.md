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

如果郵件無法發送，請按照以下步驟檢查：

### 步驟 1: 檢查瀏覽器控制台

1. 打開瀏覽器開發者工具（按 F12 或右鍵 > 檢查）
2. 前往 **Console** 標籤頁
3. 填寫表單並送出
4. 查看是否有錯誤訊息

### 步驟 2: 檢查網路請求

1. 在開發者工具中前往 **Network** 標籤頁
2. 填寫表單並送出
3. 找到 `/api/send-email` 請求
4. 點擊該請求，查看：
   - **Status**: 應該是 200（成功）或顯示錯誤代碼
   - **Response**: 查看伺服器返回的訊息

### 步驟 3: 檢查 Vercel 環境變數

1. 登入 [Vercel Dashboard](https://vercel.com/dashboard)
2. 選擇您的專案
3. 前往 **Settings** > **Environment Variables**
4. 確認以下環境變數都已設定：
   - `RESEND_API_KEY` - 必須設定
   - `TO_EMAIL` - 必須設定（不能是 `your-email@example.com`）
   - `FROM_EMAIL` - 可選（預設為 `onboarding@resend.dev`）

**重要**：如果修改了環境變數，必須重新部署專案才會生效！

### 步驟 4: 檢查 Vercel 函數日誌

1. 在 Vercel Dashboard 中選擇您的專案
2. 前往 **Deployments** 標籤頁
3. 點擊最新的部署
4. 前往 **Functions** 標籤頁
5. 點擊 `api/send-email`
6. 查看 **Logs** 標籤頁中的錯誤訊息

### 步驟 5: 檢查 Resend API Key

1. 登入 [Resend Dashboard](https://resend.com)
2. 前往 **API Keys** 頁面
3. 確認 API Key 狀態為 **Active**
4. 如果 API Key 無效，創建一個新的並更新 Vercel 環境變數

### 常見錯誤訊息

- **"RESEND_API_KEY 環境變數未設定"**
  - 解決方法：在 Vercel 設定環境變數 `RESEND_API_KEY`

- **"TO_EMAIL 環境變數未設定"**
  - 解決方法：在 Vercel 設定環境變數 `TO_EMAIL` 為您的實際 email

- **"發送郵件失敗"**
  - 檢查 Resend API Key 是否有效
  - 檢查 Resend Dashboard 中的 API 使用限制
  - 查看 Vercel 函數日誌中的詳細錯誤訊息

- **"網路連線錯誤"**
  - 檢查您的網路連線
  - 確認網站已正確部署到 Vercel

### 測試環境變數是否正確

如果表單顯示成功訊息但沒有收到郵件，請：
1. 檢查 Vercel 函數日誌（步驟 4）
2. 確認 `TO_EMAIL` 設定正確
3. 檢查垃圾郵件資料夾
4. 確認 Resend 帳號沒有達到發送限制

