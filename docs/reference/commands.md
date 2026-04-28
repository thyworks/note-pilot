# コマンド一覧

## `/np:account` — アカウント管理

**トリガー**: 「アカウントを追加して」「アカウント一覧を見せて」「アカウントを切り替えて」

| サブコマンド | 動作 |
|------------|------|
| `list` | アカウント一覧を表示（status・記事数付き） |
| `add` | 新規アカウントを対話形式で追加 |
| `status` | アカウントのステータスを変更（preparing/active/paused） |
| `switch` | 作業対象アカウントを切り替え |

**アカウントのステータス**:

| status | 意味 | write | review | post |
|--------|------|-------|--------|------|
| `preparing` | noteアカウント未作成 | ✅（embed省略） | ✅（embed項目スキップ） | ❌ |
| `active` | 通常運用中 | ✅ | ✅ | ✅ |
| `paused` | 一時停止中 | ✅（確認後） | ✅ | ✅（確認後） |

---

## `/np:write` — 記事作成

**トリガー**: 「記事を書いて」「今日の記事を書いて」「〇〇について記事を書いて」

**オプション引数**: テーマ（省略時はアカウントの `next_topics` 先頭を使用）

**出力ファイル**: `{output_dir}/{slug}-article-{連番3桁}-note-paste.md`

---

## `/np:review` — 校閲チェック

**トリガー**: 「校閲して」「チェックして」「レビューして」

**オプション引数**: ファイルパス（省略時は最新の下書きを自動選択）

**出力ファイル**: `{review_dir}/YYYY-MM-DD-{スラッグ}-review.md`

---

## `/np:post` — 自動投稿

**トリガー**: 「投稿して」「noteに投稿して」「スクリプトを実行して」

**前提条件**: 対象記事が `/np:review` でOKになっていること

**実行コマンド**:
```bash
node note-pilot/tools/post-to-note.js "{mdファイルのパス}"
```

---

## `/np:learn` — ナレッジ追加

**トリガー**: 「ナレッジを追加して」「〇〇を覚えて」「記事URLを登録して」

**できること**:
- 公開済み記事URLをアカウント設定の公開済みリストに追加
- 「次回書かないこと」「効果があったタグ」などをメモセクションに記録
- `article_series.current_no` の更新

---

## `/np:plan` — 連載計画

**トリガー**: 「連載を計画して」「次のテーマを考えて」「ネタを出して」

**できること**:
- 過去記事と重複しない新テーマを3〜5案提案
- 選んだトピックを `next_topics` の先頭に追加

---

## アカウント設定ファイルの項目一覧

| 項目 | 型 | 説明 |
|------|-----|------|
| `account_name` | string | アカウント表示名 |
| `account_slug` | string | ファイル名に使うスラッグ |
| `note_url` | string | noteプロフィールURL |
| `self_intro_url` | string | 自己紹介記事URL（リード直後に埋め込む） |
| `article_series.current_no` | number | 最後に作成した記事番号 |
| `output_dir` | string | 記事ファイルの保存先（相対パス） |
| `review_dir` | string | 校閲レポートの保存先（相対パス） |
| `tone` | string | 文体・スタイルの説明 |
| `themes` | string[] | 扱うテーマ一覧 |
| `dont_do` | string[] | 禁止テーマ一覧 |
| `target_reader` | string | ターゲット読者の説明 |
| `tag_candidates` | string[] | タグ候補リスト |
| `next_topics` | string[] | 次回予告候補リスト |
| 公開済み記事リスト | table | no・タイトル・URL・公開日 |
