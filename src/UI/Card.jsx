import React from 'react'
import styles from './Card.module.css'

function Card({children, className}) {
  return (
    <div onClick={e => e.stopPropagation()} className={`${styles.card} ${className}`}>{children}</div>
  )
}

export default Card