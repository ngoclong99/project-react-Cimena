import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { Controller } from 'react-hook-form'

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  typeInput: PropTypes.string,
  form: PropTypes.object
}

function InputField(props) {
  const { name, label, form, typeInput } = props
  const {
    control,
    formState: { errors }
  } = form
  const hasError = !!errors[name]

  return (
    <Controller
      render={({ field }) => (
        <div className="form__group field" {...field}>
          <input
            type={typeInput}
            className={`${hasError ? 'form__field errors' : 'form__field'}`}
            id={name}
            placeholder={name}
          />
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

export default InputField
