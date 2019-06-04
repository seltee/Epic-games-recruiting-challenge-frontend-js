import React from 'react'
import styled from 'styled-components'
import { media } from './media'
import Widget from './Widget'
import { Link } from 'react-router-dom'

const StyledWidget = styled(Widget).attrs({ flexDirection: 'column' })`
  margin: 10px;
  max-width: 250px;
  transition: transform 500ms;
  
  :hover{
    transform: scale(1.2);
  }
  
  ${media.laptop`
      width: 250px;
  `};
  ${media.tablet`
      width: 110px;
  `};
`

const WidgetImage = styled.img.attrs(p => ({
  src: p.imageSrc
}))`
  width: 250px;
  height: 200px;
  background-position: center;
  object-position: center;
  object-fit: cover;
    
  ${media.laptop`
      width: 100%;
  `};
  ${media.tablet`
      height: 100px;
  `};
`

const ViewWrapper = styled.div`
  text-transform: capitalize;
  background: ${p => p.theme.secondaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.lightGreyColor};
`


const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${p => p.theme.lightGreyColor};
  &:visited {
    color: ${p => p.theme.lightGreyColor};
  }
`

const DecoratedTitle = styled.div`
  text-align: center;
  font-size: 17px;
  height: 32px;
  line-height: 32px;
  
  ${media.laptop`
      font-size: 14px;
  `};
  ${media.tablet`
      font-size: 10px;
  `};
`

export const Char = ({
                       image,
                       link
                     }) => {
  return <StyledWidget>
    <StyledLink to={link}>
      <WidgetImage imageSrc={image} />
      <ViewWrapper>
        <DecoratedTitle>gameplay data</DecoratedTitle>
      </ViewWrapper>
    </StyledLink>
  </StyledWidget>
}
