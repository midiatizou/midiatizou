import Head from 'next/head';

export const Carousel = () => {
  return (
    <>
      <Head>
        <script
          async
          custom-element="amp-base-carousel"
          src="https://cdn.ampproject.org/v0/amp-base-carousel-0.1.js"
        ></script>
      </Head>
      <amp-base-carousel
        class="gallery"
        layout="fixed"
        width="400"
        height="100"
        visible-count="1"
        advance-count="1"
        loop="true"
        auto-advance-interval={500}
        style={{ padding: '40px' }}
      >
        <div className="item">
          <strong style={{ color: '#fff' }}>Google 1</strong>
          <p style={{ color: '#fff' }}>Anuncie no Google</p>
          <p style={{ color: '#fff' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed
            libero minus ex, explicabo pariatur consequatur et neque inventore
            suscipit iusto officia nihil perferendis sit quasi voluptates autem
            nemo modi.
          </p>
        </div>
        <div className="item">
          <strong>Google 2</strong>
          <p>Anuncie no Google</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed
            libero minus ex, explicabo pariatur consequatur et neque inventore
            suscipit iusto officia nihil perferendis sit quasi voluptates autem
            nemo modi.
          </p>
        </div>
        <div className="item">
          <strong>Google 3</strong>
          <p>Anuncie no Google</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed
            libero minus ex, explicabo pariatur consequatur et neque inventore
            suscipit iusto officia nihil perferendis sit quasi voluptates autem
            nemo modi.
          </p>
        </div>
        <div className="item">
          <strong>Google 4</strong>
          <p>Anuncie no Google</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed
            libero minus ex, explicabo pariatur consequatur et neque inventore
            suscipit iusto officia nihil perferendis sit quasi voluptates autem
            nemo modi.
          </p>
        </div>
      </amp-base-carousel>
    </>
  );
};
