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
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/xj63/PID-docs' },
    ],
  },
  plugins: [katex()],
});
