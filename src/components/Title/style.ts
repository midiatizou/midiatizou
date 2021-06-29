import styled from 'styled-components';

type HProps = {
  weight: '300' | '400' | '500';
};

export const H1 = styled.h1<HProps>`
  font-size: 48px;
  color: #fff;
  font-weight: ${({ theme }) => theme.weight && theme.weight};
`;

export const H2 = styled.h2<HProps>`
  font-size: 37px;
  color: #fff;
  font-weight: ${({ theme }) => theme.weight && theme.weight};
`;

export const H3 = styled.h3<HProps>`
  font-size: 28px;
  color: #fff;
  font-weight: ${({ theme }) => theme.weight && theme.weight};
`;

export const H4 = styled.h4<HProps>`
  font-size: 21px;
  color: #fff;
  font-weight: ${({ theme }) => theme.weight && theme.weight};
`;

export const H5 = styled.h5<HProps>`
  font-size: 16px;
  color: #fff;
  font-weight: ${({ theme }) => theme.weight && theme.weight};
`;
