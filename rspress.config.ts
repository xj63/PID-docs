import * as path from 'path';
import { defineConfig } from 'rspress/config';
import katex from 'rspress-plugin-katex';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/PID-docs/',
  title: 'PID',
  description: 'Documentation for PID',
  icon: '/pid-logo.svg',
  logo: '/pid-logo.svg',
  logoText: 'PID',
  themeConfig: {
    lastUpdated: true,
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/xj63/PID' },
    ],
    editLink: {
      docRepoBaseUrl: 'https://github.com/xj63/PID-docs/tree/main/docs',
        text: '📝 在 GitHub 上编辑此页',
    },
  },
  plugins: [katex({ strict: false })],
});
