import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { formatDate } from '../../constant/common'
import useMovieDetail from '../../hook/useMovieDetail'
import { setVisible } from '../../redux/reducers/bookingSlice'
import { setTrailer, setVisibleTrailer } from '../../redux/reducers/trailerSlice'
import ButtonEffectsColor from './../../components/Button/ButtonEffectsColor'
import { getTickets } from './../../redux/reducers/bookingSlice'

MovieDetail.propTypes = {}

function MovieDetail(props) {
  const { movieID } = useParams()
  const dispatch = useDispatch()

  let {
    movieContent,
    movieContent: { trailer },
    loadind
  } = useMovieDetail(Number(movieID))

  const handleOnClickTrailer = () => {
    dispatch(setVisibleTrailer(true))
    dispatch(setTrailer(trailer))
  }
  const handleOnClickBooking = () => {
    dispatch(setVisible(true))
    dispatch(getTickets(movieContent.maPhim))
  }

  return (
    <div className="container px-6 mx-auto">
      <div
        className="grid grid-cols-12 bg-img-full w-full h-full bg-img-full-before pt-[140px]"
        style={{
          backgroundImage: `url(${movieContent.hinhAnh})`
        }}
      >
        <div className="col-span-4 flex flex-col justify-start items-center z-10">
          <img
            src={movieContent.hinhAnh}
            alt="img"
            className="w-4/6 h-[350px] rounded-sm shadow-md shadow-black	mb-2"
          />
        </div>
        <div className="col-span-8 flex flex-col justify-start z-10">
          <p className="text-3xl capitalize font-black">{movieContent.tenPhim}</p>
          <p className="text-base capitalize font-normal my-4">
            khởi chiếu: {formatDate(movieContent.ngayKhoiChieu, 'DD/MM/YYYY - h:mm')}
          </p>
          <p className="text-base capitalize line-clamp-5 font-normal block w-3/4">
            {movieContent.moTa}
          </p>
          <div className="mt-8 flex ">
            <ButtonEffectsColor
              onClick={handleOnClickTrailer}
              text="watch trailer"
              styleCSS="border-2 font-bold capitalize py-4 w-[130px] rounded-xl  "
            />
            <ButtonEffectsColor
              onClick={handleOnClickBooking}
              text="đặt vé"
              styleCSS="border-2 font-bold capitalize py-4 w-[130px] rounded-xl  ml-10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
