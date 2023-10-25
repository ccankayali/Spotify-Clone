import React from 'react'
import logo from '../img/logo.svg'
import "../style.css";
import Menu from './Sidebar/Menu'

function Sidebar() {
  return (
    <aside className="w-60 py-2 pt-1">
      <a className="mb-7">
        <img src={logo} alt="logo" className="w-30 px-5" />
      </a>
      <Menu />
    </aside>
    )
}

export default Sidebar