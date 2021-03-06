import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Image from 'next/image';
import Head from 'next/head';
import { useAmp } from 'next/amp';

export const config = { amp: true };

import { getPrismicClient } from '../services/primicService';

type HomeProps = {
  banner: {
    title: string;
    description: string;
    image: any;
    buttonText: string;
  }
}

const Home = ({ banner }: HomeProps) => {

  return (
    <div>
      <Head>

      </Head>

      <h1> {banner.title} </h1>
      <p> {banner.description} </p>
      
      {useAmp() && (
        <amp-img 
          src={banner.image.url}
          alt={banner.image.alt}
          width="500"
          height="500">
        </amp-img>
      )}
      <button type="button"> {banner.buttonText} </button>
    </div>
  )
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const prismic = getPrismicClient();
  const { results } = await prismic.query([
    Prismic.predicates.at('document.type', 'banner')
  ]);
  
  const data = {...results[0].data}; 

  const banner = {
    title: data.title[0].text,
    description: data.description[0].text,
    image: {
      url: data.image.url,
      alt: data.image.alt
    },
    buttonText: data.buttontext[0].text,
  }

  return { 
    props: {
      banner,
    }
  }
}

export default Home;