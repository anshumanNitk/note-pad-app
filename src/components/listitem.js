import React from 'react'
import { NavLink } from 'react-router-dom'

let getTitle = (note)=>{
  let title = note.body.split("\n")[0]
  if(title.length>45){  return title.slice(0, 45) + '......'}
  return title

}

let getTime = (note)=>{
  return new Date(note.updated).toLocaleDateString()
}


const ListItem = ({note}) => {
  return (
    <div className='notes-list-item'>
        <NavLink  className={({ isActive }) =>
      isActive ? "active nav-link" : "nav-link"
    } to={`/notes/${note.id}` } ><p>{getTitle(note)}</p></NavLink>
    <p><span>{getTime(note)}</span></p>
    </div>
  )
}

export default ListItem