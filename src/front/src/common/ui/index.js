import styled, { css } from 'styled-components'

export { default as Widget } from './Widget'
export { PageWrapper } from './PageWrapper'
export { Modal } from './Modal'
export { Button } from './Button'
export { Scrollbars } from './Scrollbars'
export { Select } from './Select'
export { Table, Column } from './Table'
export { Char } from './Char'
export { media } from './media'
export { EpicChart } from './EpicChart'

export const PageHeader = styled.h2`
  text-transform: uppercase;
  font-family: ${p => p.theme.primaryFont};
  text-align: center;
  width: 100%;
  color: ${p => p.theme.lightGreyColor};
  background: transparent;
`


