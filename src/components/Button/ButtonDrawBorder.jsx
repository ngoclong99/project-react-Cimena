import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

ButtonDrawClose.propTypes = {
  status: PropTypes.string,
  maHeThongRap: PropTypes.string,
  text: PropTypes.string,
  textStyle: PropTypes.string,
  styleBorder: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onChangeButton: PropTypes.func
}

function ButtonDrawClose({
  text = '',
  styleBorder = '',
  textStyle = '',
  status = '',
  onClick = null,
  maHeThongRap = '',
  onChangeButton = null
}) {
  const handleOnClick = async (e) => {
    if (onClick) {
      const statusMovie = e.currentTarget.getAttribute('data-status') === 'true' ? true : false
      if (statusMovie != null && onClick) await onClick(statusMovie)
    } else {
      if (onChangeButton) {
        onChangeButton(maHeThongRap)
      }
    }
  }

  return (
    <div
      className={`draw-border ${styleBorder}`}
      data-status={status}
      onClick={(e) => handleOnClick(e)}
    >
      <span className={`text-draw ${textStyle}`}>{text}</span>
    </div>
  )
}

export default ButtonDrawClose
