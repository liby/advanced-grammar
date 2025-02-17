import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: Record<string, React.ComponentType<any>>) {
  return {
    ...docsComponents,
    ...components
    // ... your additional components
  }
}