import React from 'react'

import './index.css'

export const Box = React.memo(({ state }) => {
  return <div className={`box ${state}`} />
})
