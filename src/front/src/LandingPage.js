import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'

import { PageHeader, Button, Char } from 'common/ui'
import { SearchBar } from './SearchBar'

const Wrapper = styled.div`
  display: flex;
  color: ${p => p.theme.lightGreyColor};
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
  top: -50px;
  justify-content: space-around;
  align-items: center;
  & p {
    margin: 0;
    line-height: 2em;
  }
`

const LandingWrapper = styled.div`
  display: flex;
  width: 65%;
  max-width: 1000px;
  justify-content: space-between;
  text-transform: uppercase;
  background: transparent;
  position: relative;
  z-index: 2;
`

const SearchWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 750px;
  position: relative;
  z-index: 2;
`

const VideoWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: -50px;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  pointer-events: none;
  background-color: black;
`

const VideoPositioner = styled.div`
  position: absolute;
`

const VideoMask = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url("video_mask.png");
`

export const LandingPage = ({
  history: {
    location: { pathname }
  },
  match: {
    isExact
  }
}) => {
  const forceUpdate = useState()[1];
  const width = window.innerWidth + 120;
  const height = window.innerHeight + 120;
  const calcWidth = 16 / 9 * height;
  const calcHeight = 9 / 16 * width;
  const finalWidth = calcWidth >= width ? calcWidth : width;
  const finalHeight = calcWidth >= width ? height : calcHeight;
  const shiftLeft = (finalWidth - width) / -2;
  const shiftTop = (finalHeight - height) / -2;

  useEffect(() => {
    const listener = (e) => {
      forceUpdate(e);
    }
    window.addEventListener('resize', listener, true);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  if (pathname !== '/' && !isExact) {
    return <Redirect to="/" />
  } else {
    return (
      <Wrapper>
        <VideoWrapper>
          <VideoPositioner
            style={{
              width: finalWidth,
              height: finalHeight,
              left: shiftLeft,
              top: shiftTop
            }}
          >
            <VideoMask />
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NahGKWu0R7Y?controls=0&rel=0&amp;start=18&autoplay=1&showinfo=0&autohide=1&loop=1&mute=1"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </VideoPositioner>
          <PageHeader style={{ padding: '50px 0px 10px 0px' }}>game data explorer</PageHeader>
        </VideoWrapper>
        <LandingWrapper>
          <Char
            image="/beginner.jpg"
            link="players/beginner"
          />
          <Char
            image="/intermediate.jpg"
            link="players/intermediate"
          />
          <Char
            image="/pro.jpg"
            link="players/pro"
          />
        </LandingWrapper>
        <SearchWrapper>
          <SearchBar />
        </SearchWrapper>
        <ImageContainer>
          <Link to="/docs">
            <Button round wide color="modalOverlayBackground" active>
              Go to project documentation
            </Button>
          </Link>
        </ImageContainer>
      </Wrapper>
    )
  }
}
