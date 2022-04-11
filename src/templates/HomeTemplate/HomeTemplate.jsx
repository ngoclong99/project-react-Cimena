import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import BgStart from './../../components/BgStart/BgStart'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import BookingModal from './../../components/Modal/BookingTicket/BookingModal'
import TheTrailer from '../../components/Modal/TheTrailer/TheTrailer'

HomeTemplate.propTypes = {}

function HomeTemplate(props) {
  return (
    <Fragment>
      <BgStart />
      <Header />
      <Outlet />
      <Footer />
      <BookingModal />
      <TheTrailer />
    </Fragment>
  )
}

export default HomeTemplate
