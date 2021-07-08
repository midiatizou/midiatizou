import styled, { css } from 'styled-components';

import { theme } from '../../../styles/theme';

import { DivisionBannerProps } from './types';

export const ContainerBanner = styled.section`
  display: flex;
  padding: 2.4rem 0;
  height: 500px;
  color: ${theme.colors.white};
`;

export const SubtitleBanner = styled.p`
  font-size: 21px;
  color: ${theme.colors.white};
`;

export const DivisionBanner = styled.div<DivisionBannerProps>`
  width: 50%;

  ${({ horizontalCenter }) =>
    horizontalCenter &&
    css`
      display: flex;
      justify-content: center;
    `}

  ${({ verticalCenter }) =>
    verticalCenter &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}
`;
