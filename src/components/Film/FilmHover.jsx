import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import { PlayCircleOutlined, PlaySquareOutlined } from '@ant-design/icons/lib/icons'
import ButtonEffectsColor from '../Button/ButtonEffectsColor'
import Movie from './Movie'
FilmHover.propTypes = {
  film: PropTypes.object
}

function FilmHover({ film = {} }) {
  return (
    <div className="flip-card mt-7 ">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={film.hinhAnh}
            alt="Avatar"
            className="w-full h-full"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = 'https://picsum.photos/300/300'
            }}
          />
        </div>
        <div className="flip-card-back ">
          <Movie movie={film} />
        </div>
      </div>
    </div>
  )
}

export default FilmHover
