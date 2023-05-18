import React from 'react'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
    const navigate = useNavigate();

  return (
    <>
       
        <div class="container-fluid border position-relative">
            <img src="/images/background-image.jpg" alt="bacl"  height="100vh"  style={{maxWidth:"100% ", height:"100vh" }}/>
            <button type="button" class="btn btn-primary position-absolute" style={{left:"15%" , bottom:"25%"}} onClick={()=>navigate("/question")}>Login</button>
        </div>
       
    </>
  )
}

export default HomePage