# フォルダ構成とファイルの保存場所

## 全体のフォルダ構成

```
your-project/                    ← プロジェクトルート
├── CLAUDE.md                    ← @note-pilot/CLAUDE.md を記載
└── note-pilot/                  ← プラグイン本体
    ├── CLAUDE.md
    ├── AGENTS.md
    ├── accounts/                ← アカウント設定ファイル
    │   ├── account-template.md  ← テンプレート（編集不要）
    │   └── {slug}.md            ← アカウント追加時に自動生成
    ├── articles/                ← 生成された記事（デフォルト）
    │   └── {slug}-article-001-note-paste.md
    ├── reviews/                 ← 校閲レポート（デフォルト）
    │   └── YYYY-MM-DD-{slug}-review.md
    ├── commands/                ← スラッシュコマンド定義（セットアップ元）
    │   └── np/
    ├── knowledge/               ← ルール定義（変更不要）
    │   ├── writing-rules.md
    │   └── review-checklist.md
    ├── templates/               ← 記事テンプレート（変更不要）
    │   └── article.md
    ├── skills/                  ← 拡張スキル
    │   └── gemini-image/        ← アイキャッチ画像生成（Gemini API）
    │       ├── .env             ← GEMINI_API_KEY を手動で設定
    │       ├── .env.example
    │       ├── package.json
    │       └── scripts/
    │           └── cli.js
    └── tools/                   ← 自動投稿スクリプト
        ├── post-to-note.js
        ├── parse-article.js
        └── package.json
```

## 各ファイルの役割と保存タイミング

### 自動的に作成・更新されるファイル

| ファイル | 作成タイミング | 説明 |
|---------|-------------|------|
| `accounts/{slug}.md` | アカウント追加時 | アカウント設定。対話形式で自動生成 |
| `tools/node_modules/` | アカウント追加後 | Node.js があれば Claude が自動インストール |
| `articles/{slug}-article-{no}-note-paste.md` | 記事作成時 | note貼り付け用の記事本文 |
| `reviews/YYYY-MM-DD-{slug}-review.md` | 校閲時 | 校閲チェック結果レポート |

### 手動でセットアップが必要なファイル

| ファイル | 操作 |
|---------|------|
| `your-project/CLAUDE.md` | `@note-pilot/CLAUDE.md` を1行追記 |
| `skills/gemini-image/.env` | `GEMINI_API_KEY=` の後にGemini APIキーを記入（画像生成を使う場合のみ） |

## 記事ファイルのパス設定

記事と校閲レポートの保存先は、アカウント設定で変更できます。

```yaml
output_dir: "articles"   # 記事の保存先（note-pilot/articles/）
review_dir: "reviews"    # レポートの保存先（note-pilot/reviews/）
```

パスは `note-pilot/` フォルダからの相対パスです。別の場所に保存したい場合は変更してください。

```yaml
# 例: プロジェクトルートの直下に保存する場合
output_dir: "../my-articles"
review_dir: "../my-reviews"
```

## 注意事項

- `account-template.md` は削除しないでください（アカウント追加で参照されます）
- `articles/` と `reviews/` は初回実行時に自動で作成されます
- `tools/.chrome-profile/` はChrome自動投稿用のプロファイルです。`.gitignore` に追加してください
