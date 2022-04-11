import { PlayCircleOutlined } from '@ant-design/icons/lib/icons'
import PropTypes from 'prop-types'
import React, { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setVisible } from '../../redux/reducers/bookingSlice'
import ButtonEffectsColor from './../Button/ButtonEffectsColor'
import { getTickets } from './../../redux/reducers/bookingSlice'
import { setVisibleTrailer, setTrailer } from './../../redux/reducers/trailerSlice'

Movie.propTypes = {
  movie: PropTypes.object
}

function Movie(props) {
  const { movie } = props
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleOnClickAction = () => {
    navigate(`movie/${movie.maPhim}`)
  }

  const handleBooking = (id) => {
    dispatch(setVisible(true))
    dispatch(getTickets(id))
  }

  const handleOpenTrailer = () => {
    dispatch(setTrailer(movie.trailer))
    dispatch(setVisibleTrailer(true))
  }

  return (
    <div className="absolute inset-0 hover-bg show">
      <img alt="eggs" src={movie.hinhAnh} className="rounded-lg w-full h-full" />
      <p className="show-hover cursor-text absolute text-xl w-3/4 inline-block text-center line-clamp-2 clam font-semibold capitalize left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2">
        {movie.tenPhim}
      </p>
      <PlayCircleOutlined
        style={{ fontSize: '50px' }}
        className="btn-play show-hover absolute cursor-pointer left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-[1.2]	 transition-all	"
        onClick={() => handleOpenTrailer()}
      />
      <ButtonEffectsColor
        onClick={() => handleOnClickAction()}
        text="chi tiết"
        styleCSS="show-hover border-2 capitalize font-bold absolute bottom-3 left-2 py-3 w-1/3"
      />
      <ButtonEffectsColor
        onClick={() => handleBooking(movie.maPhim)}
        text="đặt vé"
        styleCSS="show-hover border-2 capitalize font-bold absolute bottom-3 right-2 py-3 w-1/3 "
      />
    </div>
  )
}

export default Movie
