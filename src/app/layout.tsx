import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { PropsWithChildren } from 'react'

export const metadata = {
  metadataBase: new URL('https://grammar.itswhat.me'),
  title: {
    template: '%s – 旋元佑进阶文法'
  },
  description: '「征服英文句子写作」',
  applicationName: '旋元佑进阶文法',
  generator: 'Next.js',
  appleWebApp: {
    title: '旋元佑进阶文法'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    card: 'summary_large_image',
    site: 'grammar.itswhat.me',
    url: 'https://grammar.itswhat.me'
  }
}

const navbar = (
  <Navbar
    logo={<span>旋元佑进阶文法</span>}
    projectLink="https://github.com/liby/advanced-grammar"
  />
)

const footer = (
  <Footer>
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        title="Creative Commons homepage"
        href="https://creativecommons.org/licenses/by-nc/4.0/"
        style={{ color: '#0070f3' }}
      >
        CC BY-NC 4.0
      </a>
      <span> {new Date().getFullYear()} © 旋元佑</span>
    </div>
  </Footer>
)

export default async function RootLayout({
  children
}: PropsWithChildren) {
  const pageMap = await getPageMap()

  return (
    <html lang="zh" dir="ltr" suppressHydrationWarning>
      <Head>
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
      </Head>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          editLink="在 GitHub 上编辑此页"
          feedback={{
            content: "发现问题？欢迎反馈",
            labels: "feedback"
          }}
          docsRepositoryBase="https://github.com/liby/advanced-grammar/edit/main"
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          toc={{
            title: "页面导航",
            backToTop:"返回顶部"
          }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
