import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { signIn } from './../../../redux/reducers/userSlice'
import InputField from './../../Input/InputField'
import PasswordField from './../../Input/PasswordField'

Login.propTypes = {
  handleClickChangeForm: PropTypes.func
}

const schema = yup.object().shape({
  taiKhoan: yup.string().required('Please enter your user name'),
  matKhau: yup.string().required('Please enter your password')
})

function Login(props) {
  const { handleClickChangeForm } = props
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const form = useForm({
    defaultValues: {
      taiKhoan: '',
      matKhau: ''
    },
    resolver: yupResolver(schema)
  })

  const handleClickSignIn = () => {
    if (handleClickChangeForm) handleClickChangeForm(false)
  }

  const onSubmit = (data) => {
    dispatch(signIn(data))
    navigation(-1)
  }

  return (
    <div className="flex flex-col justify-center my-auto px-8 md:px-24 lg:px-32">
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col pt-3 md:pt-8">
        <InputField name="taiKhoan" label="Username" form={form} typeInput="text" />
        <PasswordField name="matKhau" label="Password" form={form} />
        <input
          type="submit"
          value="Log In"
          className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
        />
      </form>
      <div className="text-center pt-12 pb-12">
        <p>
          Don't have an account?
          <span
            className=" pl-2 underline font-semibold cursor-pointer"
            onClick={() => handleClickSignIn()}
          >
            Register here.
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
