import React from 'react'
import logo from '../img/logo.svg'
import "../style.css";

function Sidebar() {
  return (
    <aside className="w-50 py-2 pt-1">
      <img src={logo} alt="logo" className="w-30" />
    </aside>
    )
}

export default Sidebar