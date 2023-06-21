import React from 'react'
import {RouterProvider} from "react-router-dom"
import {MainRouter} from "./Routes/Router"

const App = () => {
  return (
    <div>
      <RouterProvider router ={MainRouter} />
    </div>
  )
}

export default App