import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { formatDate } from '../../constant/common'
import moment from 'moment'
import PaymentInfo from './components/PaymentInfo'

Payment.propTypes = {
  ticketSlice: PropTypes.object,
  total: PropTypes.string,
  handleSubmit: PropTypes.func
}

function Payment(props) {
  const {
    ticketSlice: { info, listSeat, bookingSeat },
    total,
    handleSubmit
  } = props
  const dispatch = useDispatch()
  function getSeatNumber() {
    const seatNumber = []
    bookingSeat?.map((i) => {
      return seatNumber.push(i.stt, ' ')
    })
    return seatNumber
  }

  return (
    <Fragment>
      <div className="grid grid-cols-12">
        <div className="col-span-8 flex flex-wrap">
          <div className="w-1/3">
            <img src={info.hinhAnh} alt="" className="w-full h-auto object-cover pr-4" />
          </div>
          <div className="flex-1 ">
            <h2 className="text-white font-bold">{info.tenPhim}</h2>
            <p>
              {formatDate(info.ngayChieu, 'DD/MM/yyyy')} - <span>{info.gioChieu}</span>
            </p>
            <p>{info.tenCumRap}</p>
            <p>{info.tenRap}</p>
            <p>
              Seat: <strong className="word-spacing">{getSeatNumber()}</strong>
            </p>
            <p className="font-bold text-lg text-red-500">Total: {total}</p>
          </div>
          <PaymentInfo />
        </div>
        <div className="col-span-4">4</div>
      </div>
    </Fragment>
  )
}

export default Payment
