import { Tabs } from 'antd'
import React, { Fragment, useEffect, useState } from 'react'
import { rapAPI } from '../../../api/rapAPI'
import Rap from './Rap'

const { TabPane } = Tabs

HomeMenu.propTypes = {}

function HomeMenu(props) {
  const [tab, setTab] = useState({ tabPosition: 'left' })
  const { tabPosition } = tab
  const [listRap, setListRap] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const { content } = await rapAPI.getInfoPhimByRap()
        setListRap(content)
      } catch (error) {}
    })()
    return () => {}
  }, [])

  return (
    <Tabs tabPosition={tabPosition} className="container mx-auto">
      {listRap.map((raps) => (
        <TabPane
          tab={<img className="rounded-full" src={raps.logo} width={50} alt={raps.tenHeThongRap} />}
          key={raps.maHeThongRap}
        >
          <Rap raps={raps} />
        </TabPane>
      ))}
    </Tabs>
  )
}

export default HomeMenu
