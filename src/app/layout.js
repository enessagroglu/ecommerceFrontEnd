// app/layout.js

import React from 'react'

import "./globals.css"

import NavbarCustom from './components/navbar/NavbarCustom'
import NavbarLinks from './components/navbar/NavbarLinks'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="global-katman">
      
      
      <body>
        
        <NavbarCustom />
        <div className='center'><NavbarLinks /></div>
        
          {children}
        
      </body>
    </html>
  )
}
