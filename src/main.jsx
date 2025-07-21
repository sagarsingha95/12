import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import StarRating from '../starRating'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    
  </StrictMode>,
)


// {/* <StarRating maxRating={5} messages ={["terrible","bad","Average","good","Amazing"]}/>
//     <StarRating maxRating={5} color='red'/> */}