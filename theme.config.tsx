import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'

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