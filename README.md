# 🎮 Certifun - 認定証作成ツール

オンラインで様々なデザインの認定証を作成し、PDFダウンロードできるWebアプリケーションです。

## ✨ 主な機能

- **🎨 多彩なテンプレート**: レトロからモダンまで様々なデザイン
- **📄 PDFダウンロード**: A4サイズで余白なしの高品質PDF出力
- **🌙 ダークテーマ**: 目に優しいダークモードUI
- **📱 レスポンシブ**: モバイルデバイスにも対応
- **⚡ 高速**: Vite による高速開発・ビルド

## 🚀 技術スタック

- **Frontend**: React 19.1.1 + TypeScript
- **Build Tool**: Vite 7.1.2
- **Routing**: React Router DOM 7.8.2
- **PDF生成**: jsPDF + html2canvas
- **スタイリング**: CSS Modules + CSS Grid/Flexbox
- **デプロイ**: Vercel

## 📦 セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# リンター実行
npm run lint
```

## 🌐 デプロイ

### Vercel デプロイ

このプロジェクトはVercelでの簡単デプロイに対応しています：

```bash
# Vercel CLIのインストール（初回のみ）
npm i -g vercel

# デプロイ
vercel

# 本番デプロイ
vercel --prod
```

または、[Vercel Dashboard](https://vercel.com) でGitHubリポジトリをインポート：

1. GitHub リポジトリを作成・プッシュ
2. Vercel にログイン
3. "New Project" → GitHubリポジトリを選択
4. 自動デプロイが開始されます

### 設定済み項目

- ✅ `vercel.json` - SPA ルーティング設定済み
- ✅ `vite.config.ts` - ビルド最適化済み
- ✅ セキュリティヘッダー設定済み
- ✅ チャンク分割によるパフォーマンス最適化

## 📁 プロジェクト構造

```
src/
├── components/
│   ├── CertificateForm.tsx      # 認定証フォーム
│   ├── CertificatePreview.tsx   # プレビュー・PDF生成
│   ├── Home.tsx                 # ホームページ
│   └── NotFound.tsx             # 404ページ
├── App.tsx                      # ルーティング設定
├── index.css                    # グローバルスタイル
└── main.tsx                     # アプリケーションエントリーポイント
```

## 🎯 使用方法

1. **認定証情報の入力**
   - 受賞者名
   - 認定内容
   - テンプレート選択
   - 発行日

2. **プレビュー確認**
   - リアルタイムプレビュー
   - デザインの確認

3. **PDFダウンロード**
   - A4サイズ
   - 余白なし
   - 高解像度

## 🎨 デザインテンプレート

- **Template 1**: クラシック（ゴールド & ブルー）
- **Template 2**: モダン（ブルー & ホワイト）
- **Template 3**: エレガント（パープル & シルバー）

## 📱 ブラウザサポート

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 カスタマイズ

新しいテンプレートを追加するには：

1. `CertificateForm.tsx` でテンプレートオプションを追加
2. `CertificatePreview.tsx` でスタイルを定義
3. CSS でテンプレート固有のスタイルを追加

## ⚡ パフォーマンス

- **コードスプリッティング**: React、Router、PDF ライブラリを分割
- **チャンク最適化**: 自動バンドル分割によるロード時間短縮
- **静的アセット**: CSS/画像の最適化
- **CDN配信**: Vercel Edge Network による高速配信

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

1. フォークしてください
2. フィーチャーブランチを作成してください (`git checkout -b feature/新機能`)
3. 変更をコミットしてください (`git commit -am '新機能を追加'`)
4. ブランチにプッシュしてください (`git push origin feature/新機能`)
5. プルリクエストを作成してください

---

**🚀 Live Demo**: Deploy to Vercel and share your certificate creation tool with the world!