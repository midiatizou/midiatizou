import styled from 'styled-components';

type ContainerProps = {
  viewportHeight?: number;
  viewportWidth?: number;
};

export const Container = styled.div<ContainerProps>`
  height: ${({ viewportHeight }) =>
    viewportHeight ? `${viewportHeight}px` : '500px'};
  width: ${({ viewportWidth }) =>
    viewportWidth ? `${viewportWidth}px` : '500px'};
`;
