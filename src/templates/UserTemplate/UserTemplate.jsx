import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import BgStart from '../../components/BgStart/BgStart'
import { Outlet } from 'react-router-dom'
import Header from './../HomeTemplate/Layout/Header/Header'

UserTemplate.propTypes = {}

function UserTemplate(props) {
  return (
    <Fragment>
      <BgStart />
      <Header />
      <Outlet />
    </Fragment>
  )
}

export default UserTemplate
