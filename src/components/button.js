import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assets/add.svg'

const Addicon = () => {
  return (
    <div>
        <NavLink className='floating-button' to={`/notes/new` }>
        <AddIcon/>
        </NavLink>
    </div>
  )
}

export default Addicon