import React from 'react'
import PropTypes from 'prop-types'

Register.propTypes = {
  handleClickChangeForm: PropTypes.func
}

function Register(props) {
  const { handleClickChangeForm } = props

  const handleClickSignUp = () => {
    if (handleClickChangeForm) handleClickChangeForm(true)
  }

  return (
    <div class="flex flex-col justify-center my-auto px-8 md:px-24 lg:px-32">
      <form class="flex flex-col pt-3 md:pt-8">
        <div class="flex flex-col pt-4">
          <label for="name" class="text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Smith"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="flex flex-col pt-4">
          <label for="email" class="text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div class="flex flex-col pt-4">
          <label for="password" class="text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div class="flex flex-col pt-4">
          <label for="confirm-password" class="text-lg">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <input
          type="submit"
          value="Register"
          class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
        />
      </form>
      <div class="text-center pt-12 pb-12">
        <p>
          Already have an account?{' '}
          <span
            class="underline font-semibold pl-2 cursor-pointer"
            onClick={() => handleClickSignUp()}
          >
            Login here.
          </span>
        </p>
      </div>
    </div>
  )
}

export default Register
