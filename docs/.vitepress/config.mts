import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'note-pilot',
  description: 'noteクリエイター向けClaude Codeプラグイン',
  lang: 'ja',
  base: '/note-pilot/',
  themeConfig: {
    logo: '✍️',
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'ガイド', link: '/guide/getting-started' },
      { text: '機能一覧', link: '/reference/commands' },
    ],
    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: 'note-pilotとは', link: '/guide/getting-started' },
          { text: 'IDE セットアップ', link: '/guide/ide-setup' },
          { text: 'セットアップ', link: '/guide/setup' },
          { text: '使用イメージ', link: '/guide/daily-usage' },
        ],
      },
      {
        text: '使い方',
        items: [
          { text: 'フォルダ構成', link: '/guide/folder-structure' },
          { text: 'アカウントを管理する', link: '/guide/accounts' },
          { text: '記事を書く', link: '/guide/writing' },
          { text: 'アイキャッチ画像を生成する', link: '/guide/image-generation' },
          { text: '校閲する', link: '/guide/review' },
          { text: '投稿する', link: '/guide/posting' },
          { text: 'ナレッジを追加する', link: '/guide/knowledge' },
          { text: '連載計画を立てる', link: '/guide/plan' },
        ],
      },
      {
        text: 'リファレンス',
        items: [
          { text: '機能一覧', link: '/reference/commands' },
        ],
      },
      {
        text: 'その他',
        items: [
          { text: 'ライセンス', link: '/license' },
        ],
      },
    ],
    socialLinks: [],
    footer: {
      message: 'note-pilot — Claude Code plugin for note creators',
    },
  },
})
