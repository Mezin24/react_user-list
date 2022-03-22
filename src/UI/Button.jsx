import React from 'react'
import PropTypes from 'prop-types'

function Button({children, type, variation, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${variation}`}>{children}</button>
  )
}

Button.defaultProps = {
  type: 'button',
  variation: 'primary',
  isDisabled: false,
}

Button.propTypes = {
  type: PropTypes.string,
  variation: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Button