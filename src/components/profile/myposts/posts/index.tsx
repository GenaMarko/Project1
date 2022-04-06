import React from 'react';
import './index.css';
import img3 from './../../../../Assets/image/ava.jpg'


const Posts = (props) => {
  return (
    <div>
      <div className='post'>
        <img src={img3} alt='sss' />
        {props.message}
      </div>
      <span>Like:{props.kol}</span>
    </div>
  );
}

export default Posts;