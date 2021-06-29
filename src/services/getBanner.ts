import Prismic from '@prismicio/client';
import { getPrismicClient } from './primicService';

export async function getBanner() {
  const prismic = getPrismicClient();

  const { results } = await prismic.query([
    Prismic.predicates.at('document.type', 'banner')
  ]);

  const data = { ...results[0].data };

  const banner = {
    title: data.title[0].text,
    subtitle: data.subtitle[0].text,
    banner: {
      dimensions: data.banner.dimensions,
      alt: data.banner.alt,
      url: data.banner.url
    },
    bannerMobile: {
      dimensions: data.banner_mobile.dimensions,
      alt: data.banner_mobile.alt,
      url: data.banner_mobile.url
    },
    textButton: data.text_button[0].text
  };

  return banner;
}
