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
      { text: 'コマンド', link: '/reference/commands' },
    ],
    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: 'note-pilotとは', link: '/guide/getting-started' },
          { text: 'セットアップ', link: '/guide/setup' },
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
        ],
      },
      {
        text: 'リファレンス',
        items: [
          { text: 'コマンド一覧', link: '/reference/commands' },
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
