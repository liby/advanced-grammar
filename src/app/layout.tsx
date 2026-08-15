import { i18nProvider } from 'fumadocs-ui/i18n'
import { RootProvider } from 'fumadocs-ui/provider/next'
import type { PropsWithChildren } from 'react'
import { translations } from '@/lib/layout.shared'
import './global.css'

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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
      {
        url: '/favicon-dark.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)'
      },
      {
        url: '/favicon-dark.png',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)'
      }
    ]
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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="zh" dir="ltr" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={i18nProvider(translations)}
          search={{ options: { type: 'static' } }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
