# note-pilotとは

note-pilotは、**note.comへの記事公開を効率化するClaude Codeプラグイン**です。

ナレッジ蓄積 → 記事作成 → 校閲 → 自動投稿の全工程を、Claude Codeとの会話だけで完結させます。

## できること

| 機能 | コマンド | 説明 |
|------|---------|------|
| 記事作成 | `/np:write` | ルール準拠の記事を自動生成 |
| 校閲チェック | `/np:review` | 30項目チェック＋自動修正 |
| 自動投稿 | `/np:post` | Chromeで実際に下書き保存 |
| ナレッジ追加 | `/np:learn` | 公開済みURLや学びを蓄積 |
| 連載計画 | `/np:plan` | 次のテーマ案を提案 |

## 動作環境

- **Claude Code** が使える環境
- **Node.js** 18以上
- **Google Chrome** がインストールされていること（自動投稿機能）

## ファイル構成

プラグインを購入すると以下の構成のフォルダが届きます。

```
note-pilot/
├── CLAUDE.md          ← プラグインエントリポイント
├── AGENTS.md          ← スキル定義
├── knowledge/
│   ├── writing-rules.md       ← 記事作成ルール
│   └── review-checklist.md   ← 校閲チェックリスト
├── templates/
│   └── article.md             ← 記事テンプレート
├── accounts/
│   └── account-template.md   ← アカウント設定テンプレート
└── tools/
    ├── post-to-note.js        ← 自動投稿スクリプト
    ├── parse-article.js       ← 記事パーサー
    └── package.json
```

次のページ「[セットアップ](./setup)」に進んで、実際に使い始めましょう。
