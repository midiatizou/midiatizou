import { useAmp } from 'next/amp';
import Head from 'next/head';

export const config = { amp: true };

export type LogoProps = {
  dimensions: {
    width: number;
    height: number; 
  },
  alt: string,
  url: string;
};

export const Logo = ({ dimensions, alt, url }: LogoProps) => {
  return (
    <>
    <div>
    {useAmp() && (
        <amp-img 
          src={url}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
        >
        </amp-img>
      )}
    </div>
  </>
  )
}