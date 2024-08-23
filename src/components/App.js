import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import Body from './Body'
// import Todo from './Todo'
import Calculator from './Calculator'

const App = () => {
  return (
    <div>
        <Calculator/>
         
       
    </div>
  )
}

const appRouter = createBrowserRouter([{
  path: '/',
  element: <App/>
}])

 const root = ReactDOM.createRoot(document.getElementById('root'))
 root.render(<RouterProvider router={appRouter} />)

