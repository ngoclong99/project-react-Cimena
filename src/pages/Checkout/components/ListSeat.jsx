import React from 'react'
import PropTypes from 'prop-types'
import { setSeat } from '../../../redux/reducers/ticketSlice'
import { useDispatch } from 'react-redux'
import { checkSeat } from '../../../constant/common'

ListSeat.propTypes = {
  bookingSeat: PropTypes.array,
  listSeat: PropTypes.array
}

function ListSeat(props) {
  const { bookingSeat, listSeat } = props
  const dispatch = useDispatch()

  const handleSetSeat = (seat) => {
    dispatch(setSeat(seat))
  }

  return (
    <div className="list-seart">
      {listSeat.map((seat, index) => (
        <button
          key={index}
          disabled={seat.daDat}
          className={`seat-location ${checkSeat(seat, bookingSeat)}`}
          onClick={() => handleSetSeat(seat)}
        >
          {seat.tenGhe}
        </button>
      ))}
    </div>
  )
}

export default ListSeat
