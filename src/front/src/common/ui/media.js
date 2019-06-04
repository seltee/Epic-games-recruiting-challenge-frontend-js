import { css } from 'styled-components'

export const media = {
  desktop: (...args) => css`
    @media (max-width: 1700px) {
      ${css(...args)};
    }
  `,
  laptop: (...args) => css`
    @media (max-width: 1440px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 800px) {
      ${css(...args)};
    }
  `,
  phone: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)};
    }
  `
}
