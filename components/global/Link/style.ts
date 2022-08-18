import { css } from '@emotion/react';

const style = css`
  color: #fff;
  text-decoration: none;
  font-family: Karla, sans-serif;
  position: relative;
  padding-bottom: 8px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #fff;
    opacity: 1;
    transition: opacity 300ms, transform 300ms;
    transform: translate3d(-105%, 0, 0);
  }

  &:hover,
  &:focus {
    &::before {
      transform: translate3d(0, 0, 0);
    }
  }

  &:focus {
    border-radius: 4px;
    outline: 2px solid #fff;
    outline-offset: 4px;
  }
`;

export default style;