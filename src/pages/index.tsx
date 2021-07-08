import { GetStaticProps } from 'next';

export const config = { amp: true };

import { SectionHome } from '../components';

import { getBanner, getLogos, getSeo } from '../services';

import { SectionHomeProps } from '../components/Sections/SectionHome/types';

const Home = ({ banner, logos, seo }: SectionHomeProps) => {
  return <SectionHome banner={banner} logos={logos} seo={seo} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const [banner, logos, seo] = await Promise.all([
    getBanner(),
    getLogos(),
    getSeo()
  ]);

  return {
    props: {
      banner,
      logos,
      seo
    }
  };
};

export default Home;
