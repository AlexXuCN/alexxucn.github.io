import { gitPlugin } from "@vuepress/plugin-git";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { searchPlugin } from '@vuepress/plugin-search'
//import { pwaPlugin } from "@vuepress/plugin-pwa";
//import { defaultTheme } from '@vuepress/theme-default'
import themeSidebar from 'vuepress-theme-sidebar';

export default {
  title: '喵之梦 文档',
  description: 'Welcome to Neko Docs, where the documents are put out.',
  theme: themeSidebar({
    sidebar: 'auto',
    nextLinks: true,
    prevLinks: true,
    repo: 'DianFenMian/dianfenmian.github.io',
    repoLabel: 'View on Github',
    docsRepo: 'DianFenMian/dianfenmian.github.io',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit on GitHub',
    colorModeSwitch: true
  }),
  plugins: [
    gitPlugin({
      createdTime: false,
      updatedTime: true,
      contributors: true
    }),
    mdEnhancePlugin({
      gfm: true,
      container: true,
      tabs: true,
      codetabs: true,
      card: true
    }),
    copyCodePlugin({
      
    }),
    searchPlugin({

    })
  ]
}
