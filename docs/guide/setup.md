# セットアップ

## 1. プラグインフォルダを配置する

プロジェクトのルートに `note-pilot/` フォルダを置きます。

```
your-project/
├── CLAUDE.md       ← あなたのCLAUDE.md（次の手順で作成）
└── note-pilot/     ← ここに配置
    ├── CLAUDE.md
    ├── AGENTS.md
    └── ...
```

## 2. CLAUDE.mdを作成・編集する

CLAUDE.md は Claude Code がプロジェクトを開いたときに自動で読み込む設定ファイルです。

### CLAUDE.md がまだない場合

プロジェクトのルートに `CLAUDE.md` を新規作成し、以下の1行を書きます。

```markdown
@note-pilot/CLAUDE.md
```

### CLAUDE.md がすでにある場合

既存の内容はそのままに、ファイルの先頭か末尾に1行追加します。

```markdown
@note-pilot/CLAUDE.md
```

### CLAUDE.md の配置場所について

| 場所 | 適用範囲 |
|------|---------|
| `~/.claude/CLAUDE.md` | 全プロジェクト共通 |
| `your-project/CLAUDE.md` | そのフォルダのみ（推奨） |

## 3. アカウントを作成する

Claude Code で以下のように話しかけます。

```
アカウントを追加して
```

対話形式で以下の項目を質問されます。**手動でファイルを編集する必要はありません。**

| 質問 | 例 |
|------|-----|
| アカウントの表示名 | Thy works、田中 太郎、AIラボ |
| 管理用ID（スラッグ） | thy-works、tanaka-taro、ai-lab |
| note アカウントの有無 | はい / いいえ |
| note プロフィール URL | https://note.com/@yourhandle |
| 自己紹介記事 URL | https://note.com/@yourhandle/n/xxxxxxxx |
| 文体・トーン | 落ち着いた知的な文体で、比喩を交えながら解説する |
| 扱うテーマ | AI活用, 生産性向上, キャリア |
| 書かないテーマ | 政治, 宗教, 特定企業の批判 |
| ターゲット読者 | AIに興味があるが専門知識のない30代ビジネスパーソン |
| ハッシュタグ候補 | AI活用, ChatGPT, 生成AI, ビジネス効率化 |
| 最初に書きたいテーマ | ChatGPTで議事録を自動化する方法 |

全て回答すると `note-pilot/accounts/{slug}.md` が自動生成されます。

## 4. 自動投稿ツールのセットアップ

::: warning Node.js はアカウント作成前にインストールしてください
自動投稿を使う場合、**ステップ3のアカウント作成前**に Node.js を入れておくと、アカウント作成と同時にツールのセットアップも完了します。
:::

自動投稿を使う場合は **Node.js 18以上** が必要です。未インストールの場合は [nodejs.org](https://nodejs.org)（LTS版推奨）からインストールしてください。

Node.js がインストールされていれば、アカウント作成後に Claude が自動でツールをセットアップします。Node.js がなくても記事作成・校閲は使えます。

## 5. アイキャッチ画像生成の設定（オプション）

記事を作成するたびにアイキャッチ画像（1280×670px）を自動生成できます。使用するには **Gemini API キー** が必要です。

### API キーを取得する

[Google AI Studio](https://aistudio.google.com/app/apikey) にアクセスし、API キーを作成してください。**有料プランが必要です。**

### `.env` ファイルにキーを書き込む

`note-pilot/skills/gemini-image/.env` をテキストエディタで開き、以下のように API キーを記入します。

```
GEMINI_API_KEY=AIzaSy...（ここにキーを貼り付ける）
```

::: warning この設定はファイルを直接編集してください
API キーはセキュリティ上の理由から対話形式では設定できません。
テキストエディタで `.env` ファイルを直接編集してください。
:::

設定しない場合、画像生成をスキップして記事作成・校閲・投稿を通常通り続行します。

