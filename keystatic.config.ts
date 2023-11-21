import { ComponentBlocks } from '@/components/keystatic/ComponentBlock';
import { articleSchema } from '@/schema/fields/articlesSchema';
import { config, fields, collection } from '@keystatic/core';

const isVercelProd = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

export default config({
  storage: isVercelProd
    ? {
        kind: 'github',
        repo: {
          owner: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER!,
          name: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG!,
        },
      }
    : {
        kind: 'local',
      },
  collections: {
    articles: articleSchema,
  },
});
