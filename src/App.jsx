//libraries
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'


//components
import './App.css'
import AllRoutes from './Allroutes/AllRoutes'

function App() {

  return (
    <>
      <ChakraProvider>
        <AllRoutes />
      </ChakraProvider>
    </>
  )
}


export default App
