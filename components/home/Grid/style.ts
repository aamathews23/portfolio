import { css } from '@emotion/react';

const section = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 128px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1065px;
  }
`;

const title = css`
  font-family: Karla, sans-serif;
  font-size: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

const grid = css`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px;
  width: 100%;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    row-gap: 32px;

    & > * {
      grid-column: span 2;

      &:last-child {
        grid-column: 2 / span 2;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;

    & > * {
      grid-column: span 1;

      &:last-child {
        grid-column: span 1;
      }
    }
  }
`;

const style = {
  section,
  title,
  grid,
};

export default style;