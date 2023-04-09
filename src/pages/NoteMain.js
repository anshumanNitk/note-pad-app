import React, { useEffect,useState } from 'react'
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { useNavigate } from "react-router-dom";

const NoteMain = () => {
  const navigate = useNavigate();
  let params = useParams();
  let [note, setNote] = useState(null)

  useEffect(() => {
      getNote()
  }, [params.id])


  
  let getNote = async () => {
      if (params.id === 'new') return

      let response = await fetch(`/api/Notes/${params.id}/`)
      let data = await response.json()
      setNote(data)

  }

 let createNote = async ()=>{
    fetch('/api/Notes/create/', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
      },
      body:JSON.stringify(note)
    })
  }



  let updateNote = async ()=>{
    fetch(`/api/Notes/${params.id}/update/`,{
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(note)
    })
  }
  
  let deleteNote = async ()=>{
    fetch(`/api/Notes/${params.id}/delete/`, {
      method: 'DELETE',
      'headers': {
          'Content-Type': 'application/json',
      },
    })
    navigate('/')
  } 

  let handleChnage=(value)=>{
    setNote(note=>({...note, 'body': value}))
  }



  let clickHandle = () => {

    console.log('NOTE:', note)

    if (params.id !== 'new' && note.body === '') {
        deleteNote()
    } 
    else if (params.id !== 'new') {
        updateNote()
    } 
    else if (params.id === 'new' && note.body !== null) {
        createNote()
    }
    
    navigate('/')
}

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={clickHandle} />
        </h3>
        {params.id !== 'new' ? 
        (<button onClick={deleteNote}> delete</button>)
        :
        (<button onClick={clickHandle}>done</button>)}
      </div>
        <textarea onChange={(e)=>{handleChnage(e.target.value)}} className='notes-list' value={note?.body}></textarea>
      </div>
  )
}

export default NoteMain