# Gemini API キーを取得する

アイキャッチ画像の自動生成には **Gemini API キー** が必要です。Google AI Studio でキーを発行します。

::: warning 有料プランが必要です
Gemini API（`gemini-3.1-flash-image-preview`）の画像生成機能は**有料プランのみ**で利用できます。事前に Google Cloud の請求先アカウントと API の有効化が必要です。
:::

## 手順

### 1. Google アカウントでサインイン

[Google AI Studio](https://aistudio.google.com/) にアクセスし、Google アカウントでサインインします。

### 2. 課金を有効にする

API の画像生成機能を使うには Google Cloud プロジェクトで課金を有効にする必要があります。

1. [Google Cloud コンソール](https://console.cloud.google.com/) を開く
2. 左上のプロジェクトセレクターから対象プロジェクトを選択（または新規作成）
3. **「お支払い」** → **「課金を有効にする」** でクレジットカードを登録

### 3. API キーを作成する

1. [Google AI Studio — API キー](https://aistudio.google.com/app/apikey) を開く
2. **「APIキーを作成」** をクリック
3. 対象プロジェクトを選択して **「APIキーを作成」** を実行
4. 表示されたキー（`AIzaSy...`）をコピーして安全な場所に保管する

### 4. キーを note-pilot に設定する

`note-pilot/skills/gemini-image/.env` をテキストエディタで開き、コピーしたキーを貼り付けます。

```
GEMINI_API_KEY=AIzaSy...（ここにキーを貼り付ける）
```

::: warning ファイルを直接編集してください
API キーはセキュリティ上の理由から対話形式では設定できません。テキストエディタで `.env` ファイルを直接編集してください。
:::

設定が完了したら [アイキャッチ画像を生成する](./image-generation) に戻り、動作確認を行ってください。

## 料金の目安

料金は Google の公式料金ページでご確認ください。

- [Gemini API 料金](https://ai.google.dev/pricing)

画像生成の利用量は Google AI Studio の **「使用量」** ページで確認できます。

## よくある質問

**Q. API キーが漏洩した場合は？**  
Google AI Studio の API キー管理ページで即座に削除・再発行できます。`.env` ファイルを Git リポジトリにコミットしないよう注意してください（`.gitignore` への追加を推奨）。

**Q. 請求先アカウントを設定せずに使えますか？**  
画像生成 API は有料プランのみ対応のため、課金設定なしでは使用できません。画像生成をスキップして記事作成・校閲・投稿だけ行う場合は、`GEMINI_API_KEY` を設定しなければ自動的にスキップされます。
