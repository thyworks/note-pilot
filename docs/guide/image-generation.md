# アイキャッチ画像を生成する

記事を作成すると、記事と同時に **1280×670px** のアイキャッチ画像が自動生成されます。Google の Imagen 4 を使用し、アカウントのブランドカラーに合わせた統一感のあるビジュアルを自動で作ります。

`GEMINI_API_KEY` が未設定の場合は画像生成をスキップして記事作成・校閲・投稿を通常通り続行します。

## 事前設定

### 1. Gemini API キーを取得する

[Google AI Studio](https://aistudio.google.com/app/apikey) にアクセスし、API キーを作成してください（無料枠あり）。

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
| 429 エラー（クォータ超過）| 無料枠の上限に達した。Google AI Studio でご確認ください |
| `sharp が見つかりません` | `cd note-pilot/skills/gemini-image && npm install` を実行 |
