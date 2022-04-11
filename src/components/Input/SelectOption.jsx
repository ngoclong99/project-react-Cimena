import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { Controller } from 'react-hook-form'
import { DatePicker, Select } from 'antd'
const { Option } = Select

SelectOption.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  form: PropTypes.object
}

function SelectOption(props) {
  const { name, label, form } = props
  const { control } = form

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Fragment>
          <label className="font-bold text-sm mb-2">{label}</label>
          <DatePicker
            className="text-white"
            dropdownClassName="myCustomPicker"
            format="MMMM - MM"
            picker="month"
            bordered={false}
            {...field}
          />
        </Fragment>
      )}
    />
  )
}

export default SelectOption
