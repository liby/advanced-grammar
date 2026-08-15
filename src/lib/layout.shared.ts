import { zhCN } from '@fumadocs/language/zh-cn'
import { defineTranslations } from 'fumadocs-core/i18n'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { uiTranslations } from 'fumadocs-ui/i18n'

export const translations = defineTranslations()
  .extend(uiTranslations())
  .preset(zhCN())

export const githubUrl = 'https://github.com/liby/advanced-grammar'

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: '旋元佑进阶文法'
  },
  githubUrl
}
