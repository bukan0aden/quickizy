import type { GlobalConfig } from 'payload'

import { revalidateSiteConfig } from './hooks/revalidateSiteConfig'
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from '@payloadcms/plugin-seo/fields'

export const SiteConfig: GlobalConfig = {
  slug: 'site-config',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media'
    },
    {
      type: "tabs",
      tabs: [
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
              overrides: {
                custom: { name: 'meta.title' }
              }
            }),
            MetaImageField({
              relationTo: 'media',
              overrides: {
                custom: { name: 'meta.image' }
              }
            }),
            MetaDescriptionField({
              overrides: {
                custom: { name: 'meta.description' }
              }
            }),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ]
        },
      ]
    },
    {
      type: "text",
      name: "keywords",
      required: true,
      localized: true
    }
  ],
  hooks: {
    afterChange: [revalidateSiteConfig],
  },
}
