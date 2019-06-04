import * as React from 'react'
import styled from 'styled-components'

export const Loading = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 45 45"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#0090e8"
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="1.5s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="1.5s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="1.5s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="3s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="3s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="3s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate
          attributeName="r"
          begin="0s"
          dur="1.5s"
          values="6;1;2;3;4;5;6"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
)

// icon size should be a bit bigger than font-size
const DEFAULT_SIZE_MULTIPLY = 1.3

const getSizeMultiplier = size => (size === 'lg' ? 1.3 : parseInt(size, 10) || 1)
const getSize = ({ size }) => `${getSizeMultiplier(size) * DEFAULT_SIZE_MULTIPLY}em`
const currentColor = p => p.theme[p.color] || p.color || 'currentColor'

const IconWrapper = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 200 200'
})`
  ${p =>
    p.link &&
    `
    &:hover {
      cursor: pointer;
      transform-origin: center;
      transform: scale(1.04);
    }
  `};
  opacity: ${p => p.disabled && '0.5'};
  fill: none;
  width: ${getSize};
  height: ${getSize};
  stroke: ${currentColor};
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-width: ${p => (p.bold ? '15px' : '10px')};
  stroke-miterlimit: 10;
  vertical-align: middle;
  .fill {
    stroke: none;
    fill: ${currentColor};
  }
  .dasharray {
    stroke-dasharray: 10.79 10.79;
  }
`

const IconWrapperFilled = styled(IconWrapper)`
  path, polygon {
    fill: ${currentColor};
  }
`



export const DataReportIcon = props => (
  <IconWrapper {...props}>
    <path d="M143,167.21H57a14.57,14.57,0,0,1-14.53-14.53V47.16A14.57,14.57,0,0,1,57,32.64h55.29l45.3,47.5v72.55A14.57,14.57,0,0,1,143,167.21Z" />
    <polyline points="157.32 80.43 111.95 80.43 111.95 32.63" />
    <line x1="86.07" y1="80.13" x2="72.07" y2="80.13" />
    <line x1="72.07" y1="106.71" x2="127.17" y2="106.71" />
    <line x1="72.07" y1="136.26" x2="127.17" y2="136.26" />
  </IconWrapper>
)

export const ChartsIcon = props => (
  <IconWrapper {...props}>
    <circle cx="49.02" cy="84.15" r="9.08" />
    <circle cx="99.99" cy="51.85" r="9.08" />
    <circle cx="149.94" cy="73.85" r="9.08" />
    <line x1="56.65" y1="79.22" x2="92.09" y2="56.32" />
    <line x1="107.91" y1="56.32" x2="140.85" y2="71.1" />
    <rect x="85.17" y="92.02" width="29.64" height="65.32" rx="5.18" ry="5.18" />
    <rect x="34.19" y="118.43" width="29.64" height="38.91" rx="5.18" ry="5.18" />
    <rect x="135.12" y="109.09" width="29.64" height="48.26" rx="5.18" ry="5.18" />
  </IconWrapper>
)

export const Close = props => (
  <IconWrapper {...props}>
    <line x1="59.3" y1="59.3" x2="140.7" y2="140.7" />
    <line x1="59.3" y1="140.7" x2="140.7" y2="59.3" />
  </IconWrapper>
)

export const PlayersIcon = props => (
  <IconWrapper {...props}>
    <circle cx="99.89" cy="76.95" r="30.61" />
    <path d="M79.06,101c-10.67,5.56-17.73,15.26-17.73,26.3v18.66c0,4.28,4.29,7.76,9.57,7.76h58c5.29,0,9.57-3.47,9.57-7.76V127.25c0-11.18-7.25-21-18.16-26.52" />
    <path d="M79,99.35A26,26,0,1,1,76.84,56.8" />
    <path d="M45.22,99.27c-9.08,4.73-15.09,13-15.09,22.38v15.88c0,3.65,3.65,6.6,8.15,6.6h22.4" />
    <path d="M121,99.35a26,26,0,1,0,2.18-42.55" />
    <path d="M154.78,99.27c9.08,4.73,15.09,13,15.09,22.38v15.88c0,3.65-3.65,6.6-8.15,6.6h-22.4" />
  </IconWrapper>
)

export const WeaponIcon = props => (
  <IconWrapperFilled {...props}>
    <path transform="scale(0.3, 0.3) translate(80, 80)" d="M467.002,61.005h-212c-19.555,0-36.228,12.541-42.42,30H15.002c-8.284,0-15,6.716-15,15v120c0,8.284,6.716,15,15,15h12.705   L0.153,433.884c-1.294,9.049,5.803,17.113,14.868,17.113c0.014,0,0.028-0.002,0.043-0.002h119.902c0.018,0,0.037,0.002,0.055,0.002   c7.315,0,13.765-5.426,14.83-12.871l15.303-107.121h59.848c19.555,0,36.228-12.541,42.42-30h199.58c8.284,0,14-7.716,14-16l1-59   c0-8.284-6.716-15-15-15h-15v-30h45c8.284,0,15-6.716,15-15v-60C512.002,81.192,491.815,61.005,467.002,61.005z M150.002,151.005   v-30h60v30H150.002z M90.002,151.005v-30h30v30H90.002z M60.002,121.005v30h-30v-30H60.002z M147.707,241.005l-25.714,180H32.297   l25.714-180H147.707z M225.002,301.005H169.44l8.571-60h61.991v45C240.002,294.276,233.273,301.005,225.002,301.005z    M452.002,271.005h-182v-30c11.423,0,173.149,0,182,0V271.005z M422.002,211.005h-392v-30c10.708,0,380.898,0,392,0V211.005z    M482.002,151.005h-242v-45c0-8.271,6.729-15,15-15h212c8.271,0,15,6.729,15,15V151.005z"/>
  </IconWrapperFilled>
)

export const HistoryIcon = props => (
  <IconWrapperFilled {...props}>
    <path transform="scale(0.35, 0.35) translate(20, 20)" d="M153.712,375.691l-24,21.248c7.642,8.598,15.944,16.585,24.832,23.888l20.288-24.8
				C167.265,389.818,160.203,383.018,153.712,375.691z"/>
    <path transform="scale(0.35, 0.35) translate(20, 20)" d="M122.176,326.187l-29.408,12.624c4.547,10.596,9.946,20.805,16.144,30.528l26.992-17.152
				C130.64,343.901,126.049,335.207,122.176,326.187z"/>
    <path transform="scale(0.35, 0.35) translate(20, 20)" d="M399.595,66.763c-32.9-19.075-70.253-29.126-108.283-29.136C183.147,37.801,91.764,117.904,77.424,225.115l-54.8-54.8
				L0,192.939l91.312,91.312l91.312-91.312L160,170.315l-49.488,49.424c18.803-99.758,114.916-165.384,214.674-146.581
				S490.57,188.074,471.767,287.831S356.851,453.216,257.093,434.412c-20.449-3.854-40.095-11.153-58.101-21.586l-16.08,27.664
				c103.202,59.835,235.37,24.679,295.205-78.523C537.953,258.766,502.797,126.598,399.595,66.763z"/>
    <polygon transform="scale(0.35, 0.35) translate(20, 20)" points="267.312,109.627 267.312,285.627 337.712,338.427 356.912,312.827 299.312,269.627 299.312,109.627"/>
  </IconWrapperFilled>
)

