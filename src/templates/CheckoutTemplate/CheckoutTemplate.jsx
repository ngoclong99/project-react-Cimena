/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, useNavigate } from 'react-router-dom'
import { USER_LOGIN } from '../../util/setting/config'
import { useEffect } from 'react'
import BgStart from '../../components/BgStart/BgStart'
import Header from './../HomeTemplate/Layout/Header/Header'
import Footer from './../HomeTemplate/Layout/Footer/Footer'

CheckoutTemplate.propTypes = {}

function CheckoutTemplate(props) {
  const navigate = useNavigate()
  const login = localStorage.getItem(USER_LOGIN)

  useEffect(() => {
    if (!login) {
      return navigate('/login')
    }
  }, [login])

  return (
    <div>
      <BgStart />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default CheckoutTemplate
