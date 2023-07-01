import React from 'react';

const Spinner=(props)=>{
    return (
      <div className='text-center'>
        <span className={`fs-3 text-${props.mode==="Dark"?"light":"black"}`}>Loading top headlines for <span className={`text-primary`}>{props.category} news.......</span></span>
      </div>
    )
}

export default Spinner
