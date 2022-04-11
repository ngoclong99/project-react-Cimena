import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

Header.propTypes = {}

function Header(props) {
  return (
    <header className="bg-black bg-opacity-50 text-white fixed w-full z-10 ">
      <div className="container px-6 py-0 flex justify-between mx-auto h-full">
        <a href="/" className="flex items-center ">
          <img src={require('../../../../assets/icon-web.png')} alt="icon-web" className="h-full" />
        </a>
        <ul className="items-stretch hidden space-x-3 md:flex ">
          <li className="flex overflow-hidden">
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive
                  ? ' text-under-animation-active text-blue-400 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-under-animation'
                  : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-under-animation'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex  overflow-hidden">
            <NavLink
              to={'/news'}
              className={({ isActive }) =>
                isActive
                  ? 'text-under-animation:focus::after text-blue-400 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-under-animation'
                  : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-under-animation'
              }
            >
              News
            </NavLink>
          </li>
          <li className="flex  overflow-hidden">
            <NavLink
              to={'/contact'}
              className={({ isActive }) =>
                isActive
                  ? 'text-under-animation:focus::after text-blue-400 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-under-animation'
                  : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-under-animation'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <NavLink to={'/login'} className="self-center px-8 py-3 rounded">
            Sign up
          </NavLink>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-coolGray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
