import React from 'react'
import Toggle from './Toggle'

export default function SideBar(props) {

    let toggle = props.boxes.map(box => {
        return <Toggle
            handelToggleBtn={props.handelToggle}
            activeBoxes={props.activeBoxes}
         box={box} />
    })


  return (
    
        <aside>
            {toggle}
        </aside>

  )
}
