import moment from 'moment'

const formatDate = (time, format) => {
  return moment(time).format(format)
}

const checkSeat = (seat, bookingSeat) => {
  let result = ''
  let index = bookingSeat.findIndex((item) => item.maGhe === seat.maGhe)

  if (index >= 0 && seat.daDat === false) result = 'text-black bg-white'
  else if (seat.loaiGhe === 'Thuong' && seat.daDat === false) result = 'text-white  bg-green-500'
  else if (seat.loaiGhe === 'Vip' && seat.daDat === false) result = 'text-white bg-red-500'
  else if (seat.daDat === true) result = 'text-white bg-gray-500'

  return result
}

export { formatDate, checkSeat }
