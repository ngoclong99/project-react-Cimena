import React from 'react'
import PropTypes from 'prop-types'
import * as yup from 'yup'
import SelectOption from './../../../components/Input/SelectOption'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import moment from 'moment'
import { formatDate } from '../../../constant/common'

PaymentInfo.propTypes = {}

// const options = [
//   { value: '01', label: '01 - January' },
//   { value: '02', label: '02 - February' },
//   { value: '03', label: '03 - March' },
//   { value: '04', label: '04 - April' },
//   { value: '05', label: '05 - May' },
//   { value: '06', label: '06 - June' },
//   { value: '07', label: '07 - July' },
//   { value: '08', label: '08 - August' },
//   { value: '09', label: '09 - September' },
//   { value: '10', label: '10 - October' },
//   { value: '11', label: '11 - November' },
//   { value: '12', label: '12 - December' }
// ]

const schema = yup.object().shape({
  cardName: yup.string(),
  // .required('Please enter your name on card'),
  cardNumber: yup.number(),
  // .required('Please enter your card number'),
  dateDDMM: yup.date(),
  dateYYYY: yup.string(),
  code: yup.number('Please enter your number')
  // .min(3, 'Should be exactly 3 chars')
  // .max(3, 'Should be exactly 3 chars')
  // .required('Please enter your code')
})

function PaymentInfo(props) {
  const form = useForm({
    defaultValues: {
      cardName: '',
      cardNumber: 0,
      dateDDMM: moment(),
      dateYYYY: '',
      code: 0
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(formatDate(data.dateDDMM, 'MM'))
  }

  return (
    <div className="w-full mt-6 ">
      <p className="text-xl font-bold uppercase text-center border-t-2 py-3">thanh toán</p>
      <div className="flex">
        <label htmlFor="type1" className="flex items-center cursor-pointer mr-10">
          <input
            type="radio"
            className="form-radio h-5 w-5 "
            name="type"
            id="type1"
            defaultChecked
          />
          <img
            src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
            className="h-8 ml-3"
            alt=""
          />
        </label>
        <label htmlFor="type2" className="flex items-center cursor-pointer">
          <input type="radio" className="form-radio h-5 w-5 " name="type" id="type2" />
          <img
            src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
            className="h-8 ml-3"
            alt=""
          />
        </label>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col pt-3 md:pt-8">
        <SelectOption name="dateDDMM" label="Expiration date " form={form} />
        <input
          type="submit"
          value="thanh toán"
          className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
        />
      </form>
    </div>
  )
}

export default PaymentInfo
