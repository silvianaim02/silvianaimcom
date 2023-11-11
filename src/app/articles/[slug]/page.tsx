import Link from 'next/link';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../../keystatic.config';
import {
  DocumentRenderer,
  DocumentRendererProps,
} from '@keystatic/core/renderer';
import Image from '@/components/componentBlock/Image';

// Return a list of `params` to populate the [slug] dynamic segment
// 1. Create a reader
const reader = createReader(process.cwd(), keystaticConfig);

export async function generateStaticParams() {
  const articles = await reader.collections.articles.all();

  return articles.map((article: any) => ({
    slug: article.slug,
  }));
}

async function getDetailData(slug: string) {
  const article = await reader.collections.articles.readOrThrow(slug, {
    resolveLinkedFiles: true,
  });

  return {
    title: article?.title,
    date: article?.date,
    thumbnail: article?.thumbnail,
    tags: article?.tags,
    content: article?.content,
  };
}

export default async function Page({ params }: any) {
  const { slug } = params;
  const detailArticle = await getDetailData(slug);
  console.log(detailArticle);

  return (
    <div className='flex justify-center'>
      <div className='mx-auto w-full px-4 py-8 sm:max-w-xl md:max-w-screen-lg md:px-24'>
        <div className='prose mt-8 max-w-none'>
          <h2 className='mt-4 font-bold'>{detailArticle?.title}</h2>
          <div className='mt-8'>
            <DocumentRenderer
              document={await detailArticle?.content}
              componentBlocks={{
                image: (props) => (
                  <Image
                    src={props.src}
                    alt={props.alt}
                    caption={props.caption}
                  />
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
