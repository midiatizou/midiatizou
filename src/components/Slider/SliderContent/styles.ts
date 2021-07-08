/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { AnyStyledComponent } from 'styled-components';

export type CarouselContentProps = {
  width: string;
  transition: string;
  translate: any;
};

export const SliderWrapper = styled.div`
  /*
    transform: ${`translateX(-${(props: AnyStyledComponent) =>
    props.translate}px`};
  transition: ${`transform ease-out ${(props: AnyStyledComponent) =>
    props.transition}`};
  width: ${`${(props: AnyStyledComponent) => props.width}px`};
  */
  transform: translateX(-10px);
  transition: transition ease-out 0.3s;
  height: 350px;
  width: 100%;
  display: flex;
  background: red;
`;
