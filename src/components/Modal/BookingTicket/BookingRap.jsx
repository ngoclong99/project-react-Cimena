import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import bookingSlice from './../../../redux/reducers/bookingSlice'
import { useSelector } from 'react-redux'
import TheTicket from './TheTicket'

BookingRap.propTypes = {}

const { TabPane } = Tabs

function BookingRap(props) {
  const booking = useSelector((state) => state.bookingSlice)
  const { heThongRap } = booking

  function callback(key) {
    console.log(heThongRap)
  }

  return (
    <Tabs defaultActiveKey="1" onChange={callback} className="text-white">
      {heThongRap?.cumRapChieu?.map((item) => (
        <TabPane tab={item.tenCumRap} key={item.maCumRap}>
          <TheTicket ticket={item} />
        </TabPane>
      ))}
    </Tabs>
  )
}

export default BookingRap
