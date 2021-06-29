import { useAmp } from 'next/amp';

export const config = { amp: true };

export type LogoProps = {
  dimensions: {
    width: number;
    height: number;
  };
  alt: string;
  url: string;
};

export const Image = ({ dimensions, alt, url }: LogoProps) => {
  return (
    <>
      {useAmp() && (
        <amp-img
          src={url}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
        ></amp-img>
      )}
    </>
  );
};
