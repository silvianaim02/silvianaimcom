// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({
          label: 'Event date',
          description: 'The date of the event',
        }),
        avatar: fields.image({
          label: 'Thumbnails',
          description: 'Thumbnail for card',
          // This will output the images in the "public" directory
          directory: 'public/images/articles',
          publicPath: '/images/articles/',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          // Labelling options
          {
            label: 'Tag',
            itemLabel: (props) => props.value,
          }
        ),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
