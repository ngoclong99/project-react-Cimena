import React from 'react'
import PropTypes from 'prop-types'
import { sortBy } from 'lodash'

ListBookingSeat.propTypes = {
  bookingSeat: PropTypes.array
}

function ListBookingSeat(props) {
  const { bookingSeat } = props
  const sortBookingSeat = sortBy(bookingSeat, ['stt'])

  return (
    <>
      <ul className="seat flex-1">
        <li className="font-bold text-base">Ghế</li>
        {sortBookingSeat?.map((item) => (
          <li key={item.maGhe} className="py-1 text-base ">
            {item.tenGhe}
          </li>
        ))}
      </ul>
      <ul className="monney flex-1">
        <li className="font-bold text-base">Giá Vé</li>
        {sortBookingSeat?.map((item) => (
          <li key={item.maGhe} className="py-1 text-base">
            {item.giaVe}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListBookingSeat
