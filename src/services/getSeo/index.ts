import Prismic from '@prismicio/client';
import { getPrismicClient } from '../primicService';

import { dataTypes } from './type';

export async function getSeo() {
  const prismic = getPrismicClient();

  const { results } = await prismic.query([
    Prismic.predicates.at('document.type', 'seo')
  ]);

  const data: dataTypes = { ...results[0].data };

  const seo = {
    title: data.title[0].text,
    description: data.meta_description[0].text
  };

  return seo;
}
