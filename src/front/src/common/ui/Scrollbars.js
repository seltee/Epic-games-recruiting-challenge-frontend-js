import React from 'react'
import { Scrollbars as CustomScrollbars } from 'react-custom-scrollbars'
import styled from 'styled-components'

export const Scrollbars = styled(CustomScrollbars)`
  .track-vertical {
    right: 2px;
    bottom: 2px;
    top: 2px;
    border-radius: 2px;
  }
  .track-horizontal {
    right: 2px;
    left: 2px;
    bottom: 2px;
    border-radius: 2px;
  }
  .thumb-vertical,
  .thumb-horizontal {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 2px;
  }
`

const renderTrackVertical = props => <div className="track-vertical" {...props} />
const renderTrackHorizontal = props => <div className="track-horizontal" {...props} />
const renderThumbVertical = props => <div className="thumb-vertical" {...props} />
const renderThumbHorizontal = props => <div className="thumb-horizontal" {...props} />

Scrollbars.defaultProps = {
  renderTrackVertical,
  renderTrackHorizontal,
  renderThumbVertical,
  renderThumbHorizontal,
  autoHide: true
}
