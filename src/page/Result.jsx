import React from 'react'
import { useLocation } from 'react-router-dom';

const Result = () => {

  const { state } = useLocation();

  console.log(state)

  return (

    <>
       <div
        class="container-fluid d-flex justify-content-center align-items-center p-2 "
        style={{ backgroundColor: "#025464" }}
      >
        <h1 class="display-4 text-white">Online Examination</h1>
      </div>

      <div>{state.result}</div>
    </>
   
  )
}

export default Result