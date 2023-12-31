import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../../../keystatic.config';
import { DocumentRenderer } from '@keystatic/core/renderer';
import Image from '@/components/keystatic/Image';
import siteMetadata from '@/utils/siteMetaData';

// Return a list of `params` to populate the [slug] dynamic segment
// 1. Create a reader
const reader = createReader(process.cwd(), keystaticConfig);

export async function generateStaticParams() {
  const articles = await reader.collections.articles.all();

  return articles.map((article: any) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: any) {
  const { slug } = params;
  const detailArticle = await getDetailData(slug);

  if (!detailArticle) {
    return;
  }

  let imageList = [siteMetadata.socialBanner];
  if (detailArticle.thumbnail) {
    imageList = [detailArticle.thumbnail];
  }

  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    };
  });

  const author = siteMetadata.author;

  return {
    title: detailArticle.title,
    description: detailArticle.summary,
    openGraph: {
      title: detailArticle.title,
      description: detailArticle.summary,
      url: siteMetadata.siteUrl + '/articles' + `/${slug}`,
      siteName: siteMetadata.title,
      images: ogImages,
      publishedTime: detailArticle.date,
      locale: 'en_US',
      type: 'article',
      authors: author,
    },
    twitter: {
      card: 'summary_large_image',
      title: detailArticle.title,
      description: detailArticle.summary,
      images: ogImages,
    },
  };
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
    summary: article.summary,
  };
}

export default async function Page({ params }: any) {
  const { slug } = params;
  const detailArticle = await getDetailData(slug);

  return (
    <div className='flex justify-center'>
      <div className='mx-auto w-full px-4 py-8 sm:max-w-xl md:max-w-screen-lg md:px-24'>
        <div className='prose mt-8 max-w-none'>
          <div className='md:text-center'>
            <div className='flex gap-4 md:justify-center'>
              {detailArticle?.tags?.map(async (tag, tagIndex: any) => (
                <a
                  key={tagIndex}
                  href='#'
                  className='text-primary hover:bg-primary rounded-full border border-gray-100 px-3 py-1 text-sm font-medium transition duration-300 hover:border-transparent hover:text-white dark:border-gray-700 dark:text-gray-300'
                >
                  {tag}
                </a>
              ))}
            </div>
            <h1 className='mt-4 text-3xl font-bold text-gray-800 dark:text-white md:text-4xl'>
              {detailArticle?.title}
            </h1>
            <p className='mt-4 text-gray-400 dark:text-gray-500'>
              {detailArticle?.date}
            </p>
          </div>
          <div className='content-style mt-8'>
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
