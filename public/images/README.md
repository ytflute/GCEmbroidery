# 圖片資料夾說明

這個資料夾用來存放網站使用的圖片。

## 需要的圖片檔案

請將以下圖片檔案放到這個資料夾中：

### 1. Hero 背景圖
- **檔案名稱：** `hero-bg.jpg`
- **用途：** 首頁背景圖片
- **建議尺寸：** 1920x1080 或更大
- **建議格式：** JPG, PNG, WebP

### 2. Services 區塊圖片

#### 圖片 1：專業工廠
- **檔案名稱：** `service-factory.jpg`
- **用途：** 服務介紹區塊的第一張圖片
- **建議尺寸：** 1080x720 或更大
- **建議格式：** JPG, PNG, WebP

#### 圖片 2：彩色線材
- **檔案名稱：** `service-threads.jpg`
- **用途：** 服務介紹區塊的第二張圖片
- **建議尺寸：** 1080x720 或更大
- **建議格式：** JPG, PNG, WebP

## 如何添加圖片

1. 準備您的圖片檔案
2. 將圖片檔案重新命名為上述檔案名稱
3. 將圖片檔案放到 `public/images/` 資料夾中
4. 重新啟動開發伺服器（如果正在運行的話）

## 圖片路徑說明

在 Vite 專案中，`public` 資料夾中的檔案可以直接用 `/` 開頭的路徑訪問：
- `public/images/hero-bg.jpg` → `/images/hero-bg.jpg`
- `public/images/service-factory.jpg` → `/images/service-factory.jpg`
- `public/images/service-threads.jpg` → `/images/service-threads.jpg`

## 圖片優化建議

- 使用適當的圖片格式（JPG 適合照片，PNG 適合透明背景，WebP 適合現代瀏覽器）
- 壓縮圖片以減少檔案大小，提升載入速度
- 建議使用工具如 [TinyPNG](https://tinypng.com) 或 [Squoosh](https://squoosh.app) 來優化圖片

## 如果圖片載入失敗

如果圖片檔案不存在或載入失敗，網站會自動顯示錯誤占位圖，不會影響網站運作。

