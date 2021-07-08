import { useAmp } from 'next/amp';

export const config = { amp: true };

import { LogoProps } from './types';

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
