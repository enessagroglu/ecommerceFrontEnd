// app/layout.js

import React from 'react'

import "./globals.css"

import NavbarCustom from './components/navbar/NavbarCustom'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="global-katman">
      
      
      <body>
        
        <NavbarCustom />
          {children}
        
      </body>
    </html>
  )
}
