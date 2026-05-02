# IDE セットアップ（VS Code / JetBrains）

note-pilot は Claude Code が動く環境であればどこでも使えます。ターミナルの CLI に加え、**Visual Studio Code** と **JetBrains IDE** の拡張機能からも利用できます。

## Visual Studio Code

### 1. 拡張機能をインストールする

VS Code の拡張機能ビューを開いて「Claude Code」を検索し、**Anthropic** が公開している拡張機能をインストールします。

```
Ctrl+Shift+X（Windows/Linux）
Cmd+Shift+X（Mac）
```

検索欄に `Claude Code` と入力 → **Anthropic** の拡張機能を選択 → **インストール**

または拡張機能 ID を直接指定してインストールすることもできます。

```
anthropic.claude-code
```

::: info 動作要件
VS Code **1.98.0 以上** が必要です。
:::

### 2. Claude Code を起動する

インストール後、以下のいずれかの方法で起動できます。

| 方法 | 操作 |
|------|------|
| コマンドパレット | `Ctrl+Shift+P` → `Claude Code: Open in New Tab` |
| アクティビティバー | 左サイドバーの ✦ アイコンをクリック |
| ステータスバー | 右下の **✱ Claude Code** をクリック |
| ショートカット | `Ctrl+Esc`（Windows/Linux）/ `Cmd+Esc`（Mac） |

### 3. プロジェクトフォルダを開く

**note-pilot を使うフォルダ**を VS Code で開いてから Claude Code を起動してください。`CLAUDE.md` はプロジェクトのルートから自動で読み込まれます。

```
ファイル → フォルダーを開く → note-pilot を配置したフォルダを選択
```

### 4. note-pilot を使う

起動した Claude Code パネルに話しかけるだけです。

```
アカウントを追加して
```

```
記事を書いて
```

CLI とまったく同じ操作で使えます。

### キーボードショートカット一覧

| 操作 | Windows/Linux | Mac |
|------|--------------|-----|
| Claude Code にフォーカス | `Ctrl+Esc` | `Cmd+Esc` |
| 新しいタブで開く | `Ctrl+Shift+Esc` | `Cmd+Shift+Esc` |
| ファイル参照を挿入（@メンション） | `Alt+K` | `Option+K` |
| プロンプト内で改行 | `Shift+Enter` | `Shift+Enter` |

---

## JetBrains（IntelliJ / PyCharm / WebStorm など）

### 1. プラグインをインストールする

JetBrains IDE のプラグイン設定を開きます。

```
設定（Settings）→ プラグイン（Plugins）→ マーケットプレイス（Marketplace）
```

`Claude Code` を検索 → **Claude Code Beta** をインストール → IDE を再起動

::: info 対応 IDE
IntelliJ IDEA、PyCharm、Android Studio、WebStorm、PhpStorm、GoLand などが対象です。
:::

### 2. Claude Code を起動する

| 方法 | 操作 |
|------|------|
| ショートカット | `Ctrl+Esc`（Windows/Linux）/ `Cmd+Esc`（Mac） |
| ツールバー | Claude Code ボタンをクリック |

### 3. note-pilot を使う

VS Code と同様に、プロジェクトフォルダを開いた状態で Claude Code パネルから話しかけるだけです。

---

## CLAUDE.md の動作について

`CLAUDE.md` はすべての環境で**同じ動作**をします。

- ターミナル CLI
- VS Code 拡張機能
- JetBrains プラグイン

プロジェクトのルートに `CLAUDE.md` を置き、`@note-pilot/CLAUDE.md` を記載しておけば、どの環境からアクセスしても note-pilot のスキルが有効になります。

---

## トラブルシューティング

| 症状 | 対処 |
|------|------|
| ✦ アイコンが表示されない | ファイルを開いた状態か確認。VS Code を再起動。競合する拡張機能を無効化 |
| Claude が応答しない | インターネット接続を確認。新しい会話を開始。ターミナルで `claude` を実行して詳細エラーを確認 |
| JetBrains で起動しない | IDE を完全に再起動。プラグインが有効か確認 |
