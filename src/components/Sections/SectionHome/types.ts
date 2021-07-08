export type SectionHomeProps = {
  seo: {
    title: string;
    description: string;
  };
  banner: {
    title: string;
    subtitle: any;
    banner: any;
    bannerMobile: any;
    textButton: string;
  };
  logos: {
    logoHeader: {
      dimensions: { width: number; height: number };
      alt: string;
      url: string;
    };
    logoFooter: {
      dimensions: { width: number; height: number };
      alt: string;
      url: string;
    };
  };
};

export type DivisionBannerProps = {
  horizontalCenter?: boolean;
  verticalCenter?: boolean;
};
