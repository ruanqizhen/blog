// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '凡人琐忆',
  tagline: '博客备份',
  favicon: 'img/favicon.ico',

  url: 'https://blog.qizhen.xyz/',
  baseUrl: '/',
  projectName: 'blog', 
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
   
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/', // Serve the blog at the site's root
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:'https://github.com/ruanqizhen/blog/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
          blogSidebarTitle: '文章列表',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-VL39XPYKDH',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: '凡人琐忆',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    function monitorPlugin(context, options) {
      return {
        name: 'monitor-plugin',
        injectHtmlTags({content}) {
          return {
            postBodyTags: [`
               <script type="text/javascript" src="https://hm.baidu.com/hm.js?b3f6e7ec9302021671173e3fad14f4cd"></script>
               <script type="text/javascript">
                 (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                 })(window, document, "clarity", "script", "jxmn1qjx88");
               </script>
            `],
          };
        },
      };
    },
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: false,
        hashed: true,
        language: ["en", "zh"],
        blogRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
      },
    ],
    "./src/plugin/plugin-image-zoom",
  ],
};

export default config;
