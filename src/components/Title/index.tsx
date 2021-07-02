import { H1, H2, H3, H4, H5 } from './style';

type TitleProps = {
  title: string;
  asTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  weight: '300' | '400' | '500';
};

export const Title = ({ title, asTag = 'h1', weight }: TitleProps) => {
  if (asTag === 'h2') {
    return <H2 dangerouslySetInnerHTML={{ __html: title }} weight={weight} />;
  }

  if (asTag === 'h3') {
    return <H3 dangerouslySetInnerHTML={{ __html: title }} weight={weight} />;
  }

  if (asTag === 'h4') {
    return <H4 dangerouslySetInnerHTML={{ __html: title }} weight={weight} />;
  }

  if (asTag === 'h5') {
    return <H5 dangerouslySetInnerHTML={{ __html: title }} weight={weight} />;
  }
  return <H1 dangerouslySetInnerHTML={{ __html: title }} weight={weight} />;
};
