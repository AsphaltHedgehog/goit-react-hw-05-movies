import styled from 'styled-components';

export const MovieWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MovieImage = styled.img`
  width: 350px;
`;

export const MovieTitle = styled.h1`
  font-size: 24px;
  margin: 10px 0;
`;

export const MovieScore = styled.p`
  font-weight: bold;
`;

export const MovieOverview = styled.p`
  margin: 10px 0;
`;

export const MovieGenres = styled.p`
  font-style: italic;
`;