import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PersonalWebsite from "./app/page"
import './globals.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<PersonalWebsite />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </StrictMode>,
)
