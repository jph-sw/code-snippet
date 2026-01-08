import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

const APP_NAME = 'Code Snippet Vault'
const APP_DESCRIPTION =
  'A Matrix-themed code snippet manager. Store, organize, and manage your code snippets with syntax highlighting and powerful search capabilities.'
const APP_URL = 'https://snippet-vault.dev'
const APP_IMAGE = '/og-image.png'

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=5',
      },
      {
        title: APP_NAME,
      },
      {
        name: 'description',
        content: APP_DESCRIPTION,
      },
      {
        name: 'theme-color',
        content: '#0D0208',
      },
      {
        name: 'color-scheme',
        content: 'dark',
      },
      // Open Graph
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: APP_NAME,
      },
      {
        property: 'og:description',
        content: APP_DESCRIPTION,
      },
      {
        property: 'og:url',
        content: APP_URL,
      },
      {
        property: 'og:image',
        content: APP_IMAGE,
      },
      {
        property: 'og:site_name',
        content: APP_NAME,
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: APP_NAME,
      },
      {
        name: 'twitter:description',
        content: APP_DESCRIPTION,
      },
      {
        name: 'twitter:image',
        content: APP_IMAGE,
      },
      // PWA
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      {
        name: 'apple-mobile-web-app-title',
        content: APP_NAME,
      },
      // Additional
      {
        name: 'keywords',
        content:
          'code snippets, snippet manager, code vault, syntax highlighting, developer tools, code organization',
      },
      {
        name: 'author',
        content: 'Code Snippet Vault',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" color="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="scanline"></div>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
