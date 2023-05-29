import React from 'react';
// import loading from './loading_gif.gif';

const Spinner=(props)=>{
    return (
      <h3 className={`text-center text-${props.mode==='Dark'?'white':'black'}`}>
        {/* <img src={loading} alt="" /> */}
        Loading ... Top Headline related {props.category}
      </h3>
    )
}

export default Spinner
