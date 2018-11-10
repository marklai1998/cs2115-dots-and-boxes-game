import React from 'react'

import './index.css'

export const CurrentColor = React.memo(({ current }) => (
  <div className={`current-color ${current}`} />
))
