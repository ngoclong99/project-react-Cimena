import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Register from '../../components/User/Register/Register'
import Login from '../../components/User/Login/Login'
import './styles.scss'
import imgLogin from '../../assets/login.png'

UserLogin.propTypes = {}

function UserLogin(props) {
  const [login, setLogin] = useState(true)

  const handleClickChangeForm = (value) => {
    setLogin(value)
  }

  return (
    <div className="w-full h-screen">
      <div className="relative w-3/4 md:w-[60%] xl:w-[55%] h-full mx-auto">
        <p className="text-center text-2xl font-extrabold pt-[30%] md:pt-[18%] xl:pt-[17%]">
          {login ? 'SIGN IN' : 'SIGN UP'}
        </p>
        <div className="w-full flex flex-col absolute img-signin">
          {login ? (
            <Login handleClickChangeForm={handleClickChangeForm} />
          ) : (
            <Register handleClickChangeForm={handleClickChangeForm} />
          )}
        </div>
        {/* <div className="w-full flex flex-col absolute">
          <Register handleClickChangeForm={handleClickChangeForm} />
        </div> */}
      </div>
    </div>
  )
}

export default UserLogin
