import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

ButtonEffectsColor.propTypes = {
  text: PropTypes.string,
  styleCSS: PropTypes.string,
  onClick: PropTypes.func
}

function ButtonEffectsColor({ text = '', styleCSS = '', onClick = null }) {
  const handleOnclick = () => {
    if (onClick) onClick()
  }
  return (
    <button className={`glow-on-hover ${styleCSS}`} type="button" onClick={() => handleOnclick()}>
      {text}
    </button>
  )
}

export default ButtonEffectsColor
