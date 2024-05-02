import React from 'react'
import './style_file.css'
import {Link} from "react-router-dom"
export default function File(props) {
    const {name,email,message,cv,filename}=props
  return (
    <div className='file'>
      <p>Name:{name}</p>
      <p>Email:{email}</p>
      <p>phone:{message}</p>
     
      <p>File:<button><Link to={cv} style={{color:"black",textDecoration:"none"}}> {filename}</Link></button></p>

    </div>
  )
}
