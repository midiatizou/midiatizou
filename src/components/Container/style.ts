import styled, { css } from 'styled-components';

export const Section = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid};
    margin: 0 auto;
  `}
`;
