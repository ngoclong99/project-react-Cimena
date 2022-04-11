import { Tabs } from 'antd'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import RapCluster from './RapCluster'
import RapByMovie from './RapByMovie'
const { TabPane } = Tabs

Rap.propTypes = {
  raps: PropTypes.object
}

function Rap({ raps = {} }) {
  const [tab, setTab] = useState({ tabPosition: 'left' })
  const { tabPosition } = tab

  return (
    <Tabs tabPosition={tabPosition} className="text-white max-h-[600px] ">
      {raps.lstCumRap?.map((rap, index) => (
        <TabPane tab={<RapCluster rap={rap} />} key={rap.maCumRap}>
          <RapByMovie movies={rap.danhSachPhim} />
        </TabPane>
      ))}
    </Tabs>
  )
}

export default Rap
