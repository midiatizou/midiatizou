import Prismic from '@prismicio/client';
import { getPrismicClient } from './primicService';

export async function getLogos() {
  const prismic = getPrismicClient();

  const { results } = await prismic.query([
    Prismic.predicates.at('document.type', 'logo-')
  ]);

  const data: any = results.map(logo => logo.data.logo);

  const logos = {
    logoHeader: {
      dimensions: data[0].dimensions,
      alt: data[0].alt,
      url: data[0].url
    },
    logoFooter: {
      dimensions: data[1].dimensions,
      alt: data[1].alt,
      url: data[1].url
    }
  };

  return logos;
}
