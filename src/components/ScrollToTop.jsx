import React from 'react'
import PropTypes from 'prop-types'
import { CaretUpFilled } from '@ant-design/icons/lib/icons'

ScrollToTop.propTypes = {}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function ScrollToTop(props) {
  return (
    <div className="fixed text-white bottom-0 right-[3%] top-[80%]">
      <div
        className="text-center text-2xl uppercase font-bold cursor-pointer scrollToTop"
        onClick={scrollToTop}
      >
        <CaretUpFilled />
        <p>top</p>
      </div>
    </div>
  )
}

export default ScrollToTop
