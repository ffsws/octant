import React from 'react'
import _ from 'lodash'
import './styles.scss'

export default function ({ labels }) {
  return (
    <div className='table-labels'>
      {_.map(labels, (value, key) => (
        <div key={key} className='table-label'>
          {key}: {value}
        </div>
      ))}
    </div>
  )
}
