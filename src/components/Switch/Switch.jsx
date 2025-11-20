import React from 'react'
import { SwitchLabel } from './SwitchStyles'

const Switch = ({ state, setState }) => {
  return (
    <SwitchLabel>
        <input type="checkbox" checked={state} onChange={setState} name="" id="" />
        <span></span>
    </SwitchLabel>
  )
}

export default Switch
