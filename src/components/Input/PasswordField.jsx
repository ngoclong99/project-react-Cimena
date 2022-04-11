import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { Controller } from 'react-hook-form'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
PasswordField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  form: PropTypes.object
}

function PasswordField(props) {
  const { name, label, form } = props
  const {
    control,
    formState: { errors }
  } = form
  const hasError = !!errors[name]
  const [showPassword, setShowPassword] = useState(false)
  const handleChangePassword = (value) => {
    setShowPassword(value)
  }
  return (
    <Controller
      render={({ field }) => (
        <div className="form__group field" {...field}>
          <input
            type={showPassword ? 'text' : 'password'}
            className={`${hasError ? 'form__field errors' : 'form__field'}`}
            id={name}
            placeholder={name}
          />
          {showPassword ? (
            <EyeInvisibleOutlined
              className={`${hasError ? 'eye-icon errors' : 'eye-icon'}`}
              onClick={() => handleChangePassword(false)}
            />
          ) : (
            <EyeOutlined
              className={`${hasError ? 'eye-icon errors' : 'eye-icon'}`}
              onClick={() => handleChangePassword(true)}
            />
          )}
          <label htmlFor={name} className={`${hasError ? 'form__label errors' : 'form__label'}`}>
            {label}
          </label>
          <p className="form_error">{errors[name]?.message}</p>
        </div>
      )}
      name={name}
      control={control}
    />
  )
}

export default PasswordField
