## queue-platform

行列並び代行のプラットフォームを想定した、デモ向け Web アプリです。
Next.js + TypeScript + Tailwind CSS で構成し、DB は使わずダミーデータで動作します。

## 画面一覧

- トップページ
- 依頼一覧ページ
- 依頼詳細ページ
- 依頼作成ページ
- マイページ

## セットアップ

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。

## 主な実装方針

- App Router を使用
- ダミーデータは `lib/data.ts` に集約
- 共通 UI は `components/` に分割
- 依頼作成画面は `useState` ベースのクライアントコンポーネント
- レスポンシブ対応済み

## フォルダ構成

```text
.
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── mypage/page.tsx
│   └── requests
│       ├── page.tsx
│       ├── new/page.tsx
│       └── [id]/page.tsx
├── components
│   ├── app-shell.tsx
│   ├── nav-link.tsx
│   ├── request-card.tsx
│   ├── request-form.tsx
│   ├── section-heading.tsx
│   ├── status-badge.tsx
│   └── status-timeline.tsx
└── lib
    ├── data.ts
    ├── types.ts
    └── utils.ts
```

## 各ファイルの役割

- `app/layout.tsx`: ルートレイアウト。全体の HTML 構造と共通シェルを適用します。
- `app/page.tsx`: トップページ。サービス説明、CTA、サンプル依頼を表示します。
- `app/requests/page.tsx`: 依頼一覧ページ。カード形式で依頼を並べます。
- `app/requests/[id]/page.tsx`: 依頼詳細ページ。案件情報、進行ステータス、応募ボタンを表示します。
- `app/requests/new/page.tsx`: 依頼作成ページ。フォーム UI を表示します。
- `app/mypage/page.tsx`: マイページ。案件サマリーと進行中案件を表示します。
- `app/globals.css`: Tailwind ベースの全体スタイルを定義します。
- `components/app-shell.tsx`: ヘッダー、ナビゲーション、フッターを含む共通レイアウトです。
- `components/nav-link.tsx`: 現在位置を反映するナビゲーションリンクです。
- `components/request-card.tsx`: 一覧表示用の依頼カードです。
- `components/request-form.tsx`: `useState` を使った依頼作成フォームです。
- `components/section-heading.tsx`: セクション見出しの共通コンポーネントです。
- `components/status-badge.tsx`: ステータス表示用のバッジです。
- `components/status-timeline.tsx`: 詳細ページの進行ステータス UI です。
- `lib/data.ts`: ダミー依頼データを保持します。
- `lib/types.ts`: 依頼データ型を定義します。
- `lib/utils.ts`: ステータスに応じた表示用クラスを返します。

## 補足

- 永続化や認証は未実装です。
- デモ用途を前提に、信頼感のあるシンプルな UI を重視しています。
