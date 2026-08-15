import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import type { PropsWithChildren } from 'react'
import { baseOptions } from '@/lib/layout.shared'
import { source } from '@/lib/source'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DocsLayout
      {...baseOptions}
      tree={source.getPageTree()}
      sidebar={{
        footer: (
          <p className="mt-3 text-center text-xs text-fd-muted-foreground">
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="Creative Commons homepage"
              href="https://creativecommons.org/licenses/by-nc/4.0/"
              className="hover:text-fd-accent-foreground hover:underline"
            >
              CC BY-NC 4.0
            </a>
            <span> {new Date().getFullYear()} © 旋元佑</span>
          </p>
        )
      }}
    >
      {children}
    </DocsLayout>
  )
}
