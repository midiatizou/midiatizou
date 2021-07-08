import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from './interface';

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth'
>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    padding: 0.8rem;
    font-size: 1.4rem;
    border-radius: ${theme.border.sm};
  `,
  medium: (theme: DefaultTheme) => css`
    padding: 1.2rem 3.2rem;
    font-size: 1.6rem;
    border-radius: ${theme.border.sm};
  `,
  large: (theme: DefaultTheme) => css`
    padding: 1.6rem 3.2rem;
    font-size: 2.5rem;
    border-radius: ${theme.border.md};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: 0.8rem;
      }
    }
  `
};

export const WrapperButton = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    font-weight: bold;
    cursor: pointer;
    width: max-content;

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`;
