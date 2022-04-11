import React, { Fragment, useEffect, useState } from 'react'
import Slider from 'react-slick'
import { phimAPI } from '../../../api/phimAPI'
import Film from '../../../components/Film/Film'
import './ListFilm.css'
import FilmHover from './../../../components/Film/FilmHover'
import ButtonDrawBorder from './../../../components/Button/ButtonDrawBorder'
ListFilm.propTypes = {}

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`slick-next ${className}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ></div>
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`slick-prev ${className}`}
      style={{ ...style, display: 'block', left: '-50px' }}
      onClick={onClick}
    ></div>
  )
}

function ListFilm(props) {
  const [listFilm, setListFilm] = useState([])
  const [dangChieu, setDangChieu] = useState(true)

  const settings = {
    className: 'center  variable-width',
    centerMode: true,
    infinite: true,
    centerPadding: '50px',
    speed: 500,
    rows: 1,
    variableWidth: true,
    slidesPerRow: 2,
    slidesToShow: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  useEffect(() => {
    ;(async () => {
      try {
        const { content } = await phimAPI.getListMovie()
        const newMovies = await content.filter((movies) => {
          return movies.dangChieu === dangChieu
        })
        setListFilm(newMovies)
      } catch (error) {}
    })()
    return () => {}
  }, [dangChieu])

  const handleOnClick = (statusMovie) => {
    setDangChieu(statusMovie)
  }
  const isActive = (status) => {
    if (dangChieu === status) {
      return 'bg-white text-black'
    }
  }

  const renderVideo = () => {
    return (
      <Slider {...settings}>
        {listFilm.map((film) => (
          <div className="width-item" key={film.tenPhim}>
            <FilmHover film={film} />
          </div>
        ))}
      </Slider>
    )
  }
  return (
    <Fragment>
      <section className="py-6 sm:py-12 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container p-6 mx-auto space-y-8 w-9/12 ">
          <ButtonDrawBorder
            text="đang chiếu"
            textStyle="px-4 py-3 uppercase font-bold cursor-pointer"
            styleBorder={`btn-2 mr-3 ${isActive(true)} `}
            onClick={handleOnClick}
            status="true"
          />
          <ButtonDrawBorder
            text="sắp chiếu"
            textStyle="px-4 py-3 uppercase font-bold cursor-pointer"
            styleBorder={`btn-2 ${isActive(false)}`}
            onClick={handleOnClick}
            status="false"
          />
          {renderVideo()}
        </div>
      </section>
    </Fragment>
  )
}

export default ListFilm
