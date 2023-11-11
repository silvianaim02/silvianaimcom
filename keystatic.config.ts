import { ComponentBlocks } from '@/components/componentBlock/ComponentBlock';
import { config, fields, collection, component } from '@keystatic/core';

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
        thumbnail: fields.image({
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
          links: true,
          layouts: [[1], [1, 1]],
          images: {
            directory: 'public/images/articles',
            publicPath: '/images/articles/',
            schema: {
              title: fields.text({
                label: 'Caption',
                description:
                  'The text to display under the image in a caption.',
              }),
            },
          },
          dividers: true,
          formatting: {
            alignment: {
              center: true,
              end: true,
            },
            blockTypes: true,
            headingLevels: true,
            inlineMarks: {
              code: true,
              bold: true,
              italic: true,
              underline: true,
              strikethrough: true,
            },
            listTypes: true,
          },
          tables: true,
          componentBlocks: ComponentBlocks,
        }),
      },
    }),
  },
});
