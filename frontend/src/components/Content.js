import React from 'react'
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Home from '../views/Home';

function Content() {
  return (
    <main className="flex-auto">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </main>
  )
}

export default Content
