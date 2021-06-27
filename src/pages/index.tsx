import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Image from 'next/image';
import Head from 'next/head';
import { useAmp } from 'next/amp';

export const config = { amp: true };

import { Title } from '../components/Title';

import { getPrismicClient } from '../services/primicService';

type HomeProps = {
  banner: {
    title: string;
    subtitle: any;
    banner: any;
    bannerMobile: any;
    textButton: string;
  }
}

const Home = ({ banner }: HomeProps) => {

  return (
    <div>
      <Head>

      </Head>

      <Title title={banner.title} />
      <p> {banner.subtitle} </p>

      <button className="lalal" type="button"> {banner.textButton} </button>
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
    subtitle: data.subtitle[0].text,
    banner: {
      dimensions: data.banner.dimensions,
      alt: data.banner.alt,
      ult: data.banner.url,
    },
    bannerMobile: {
      dimensions: data.banner_mobile.dimensions,
      alt: data.banner_mobile.alt,
      ult: data.banner_mobile.url,
    },
    textButton: data.text_button[0].text
  }

  return {
    props: {
      banner,
    }
  }
}

export default Home;