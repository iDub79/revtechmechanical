import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.revtechmechanical.com.au'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
