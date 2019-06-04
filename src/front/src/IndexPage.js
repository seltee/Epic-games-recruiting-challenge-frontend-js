import * as React from 'react'
import { Switch, Route, NavLink, Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { darken, lighten } from 'polished'

import { LandingPage } from './LandingPage'
import { DocsPage } from './DocsPage'
import { VisualizationPage } from './VisualizationPage'
import { WeaponPage } from './WeaponPage'
import { SearchBar } from './SearchBar'
import { PlayersPage } from './PlayersPage'
import { HistoryPage } from './HistoryPage'
import { Modal, PageWrapper, media } from 'common/ui'
import { DataReportIcon, ChartsIcon, PlayersIcon, WeaponIcon, HistoryIcon } from 'common/ui/Icons'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Page = styled.div`
  height: 100%;
  width: 100%;
`

const grow = keyframes`
  from {
      transform: scaleY(0.9) scaleX(0.9);
  }
  to {
    transform: scaleY(1) scaleX(1);
  }
`

const Tip = styled.div`
  background: ${p => p.theme.modalOverlayBackground};
  color: ${p => p.theme.lightGreyColor};
  border-radius: ${p => p.theme.borderRadius};
  animation: ${grow} 0.4s linear;
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  font-size: 12px;
  box-shadow: ${p => p.theme.widgetBoxShadow};
  kbd {
    background: ${p => p.theme.modalOverlayBackground};
    color: ${p => p.theme.lightColor};
    padding: 2px;
    border-radius: ${p => p.theme.borderRadius};
  }
`

const StyledLink = styled(Link)`
  color: ${p => p.theme.lightGreyColor};
  text-decoration: none;
  &:visited {
    color: ${p => p.theme.lightGreyColor};
  }
`

const SidebarNavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  flex-direction: column;
  height: 50px;
  width: 60px;
`

const Sidebar = styled.div`
  background: ${p => p.theme.secondaryColor};
  color: ${p => p.theme.lightGreyColor};
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 60px;
  
  display: flex;
  transition: margin-left 500ms;
  position: relative;
  z-index: 3;
  margin-left: 0;

  ${media.tablet`
    margin-left: ${p => p.opened ? "0" : "-60px"};
  `}
  
  ${SidebarNavIcon} {
    color: ${p => p.theme.lightColor};
  }
  .active {
    background: ${p => darken(0.35, p.theme.primaryColor)};
    ${SidebarNavIcon} {
      color: ${p => lighten(0.35, p.theme.secondaryColor)};
    }
  }
`

const Header = styled.div`
  background: ${p => p.theme.backgroundColor};
  color: ${p => p.theme.lightGreyColor};
  text-transform: uppercase;
  height: 40px;
  display: flex;
  z-index: 4;
  align-items: center;
  justify-content: flex-start;
  left: 0;
  padding: 5px 20px;
  position: relative;
  width: auto;
  
  h3 {
    max-height: 30px;
    margin: 0;
  }
  
  ${media.tablet`
    width: calc(100% - 60px);
    padding: 5px 0px 5px 60px;
    position: absolute;
  `}
`

const SidebarLink = styled(NavLink).attrs({
  activeClassName: 'active'
})``

const AnimationWrapper = styled.div`
  transition: opacity 300ms ease-in;
  width: 100%;
  position: absolute;

  // enter from
  &.page-fade-enter {
    opacity: 0;
  }

  // enter to
  &.page-fade-enter-active {
    opacity: 1;
  }
  
  &.page-fade-enter-done {
    opacity: 1;
  }

  // exit from
  &.page-fade-exit {
    opacity: 1;
    z-index: 1;
  }

  // exit to 
  &.page-fade-exit-active {
    opacity: 0;
    z-index: 1;
  }
`

const BurgerWrapper = styled.div`
  cursor: pointer;
  padding-right: 10px;
  position: absolute;
  z-index: 10;
  display: none;
  
  ${media.tablet`
    display: block;
  `}
`;

const BurgerIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 15px;
  background-size: contain;
  background-image: url("/burger.svg");
`;

const ContentWrapper = styled.div`
  width: calc(100% - 60px);
  position: absolute;
  
  ${media.tablet`
    width: 100%;
    margin-top: 50px;
  `}
`;

export class IndexPage extends React.Component {
  state = {
    open: false,
    navBar: false
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown = e => {
    if (e.code === 'Slash') {
      this.setState({ open: true })
    }
  }

  render() {
    const { open, navBar } = this.state
    return (
      <PageWrapper>
        <BurgerWrapper onClick={()=> this.setState({navBar: !navBar})}>
          <BurgerIcon/>
        </BurgerWrapper>
        <Sidebar opened={navBar}>
          <SidebarLink to="/docs">
            <SidebarNavIcon>
              <DataReportIcon/>
            </SidebarNavIcon>
          </SidebarLink>
          <SidebarLink to="/visualization/kills">
            <SidebarNavIcon>
              <ChartsIcon/>
            </SidebarNavIcon>
          </SidebarLink>
          <SidebarLink to="/players">
            <SidebarNavIcon>
              <PlayersIcon/>
            </SidebarNavIcon>
          </SidebarLink>
          <SidebarLink to="/weapon">
            <SidebarNavIcon>
              <WeaponIcon/>
            </SidebarNavIcon>
          </SidebarLink>
          <SidebarLink to="/history">
            <SidebarNavIcon>
              <HistoryIcon/>
            </SidebarNavIcon>
          </SidebarLink>
        </Sidebar>
        <Page>
          <Header>
            <img
              src="/epiclogo_white_250px.png"
              style={{ width: 30, height: 30, marginRight: 10 }}
            />
            <StyledLink to="/" style={{ textDecoration: 'none' }}>
              <h3>data exploration tool</h3>
            </StyledLink>
          </Header>
          <ContentWrapper>
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames='page-fade'
              >
                <AnimationWrapper>
                  <Switch location={location}>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/docs" component={DocsPage}/>
                    <Route path="/visualization/:vizType?" component={VisualizationPage}/>
                    <Route path="/players/:playerType?" component={PlayersPage}/>
                    <Route path="/weapon" component={WeaponPage}/>
                    <Route path="/history" component={HistoryPage}/>
                    <Route component={LandingPage}/>
                  </Switch>
                </AnimationWrapper>
              </CSSTransition>
            </TransitionGroup>
          )}/>
          </ContentWrapper>
          <Modal open={open} width={900} onClose={() => this.setState({ open: false })}>
            <SearchBar/>
          </Modal>
          <Tip>
            Use <kbd>/</kbd> to pull up the sql search bar from any page
          </Tip>
        </Page>
      </PageWrapper>
    )
  }
}
