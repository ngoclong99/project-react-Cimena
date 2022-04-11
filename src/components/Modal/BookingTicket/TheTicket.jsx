import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../../../constant/common'
import { LoadingOutlined, RedoOutlined } from '@ant-design/icons/lib/icons'
import { useNavigate } from 'react-router-dom'

TheTicket.propTypes = {
  ticket: PropTypes.object
}

function TheTicket({ ticket = {} }) {
  const navigate = useNavigate()
  const { lichChieuPhim } = ticket
  const [loading, setLoading] = useState(false)

  const handleBookingTicket = (item) => {
    const user = localStorage.getItem('USER_LOGIN')
    if (user) {
      navigate(`/checkout/${item.maLichChieu}`)
    } else {
      navigate(`/login`)
    }
  }

  return (
    <ul className="grid grid-cols-12">
      {lichChieuPhim?.slice(0, 10).map((item, index) => (
        <li className="col-span-3 pb-2" key={index}>
          <p className="cursor-pointer inline-block" onClick={() => handleBookingTicket(item)}>
            {loading ? (
              <RedoOutlined style={{ color: 'black', fontSize: '20px' }} spin={true} />
            ) : (
              `${formatDate(item.ngayChieuGioChieu, 'hh:mm A')}`
            )}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default TheTicket
