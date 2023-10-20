import React from 'react'
import logo from '../img/logo.svg'

function Sidebar() {
  return (
    <aside className="pt-6">
      <a href="#">
        <img src={logo} alt=""/>
      </a>  
    </aside>
    )
}

export default Sidebar