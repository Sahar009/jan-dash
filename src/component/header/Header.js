import React,{useState} from 'react'
import Loader from '../loader/Loader'
import { shortenText } from '../../utils/utility'



const Header = () => {


 
const [loading, setLoading] = useState(false)

// const handleLoad = () =>{
//   //post request
//   fetch('')
//   .then(() =>{
//     setLoading(true)

//   })
//   .then(() =>{

//     setLoading(false)
//   })
  
//   console.log('clicked');

// }
  
  return (
    <div className="--pad header">
    <div className="--flex-between">
      {loading ? <Loader/> : null}
      <h3>
        <span className="--fw-thin">Welcome, </span>
        <span className="--color-danger">user</span>
      </h3>
      <button className="--btn --btn-danger">
        Logout
      </button>
    </div>
    <hr />
  </div>
  )
}

export default Header