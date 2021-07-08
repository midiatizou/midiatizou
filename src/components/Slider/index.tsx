import { SliderContent } from './SliderContent';

import { Container } from './styles';

import { SliderProps } from './types';

export const Slider = ({
  items,
  viewportWidth,
  viewportHeight
}: SliderProps) => {
  return (
    <Container viewportWidth={viewportWidth} viewportHeight={viewportHeight}>
      <SliderContent items={items} />
    </Container>
  );
};
