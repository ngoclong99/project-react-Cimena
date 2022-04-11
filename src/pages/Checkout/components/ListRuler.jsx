import React from 'react'
import PropTypes from 'prop-types'

ListRuler.propTypes = {}

const listStatus = [
  {
    color: 'bg-gray-500',
    text: 'đã đặt'
  },
  {
    color: 'bg-green-500',
    text: 'ghế thường'
  },
  {
    color: 'bg-red-500',
    text: 'ghế VIP'
  },
  {
    color: 'bg-white',
    text: 'bạn đặt'
  }
]

function ListRuler(props) {
  return (
    <ul>
      {listStatus.map((item, index) => (
        <li key={index} className="flex items-center mb-5 last:mb-0">
          <span className={`inline-block mr-5 w-[40px] h-[40px] ${item.color}`}></span>
          <span className="font-bold text-lg capitalize">{item.text}</span>
        </li>
      ))}
    </ul>
  )
}

export default ListRuler
