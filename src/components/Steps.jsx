import React from 'react'
import './steps.css'

export default function Steps({ value, state}) {
 return (
    <div className={`step-no state-${state}`}>{value}</div>
  )
}
