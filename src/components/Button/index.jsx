import React from 'react'
import PropTypes from 'prop-types'

import { ButtonComponent } from './style'

function Button({
  buttonText,
  onClick,
  backgroundColor,
  color,
  margin,
  hover,
  additionalStyle,
  iconClass,
}) {
  return (
    <ButtonComponent
      color={color}
      onClick={onClick}
      backgroundColor={backgroundColor}
      margin={margin}
      hover={hover}
      additionalStyle={additionalStyle}
    >
      {iconClass ? <i className={iconClass} /> : buttonText}
    </ButtonComponent>
  )
}

Button.defaultProps = {
  iconClass: '',
  backgroundColor: '#ef9a9a',
  additionalStyle: {},
  color: '#fff',
  margin: '0',
  hover: {
    backgroundColor: '#fff',
    color: '#ef9a9a',
  },
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  iconClass: PropTypes.string,
  margin: PropTypes.string,
  additionalStyle: PropTypes.shape({}),
  hover: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
}

export default Button
