import { loader } from 'fumadocs-core/source'
import { defineDocs } from 'fumadocs-mdx/macro'

// Must stay in sync with the `dir` literal below: the macro rejects
// non-literal `dir`, so the path cannot be shared as one constant.
// page.path is relative to this directory; used for GitHub edit links.
export const contentDir = 'src/content'

const docs = defineDocs({
  dir: 'src/content'
})

export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource()
})
