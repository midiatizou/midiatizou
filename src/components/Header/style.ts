import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: ${theme.grid};
    height: 80px;
    padding: 1rem 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
  `}
`;
