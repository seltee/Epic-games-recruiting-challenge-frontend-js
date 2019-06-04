import React from 'react'
import styled from 'styled-components'
import { media } from './media';

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ColumnsWrapper = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`

const Column = styled.div`
  width: 160px;
  margin: 0 10px;
  height: ${p => p.height ? p.height : 0}%;
  color: ${p => p.theme.lightGreyColor};
  background-color: ${p => p.theme.commonColor};
  border: 2px solid ${p => p.theme.primaryColor};
  border-top-left-radius: 20px 20px;
  border-top-right-radius: 20px 20px;
  border-bottom: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 17px;
  ${media.tablet`
    font-size: 12px;
  `}  
`

const BottomTitles = styled.div`
  width: 100%;
  height: 38px;
  border-top: 2px solid ${p => p.theme.primaryColor};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Title = styled.div`
  font-size: 17px;
  color: ${p => p.theme.lightGreyColor};
  width: 160px;
  margin-top: 10px;
  text-align: center;
  ${media.tablet`
    font-size: 12px;
  `}  
`

export const EpicChart = ({
                            data,
                            keyValue,
                            titleValue,
                            tooltip
}) => {
  if (data) {
    const topValue = data.reduce((val, obj) => (obj[keyValue] > val ? obj[keyValue] : val), 0);
    return <ChartWrapper>
      <ColumnsWrapper>
        {
          data.map((el) =>
            <Column
              key={el[titleValue]}
              height={el[keyValue] / topValue * 100}
            >{tooltip(el)}</Column>
          )
        }
      </ColumnsWrapper>
      <BottomTitles>
        {
          data.map((el) => <Title key={el[titleValue]}>{el[titleValue]}</Title>)
        }
      </BottomTitles>
    </ChartWrapper>;
  }
  return null;
}
