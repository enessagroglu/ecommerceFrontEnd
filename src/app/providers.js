// app/providers.js

import React from 'react'
import { HeroUIProvider } from '@heroui/react'

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}
