import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
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
});
