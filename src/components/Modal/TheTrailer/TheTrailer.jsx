import { Modal } from 'antd'
import React, { Fragment, useState } from 'react'
import YouTubePlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { setVisibleTrailer } from '../../../redux/reducers/trailerSlice'

TheTrailer.propTypes = {}

function TheTrailer(props) {
  const dispatch = useDispatch()
  const trailerSlice = useSelector((state) => state.trailerSlice)
  const { loading, visibleModal, trailer } = trailerSlice

  const handleCancel = () => {
    dispatch(setVisibleTrailer(false))
  }

  return (
    <div
      className={`modal fixed inset-0 z-20 ${
        !visibleModal ? 'hidden bg-black bg-opacity-0' : 'bg-black bg-opacity-80 block'
      }`}
      onClick={() => handleCancel()}
    >
      <div className="modal-dialog relative w-full h-full ">
        <div className="modal-content w-[500px] m-auto mt-[10%]">
          <YouTubePlayer url={trailer} controls={true} playing={visibleModal} width="100%" />
        </div>
      </div>
    </div>
  )
}

export default TheTrailer
