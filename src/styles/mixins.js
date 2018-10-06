import { css } from 'styled-components';
import theme from './theme';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    position: relative;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${theme.colors.purple};

    &:hover,
    &:active,
    &:focus {
      color: ${theme.colors.blue};
    }
  `,
};

export default mixins;
