import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import EventShowcase from './pages/EventShowCase'

const queryClient = new QueryClient()
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <EventShowcase />
    </QueryClientProvider>
  )
}

export default App
