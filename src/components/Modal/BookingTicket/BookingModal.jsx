import Modal from 'antd/lib/modal/Modal'
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setHeThongRap, setVisible } from '../../../redux/reducers/bookingSlice'
import ButtonDrawBorder from '../../Button/ButtonDrawBorder'
import '../styles.scss'
import BookingRap from './BookingRap'

function BookingModal(props) {
  const bookingModal = useSelector((state) => state.bookingSlice)
  const { heThongRapChieu, heThongRap, visibleModal } = bookingModal
  const dispatch = useDispatch()

  const handleOnChange = (id) => {
    dispatch(setHeThongRap(id))
  }

  return (
    <Fragment>
      <Modal
        visible={visibleModal}
        onCancel={() => dispatch(setVisible(false))}
        width={'80%'}
        footer={false}
        className="modal-star"
      >
        <div className=" bg-black border-2 p-4">
          <div className="flex flex-wrap">
            {heThongRapChieu?.map((item) => (
              <ButtonDrawBorder
                key={item.tenHeThongRap}
                text={item.tenHeThongRap}
                textStyle={`px-4 py-3 uppercase font-bold cursor-pointer ${
                  heThongRap.maHeThongRap === item.maHeThongRap
                    ? 'text-black bg-white'
                    : 'text-white'
                }`}
                styleBorder="btn-6 mr-3"
                onChangeButton={handleOnChange}
                maHeThongRap={item.maHeThongRap}
              />
            ))}
          </div>
          <div className="">
            <BookingRap />
          </div>
        </div>
      </Modal>
    </Fragment>
  )
}

export default BookingModal
