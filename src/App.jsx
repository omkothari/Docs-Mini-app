import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  return ( 
    <main className='h-screen w-full relative overflow-hidden'>
    <Background/>
    <Foreground/>
    </main>
  )
}

export default App