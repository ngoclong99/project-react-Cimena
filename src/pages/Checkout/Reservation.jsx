import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { booksTicket, getListSeat } from '../../redux/reducers/ticketSlice'
import { totalMonneySelector } from './checkOutSelecter'
import ListBookingSeat from './components/ListBookingSeat'
import ListRuler from './components/ListRuler'
import ListSeat from './components/ListSeat'
import './styles.scss'
import PropTypes from 'prop-types'

Reservation.propTypes = {
  ticketSlice: PropTypes.object,
  total: PropTypes.string,
  handleSubmit: PropTypes.func
}

function Reservation(props) {
  const {
    ticketSlice: { info, listSeat, bookingSeat },
    total,
    handleSubmit
  } = props
  const { MaLichChieu } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      try {
        await dispatch(getListSeat(MaLichChieu))
      } catch (error) {
        console.log(error)
      }
    })()
    return () => {}
  }, [MaLichChieu])

  const handleSubmitSeat = async () => {
    const newData = await bookingSeat.map((a) => ({ maGhe: a.maGhe, giaVe: a.giaVe }))
    dispatch(
      booksTicket({
        maLichChieu: info.maLichChieu,
        danhSachVe: newData
      })
    )
    if (handleSubmit) handleSubmit()
  }

  return (
    <Fragment>
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className="screen-booking w-4/5"></div>
          <ListSeat bookingSeat={bookingSeat} listSeat={listSeat} />
        </div>
        <div className="col-span-4 ml-3">
          <div className="text-center under-text font-bold text-3xl">{total}</div>
          <div className="under-text ">
            <p className="font-semibold text-base">{info.tenPhim}</p>
            <p>Địa chỉ: {info.diaChi}</p>
            <p>
              Nơi chiếu: {info.tenCumRap} - {info.tenRap}
            </p>
            <p>
              Ngày chiếu: {info.ngayChieu} - {info.gioChieu}
            </p>
          </div>
          <div className="scroll-white text-center under-text flex max-h-[200px] overflow-auto">
            <ListBookingSeat bookingSeat={bookingSeat} />
          </div>
          <div className="text-center under-text">
            <ListRuler />
          </div>
          <button
            className="w-full bg-green-500 hover:bg-opacity-50 py-3 mt-3 uppercase font-bold"
            onClick={handleSubmitSeat}
          >
            đặt vé
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Reservation
