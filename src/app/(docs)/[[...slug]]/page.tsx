import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  DocsBody,
  DocsPage,
  DocsTitle
} from 'fumadocs-ui/layouts/docs/page'
import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx'
import { githubUrl } from '@/lib/layout.shared'
import { contentDir, source } from '@/lib/source'

type PageProps = Readonly<{
  params: Promise<{ slug?: string[] }>
}>

function PageActions({ path }: { path: string }) {
  return (
    <div className="flex flex-col items-start gap-2 text-sm text-fd-muted-foreground">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={`${githubUrl}/edit/main/${contentDir}/${path}`}
        className="hover:text-fd-accent-foreground"
      >
        在 GitHub 上编辑此页
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={`${githubUrl}/issues/new?labels=feedback`}
        className="hover:text-fd-accent-foreground"
      >
        发现问题？欢迎反馈
      </a>
    </div>
  )
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body
  const hasToc = page.data.toc.length > 0
  const actions = <PageActions path={page.path} />

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{ enabled: hasToc, footer: actions }}
      tableOfContentPopover={{ enabled: hasToc, footer: actions }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            // resolves relative file links in content (e.g. ./chapter-19-….mdx#anchor)
            a: createRelativeLink(source, page)
          }}
        />
      </DocsBody>
      {!hasToc && <div className="mt-8">{actions}</div>}
    </DocsPage>
  )
}

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  return {
    title: page.data.title
  }
}
