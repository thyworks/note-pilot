# IDE セットアップ（VS Code / JetBrains）

note-pilot は Claude Code が動く環境であればどこでも使えます。ターミナルの CLI に加え、**Visual Studio Code** と **JetBrains IDE** の拡張機能からも利用できます。

---

## Visual Studio Code

### 1. VS Code をインストールする

[https://code.visualstudio.com/](https://code.visualstudio.com/) にアクセスし、お使いの OS 向けのインストーラーをダウンロードしてください。

::: code-group

```text [Windows]
1. サイト上部の「Download for Windows」をクリック
2. ダウンロードされた .exe ファイルを実行
3. インストーラーの指示に従って「次へ」を進める
   ※「PATHへの追加」にチェックが入っていることを確認
4. 「インストール」→「完了」でインストール終了
```

```text [Mac]
1. サイト上部の「Download for Mac」をクリック
2. ダウンロードされた .zip を展開
3. 「Visual Studio Code.app」をアプリケーションフォルダへドラッグ
4. Launchpad または Spotlight から起動
```

```text [Linux]
1. サイト上のドロップダウンから「.deb」（Debian/Ubuntu）または「.rpm」（Fedora/RHEL）を選択
2. ダウンロードしたパッケージをダブルクリックしてインストール
   または sudo dpkg -i code_*.deb（deb 系）でインストール
```

:::

### 2. Claude Code 拡張機能をインストールする

VS Code を起動し、拡張機能ビューを開きます。

```
Ctrl+Shift+X（Windows/Linux）
Cmd+Shift+X（Mac）
```

検索欄に `Claude Code` と入力 → **Anthropic** の拡張機能を選択 → **インストール**

または拡張機能 ID `anthropic.claude-code` を直接検索してもインストールできます。

::: info 動作要件
VS Code **1.98.0 以上** が必要です。古いバージョンをお使いの場合はアップデートしてください。
:::

### 3. Claude Code を起動する

インストール後、以下のいずれかの方法で起動できます。

| 方法 | 操作 |
|------|------|
| コマンドパレット | `Ctrl+Shift+P` → `Claude Code: Open in New Tab` |
| アクティビティバー | 左サイドバーの ✦ アイコンをクリック |
| ステータスバー | 右下の **✱ Claude Code** をクリック |
| ショートカット | `Ctrl+Esc`（Windows/Linux）/ `Cmd+Esc`（Mac） |

### 4. プロジェクトフォルダを開く

**note-pilot を使うフォルダ**を VS Code で開いてから Claude Code を起動してください。`CLAUDE.md` はプロジェクトのルートから自動で読み込まれます。

```
ファイル → フォルダーを開く → note-pilot を配置したフォルダを選択
```

### 5. note-pilot を使う

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

### 1. JetBrains IDE をインストールする

JetBrains IDE は **JetBrains Toolbox App** を使うと複数の IDE を一元管理できます。

**Toolbox App（推奨）**

[https://www.jetbrains.com/toolbox-app/](https://www.jetbrains.com/toolbox-app/) からインストーラーをダウンロードして実行します。Toolbox App を起動すると IDE の一覧が表示されるので、使いたい IDE の **Install** をクリックしてください。

**個別インストール**

Toolbox を使わない場合は、各 IDE のページから直接ダウンロードできます。

| IDE | 主な用途 |
|-----|---------|
| [IntelliJ IDEA](https://www.jetbrains.com/idea/) | Java / Kotlin |
| [PyCharm](https://www.jetbrains.com/pycharm/) | Python |
| [WebStorm](https://www.jetbrains.com/webstorm/) | JavaScript / TypeScript |
| [GoLand](https://www.jetbrains.com/goland/) | Go |

::: info Community 版と Ultimate 版
IntelliJ IDEA と PyCharm には無料の **Community 版** があります。note-pilot の利用には Community 版で十分です。
:::

### 2. Claude Code プラグインをインストールする

IDE を起動し、プラグイン設定を開きます。

```
設定（Settings）→ プラグイン（Plugins）→ マーケットプレイス（Marketplace）
```

`Claude Code` を検索 → **Claude Code Beta** をインストール → IDE を再起動

::: info 対応 IDE
IntelliJ IDEA、PyCharm、Android Studio、WebStorm、PhpStorm、GoLand などが対象です。
:::

### 3. Claude Code を起動する

| 方法 | 操作 |
|------|------|
| ショートカット | `Ctrl+Esc`（Windows/Linux）/ `Cmd+Esc`（Mac） |
| ツールバー | Claude Code ボタンをクリック |

### 4. note-pilot を使う

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
