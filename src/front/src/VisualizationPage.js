import * as React from 'react'
import request from 'superagent'
import { orderBy } from 'lodash'
import { withTheme } from 'styled-components'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { Widget, Select, media, EpicChart } from 'common/ui'
import { getUniqColor } from 'common/utils'
import { Heatmap } from './Heatmap'

const VizWrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  color: ${p => p.theme.lightGreyColor};
  overflow: hidden;
  & p {
    margin: 0;
    line-height: 2em;
  }
  
  .widget{
    height: 700px; 
    margin: auto;
  }

  .widget.movement{
    width: 800px;
  }
  
  ${media.tablet`
    .widget.movement > div:last-of-type{
      position: relative;
      left: 50%;
      margin-left: -400px;
    }
  `};
`

const processHeatMapData = data =>
  orderBy(data, 'framenumber').map(dataObj => ({
    frameNumber: dataObj.framenumber,
    frames: JSON.parse(dataObj.frame).map(frame => ({
      ...frame,
      color: getUniqColor(frame.guid)
    }))
  }))

const options = ['kills', 'movement']

const DATA_URLS = {
  kills: 'players/kills',
  movement: 'game/frame/'
}

const VizTypeSelect = ({ handleChange, value, fluid }) => (
  <Select
    options={options}
    fluid={fluid}
    handleChange={handleChange}
    value={value}
    aria-label="visualization-type"
  />
)

class Visualization extends React.Component {
  state = {
    status: 'SUCCESS',
    data: {}
  }

  componentDidMount() {
    const {
      match: {
        params: { vizType }
      }
    } = this.props
    this.fetchData(vizType)
  }

  fetchData = value => {
    this.setState({ status: 'REQUEST', data: null })
    request
      .get(`/api/${DATA_URLS[value] || 'players/kills'}`)
      .then(({ body: data }) => this.setState({
        status: 'SUCCESS',
        data: Object.assign({}, this.state.data, {[value]: data})
      }))
      .catch(() => this.setState({ status: 'ERROR', message: 'Looks like something went wrong!' }))
  }

  getVisualization = data => {
    const {
      match: {
        params: { vizType }
      }
    } = this.props
    if (!data) return null

    switch (vizType) {
      case 'kills': {
        return <EpicChart
          data={data['kills']}
          keyValue={'kills'}
          titleValue={'killer_guid'}
          tooltip={(el) => `kills: ${el.kills}`}
        />;
      }
      case 'movement': {
        return <Heatmap data={processHeatMapData(data['movement'])} />
      }
      default:
        return null
    }
  }

  handleChange = value => {
    const {
      match: { params },
      history
    } = this.props

    if (params.playerType !== value) {
      this.setState({data: []})
      history.push(`/visualization/${value}`)
    }

    this.fetchData(value)
  }

  render() {
    const {
      match: {
        params: { vizType }
      }
    } = this.props
    const { data, status, message } = this.state
    return (
      <VizWrapper>
        {!vizType && <Redirect to="/visualization/kills" />}
        {vizType === 'movement' && (
          <>
            <p>This is a map of all player movement for one match</p>
            <p>Each color represents a different player</p>
          </>
        )}
        <Widget
          header="Data visualization"
          padding="15px"
          status={status}
          message={message}
          className={vizType === 'movement' ? 'widget movement' : 'widget kills'}
          actions={<VizTypeSelect value={vizType} handleChange={this.handleChange} />}
          responsiveWidth
        >
          {this.getVisualization(data)}
        </Widget>
      </VizWrapper>
    )
  }
}

export const VisualizationPage = withTheme(Visualization)
