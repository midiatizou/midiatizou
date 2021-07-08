import styled from 'styled-components';

type ContainerProps = {
  spacingHeight: number;
};

export const Container = styled.span<ContainerProps>`
  display: block;
  width: 100%;
  height: ${({ spacingHeight }) => spacingHeight && `${spacingHeight}rem`};
`;
