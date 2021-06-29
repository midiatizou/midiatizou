import { GetStaticProps } from 'next';

export const config = { amp: true };

import { SectionHome } from '../sections/SectionHome';

import { getBanner } from '../services/getBanner';
import { getLogos } from '../services/getLogos';

import { SectionHomeProps } from '../sections/SectionHome/type';

const Home = ({ banner, logos }: SectionHomeProps) => {
  return <SectionHome banner={banner} logos={logos} />;
};

export const getStaticProps: GetStaticProps = async ctx => {
  const banner = await getBanner();
  const logos = await getLogos();

  return {
    props: {
      banner,
      logos
    }
  };
};

export default Home;
