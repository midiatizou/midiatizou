import * as S from './styles';

import { SliderItem } from '../SliderItem';

import { SliderContentProps } from './types';

export const SliderContent = ({ items }: SliderContentProps) => {
  return (
    <S.SliderWrapper>
      {items.map((item: any, i: number) => (
        <SliderItem key={i} item={item} />
      ))}
    </S.SliderWrapper>
  );
};
