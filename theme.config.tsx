import { useConfig, type DocsThemeConfig } from "nextra-theme-docs";

const footer = {
  content: (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        title="Creative Commons homepage"
        href="https://creativecommons.org/licenses/by-nc/4.0/"
      >
        CC BY-NC 4.0
      </a>
      &nbsp;<span>© {new Date().getFullYear()} 旋元佑</span>
    </div>
  ),
};

const config: DocsThemeConfig = {
  docsRepositoryBase: "https://github.com/liby/advanced-grammar/edit/main",
  editLink: {
    content: "在 GitHub 上编辑此页 →",
  },
  feedback: {
    content: "发现问题？欢迎反馈 →",
    labels: "feedback",
  },
  footer,
  logo: <span>旋元佑进阶文法</span>,
  head: function useHead() {
    const config = useConfig();
    const title = `${config.title} – 旋元佑进阶文法`;
    const description =
      config.frontMatter.description || '「征服英文句子写作」';

    return (
      <>
        <title>{title}</title>
        <meta name="og:title" content={title || "旋元佑进阶文法"} />
        <meta name="apple-mobile-web-app-title" content="旋元佑进阶文法" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="theme-color" content="#fff" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="grammar.itswhat.me" />
        <meta name="twitter:url" content="https://grammar.itswhat.me" />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  project: {
    link: "https://github.com/liby/advanced-grammar",
  },
  toc: {
    title: "页面导航",
    backToTop: true,
  },
};

export default config