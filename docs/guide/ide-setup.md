# VS Code セットアップ

note-pilot は Claude Code が動く環境であればどこでも使えます。ここでは **Visual Studio Code** での使い方を説明します。

---

## 1. VS Code をインストールする

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

## 2. Claude Code 拡張機能をインストールする

VS Code を起動し、拡張機能ビューを開きます。

::: code-group

```text [Windows / Linux]
Ctrl+Shift+X
```

```text [Mac]
Cmd+Shift+X
```

:::

検索欄に `Claude Code` と入力 → **Anthropic** の拡張機能を選択 → **インストール**

または拡張機能 ID `anthropic.claude-code` を直接検索してもインストールできます。

::: info 動作要件
VS Code **1.98.0 以上** が必要です。古いバージョンをお使いの場合はアップデートしてください。
:::

## 3. Claude Code を起動する

インストール後、以下のいずれかの方法で起動できます。

::: code-group

```text [Windows / Linux]
・コマンドパレット : Ctrl+Shift+P → Claude Code: Open in New Tab
・アクティビティバー: 左サイドバーの ✦ アイコンをクリック
・ステータスバー  : 右下の ✱ Claude Code をクリック
・ショートカット  : Ctrl+Esc
```

```text [Mac]
・コマンドパレット : Cmd+Shift+P → Claude Code: Open in New Tab
・アクティビティバー: 左サイドバーの ✦ アイコンをクリック
・ステータスバー  : 右下の ✱ Claude Code をクリック
・ショートカット  : Cmd+Esc
```

:::

## 4. プロジェクトフォルダを開く

**note-pilot を使うフォルダ**を VS Code で開いてから Claude Code を起動してください。`CLAUDE.md` はプロジェクトのルートから自動で読み込まれます。

```
ファイル → フォルダーを開く → note-pilot を配置したフォルダを選択
```

## キーボードショートカット一覧

| 操作 | Windows / Linux | Mac |
|------|----------------|-----|
| Claude Code にフォーカス | `Ctrl+Esc` | `Cmd+Esc` |
| 新しいタブで開く | `Ctrl+Shift+Esc` | `Cmd+Shift+Esc` |
| ファイル参照を挿入（@メンション） | `Alt+K` | `Option+K` |
| プロンプト内で改行 | `Shift+Enter` | `Shift+Enter` |

---

## トラブルシューティング

| 症状 | 対処 |
|------|------|
| ✦ アイコンが表示されない | ファイルを開いた状態か確認。VS Code を再起動。競合する拡張機能を無効化 |
| Claude が応答しない | インターネット接続を確認。新しい会話を開始。ターミナルで `claude` を実行して詳細エラーを確認 |
