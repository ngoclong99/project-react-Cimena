import React, { useState } from 'react'
import './styles.scss'
import { Steps, Button, message } from 'antd'
import Reservation from './Reservation'
import Payment from './Payment'
import PaymentHistory from './PaymentHistory'
import { UserOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { totalMonneySelector } from './checkOutSelecter'

const { Step } = Steps

Checkout.propTypes = {}

function Checkout(props) {
  const [current, setCurrent] = useState(0)
  const total = useSelector(totalMonneySelector)
  const ticketSlice = useSelector((state) => state.ticketSlice)

  const alert = () => {
    message.success('Processing complete!')
  }
  const handleCurrent = (value) => {
    setCurrent(value)
  }
  const handleSubmit = (data) => {
    handleCurrent(current + 1)
  }
  const steps = [
    {
      id: 0,
      title: 'Đặt Chỗ',
      content: <Reservation ticketSlice={ticketSlice} total={total} handleSubmit={handleSubmit} />
    },
    {
      id: 1,
      title: 'Thanh Toán',
      content: <Payment ticketSlice={ticketSlice} total={total} handleSubmit={handleSubmit} />
    },
    {
      id: 2,
      title: 'Kết Quả',
      content: <PaymentHistory />
    }
  ]

  return (
    <div className="container px-6 mx-auto pd-h-header">
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} onClick={() => handleCurrent(item.id)} />
        ))}
      </Steps>
      <div className="steps-content pt-5">{steps[current].content}</div>
    </div>
  )
}

export default Checkout
