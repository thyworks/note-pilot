# アイキャッチ画像を生成する

記事を作成すると、記事と同時に **1280×670px** のアイキャッチ画像が自動生成されます。**Gemini 2.5 Flash Image**（`gemini-3.1-flash-image-preview`）を使用し、アカウントのブランドカラーに合わせた統一感のあるビジュアルを自動で作ります。

`GEMINI_API_KEY` が未設定の場合は画像生成をスキップして記事作成・校閲・投稿を通常通り続行します。

## 事前設定

### 1. Gemini API キーを取得する

API キーの取得手順は [Gemini API キーの取得](./gemini-api-key) をご覧ください。取得したキーを次のステップで設定します。

### 2. `.env` ファイルにキーを書き込む

`note-pilot/skills/gemini-image/.env` をテキストエディタで開き、API キーを記入します。

```
GEMINI_API_KEY=AIzaSy...（ここにキーを貼り付ける）
```

::: warning この設定はファイルを直接編集してください
API キーはセキュリティ上の理由から対話形式では設定できません。
テキストエディタで `.env` ファイルを直接編集してください。
:::

## アカウントごとのブランドカラー設定

アカウント設定ファイル（`accounts/{slug}.md`）の `eyecatch` セクションでブランドカラーを指定できます。

```yaml
eyecatch:
  base_color: "#1c1c1e"       # 背景色
  accent_color: "#f59e0b"     # アクセントカラー
  prompt_suffix: ""           # 追加指示（省略可）
```

設定しない場合はデフォルト（黒背景 + ホワイトアクセント）で生成されます。

### カラー設定例

| アカウントの雰囲気 | base_color | accent_color |
|-----------------|-----------|-------------|
| プレミアム・知的 | `#1c1c1e`（チャコールブラック）| `#f59e0b`（アンバーゴールド） |
| テック・モダン | `#0d1b3e`（濃紺）| `#00c853`（エメラルドグリーン） |
| ナチュラル・温かみ | `#2d1b0e`（深ブラウン）| `#f0a500`（ウォームアンバー） |
| クリーン・ミニマル | `#f5f5f5`（ライトグレー）| `#1a1a2e`（ダークネイビー） |

`prompt_suffix` には追加の描写指示を書けます。

```yaml
prompt_suffix: "soft bokeh lighting, cinematic atmosphere"
```

## 生成された画像の保存先

記事ファイルと同じ `output_dir` の `images/` フォルダに保存されます。

```
{output_dir}/
├── thy-works-article-041-note-paste.md
└── images/
    └── thy-works-article-041-eyecatch.png   ← ここに保存
```

## 投稿時の自動アップロード

保存された画像は、自動投稿の際に note のアイキャッチとして**自動でアップロード**されます。手動でのアップロード操作は不要です。

```
記事作成 → 画像生成（images/ に保存）→ 校閲 → 投稿（アイキャッチも自動アップロード）
```

画像が存在しない場合（API キー未設定などでスキップされた場合）は、アイキャッチなしで投稿処理が続行されます。

## 依存パッケージについて

初回実行時に `note-pilot/skills/gemini-image/` で自動的に `npm install` が実行されます。Node.js 18 以上が必要です。

手動でインストールする場合:

```bash
cd note-pilot/skills/gemini-image
npm install
```

## トラブルシューティング

| 症状 | 対処 |
|------|------|
| 「APIキー未設定」でスキップされる | `skills/gemini-image/.env` に `GEMINI_API_KEY` を記入したか確認 |
| 401 / 403 エラー | API キーが無効。[Google AI Studio](https://aistudio.google.com/app/apikey) で再発行 |
| 429 エラー（クォータ超過）| 利用上限に達した。Google AI Studio の課金状況を確認してください |
| `sharp が見つかりません` | `cd note-pilot/skills/gemini-image && npm install` を実行 |
