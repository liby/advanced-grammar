import { createFromSource } from 'fumadocs-core/search/server'
import { source } from '@/lib/source'

// Exports prebuilt search indexes as static JSON; the client searches locally
// (RootProvider search options type 'static').
export const revalidate = false

export const { staticGET: GET } = createFromSource(source)
