# セットアップ

## 1. プラグインフォルダを配置する

プロジェクトのルートに `note-pilot/` フォルダを置きます。

```
your-project/
├── CLAUDE.md       ← あなたのCLAUDE.md
└── note-pilot/     ← ここに配置
    ├── CLAUDE.md
    ├── AGENTS.md
    └── ...
```

## 2. CLAUDE.mdにインポートを追加する

あなたのプロジェクトの `CLAUDE.md` に以下を追加します。

```markdown
@note-pilot/CLAUDE.md
```

これだけで、Claude Codeがnote-pilotのスキルを認識します。

## 3. アカウント設定ファイルを作成する

`note-pilot/accounts/` フォルダに、あなたのnoteアカウント設定ファイルを作成します。

`account-template.md` をコピーして始めましょう。

```bash
cp note-pilot/accounts/account-template.md note-pilot/accounts/my-account.md
```

ファイルを開いて、以下の項目を設定してください。

```yaml
account_name: "あなたのアカウント名"
account_slug: "my-account"
note_url: "https://note.com/@yourhandle"
self_intro_url: "https://note.com/@yourhandle/n/自己紹介記事のID"
```

## 4. 自動投稿ツールをセットアップする（任意）

`/np:post` コマンドで自動投稿を使う場合は、依存パッケージをインストールします。

```bash
cd note-pilot/tools
npm install
```

Google Chrome がインストールされていることを確認してください。初回実行時に専用プロファイルが作成され、noteへのログインを求められます。以降は自動ログインになります。

## 5. 動作確認

Claude Codeで以下のように話しかけてみましょう。

```
記事を書いて
```

または

```
/np:write
```

アカウント設定ファイルが見つかれば、記事作成が始まります。
