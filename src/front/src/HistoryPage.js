import React, { useEffect, useState } from 'react'
import { withTheme } from 'styled-components'
import { Scrollbars, Widget } from 'common/ui'
import styled from 'styled-components'
import { SearchBar } from './SearchBar'
import { historyGet, historyObservable } from 'common/utils/history'

const HistoryWrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  justify-content: space-around;
  flex-direction: column;
  height: 700px;
  padding: 20px;
  overflow: hidden;
`

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`

const HistoryColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
`

const HistoryElement = styled.div`
  display: flex;
  color: ${p => p.theme.lightGreyColor};
  font-size: 17px;
  text-align: center;
  cursor: pointer;
  padding: 10px 20px;
`


const History = () => {
  const forceUpdate = useState()[1];

  useEffect(() => {
    const subscription = historyObservable.subscribe(forceUpdate);
    return () => subscription.unsubscribe();
  }, []);

  const setSearch = (sql) => {
    document.getElementById('sql-search').value = sql;
    document.getElementById('sql-search').focus();
  };

  return (
    <HistoryWrapper>
      <Widget
        header="SQL History"
        padding="15px"
        responsiveWidth
      >
        <Scrollbars>
          <HistoryColumn>
            <SearchBar />
            <HistoryList>
              {
                historyGet().map((el, i) =>
                  <HistoryElement
                    key={i}
                    onClick={() => setSearch(el)}
                  >{el}</HistoryElement>
                )
              }
            </HistoryList>
          </HistoryColumn>
        </Scrollbars>
      </Widget>
    </HistoryWrapper>
  )
}

export const HistoryPage = withTheme(History)
