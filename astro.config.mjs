import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '旋元佑进阶文法',
      editLink: {
        baseUrl: 'https://github.com/liby/advanced-grammar/edit/main/',
      },
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
        {
          label: '资源',
          collapsed: true,
          items: [
            {
              label: '授权：署名—非商业性使用',
              link: 'https://creativecommons.org/licenses/by-nc/4.0/',
              attrs: { class: 'external-link', rel: 'nofollow' }
            }
          ]
        }
      ],
    }),
  ],
  adapter: vercel(),
  image: {
    domains: ["raw.githubusercontent.com"],
  },
  redirects: {
    '/': '/contents/01-introduction/'
  }
});
