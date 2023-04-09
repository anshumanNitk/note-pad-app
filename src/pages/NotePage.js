import React,{useEffect, useState} from "react"

import ListItem from "../components/listitem"

import Addicon from "../components/button"


const NotePage = () => {
    let [Notes,SetNotes]=useState([])

    useEffect(()=>{
        getNotes()},[]
    )

    let getNotes= async ()=>{
        let response=await fetch('/api/Notes/')
        let data = await response.json()
        console.log('data:',data)
        SetNotes(data)
    }
    return(
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Note</h2>
                <p className="notes-count">{Notes.length}</p>

            </div>


            <div className="notes-list">
                {Notes.map((note,index)=>(
                    <ListItem key={index} note={note}/>
                ))}
            </div>

            <Addicon />
            
        </div>
    );
}

export default NotePage;