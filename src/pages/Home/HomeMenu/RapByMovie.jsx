import PropTypes from 'prop-types'
import React from 'react'
import Movie from '../../../components/Film/Movie'
import './styles.scss'

RapByMovie.propTypes = {
  movies: PropTypes.array
}

function RapByMovie({ movies = [] }) {
  return (
    <div className=" grid grid-cols-12 gap-5 mr-[24px] max-h-[600px] scroll-hiden overflow-auto  ">
      {movies.map((movie) => (
        <div className="col-span-4 shadow-lg relative h-[250px] by-rap" key={movie.maPhim}>
          <Movie movie={movie} />
        </div>
      ))}
    </div>
  )
}

export default RapByMovie
