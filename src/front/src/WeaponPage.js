import React, { useEffect, useState } from 'react'
import request from 'superagent'
import { withTheme } from 'styled-components'
import { EpicChart, media, Widget } from 'common/ui'
import styled from 'styled-components'

const WeaponWrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  justify-content: space-around;
  flex-direction: column;
  height: 700px;
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

const Weapon = () => {
  const [data, setData] = useState(null);
  const goodNames = {
    'assault_rifle': 'Assault Rifle',
    'bolt_action_rifle': 'Bolt Action Rifle',
    'pistol': 'Pistol',
    'shotgun': 'Shotgun',
    'submachine_gun': 'Submachine Gun'
  };

  useEffect(() => {
    request
      .get('/api/weapons')
      .then(({ body: data }) => setData(data.map((el) => Object.assign(
        {},
        el,
        { 'weapon': goodNames[el.weapon] ? goodNames[el.weapon] : el.weapon }
      ))))
  }, []);

  return (
    <WeaponWrapper>
      <Widget
        header="Weapon kills visualization"
        padding="15px"
        status='SUCCESS'
        responsiveWidth
      >
        <EpicChart
          data={data}
          keyValue={'kills'}
          titleValue={'weapon'}
          tooltip={(el) => `kills: ${goodNames[el.kills] ? goodNames[el.kills] : el.kills}`}
        />
      </Widget>
    </WeaponWrapper>
  )
}

export const WeaponPage = withTheme(Weapon)
