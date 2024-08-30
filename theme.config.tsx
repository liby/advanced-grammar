import { useRouter } from 'next/router'
import { useConfig, type DocsThemeConfig } from "nextra-theme-docs";

const footer = {
  text: (
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
    text: "在 GitHub 上编辑此页 →",
  },
  feedback: {
    content: "发现问题？欢迎反馈 →",
    labels: "feedback",
  },
  footer,
  logo: <span>旋元佑进阶文法</span>,
  head: function useHead() {
    const { title } = useConfig();

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="「征服英文句子写作」" />
        <meta name="og:description" content="「征服英文句子写作」" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="grammar.itswhat.me" />
        <meta name="twitter:url" content="https://grammar.itswhat.me" />
        <meta
          name="og:title"
          content={title ? title + " – 旋元佑进阶文法" : "旋元佑进阶文法"}
        />
        <meta name="apple-mobile-web-app-title" content="旋元佑进阶文法" />
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
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    toggleButton: true,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – 旋元佑进阶文法",
      };
    }
  },
  toc: {
    title: "页面导航",
    backToTop: true,
  },
};

export default config