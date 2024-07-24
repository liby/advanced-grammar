import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '旋元佑进阶文法',
      social: {
        github: 'https://github.com/liby/advanced-grammar',
      },
      sidebar: [
        {
          label: '目录',
          autogenerate: { directory: 'contents' },
        },
        {
          label: '附录',
          collapsed: true,
          autogenerate: { directory: 'appendix' },
        },
      ],
    }),
  ],
  redirects: {
    '/': '/contents/01-introduction/'
  }
});
