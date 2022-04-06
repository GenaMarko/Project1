import React from 'react';
import './index.css';
import img2 from './../../Assets/image/peizaj.png';
import Posts from './myposts/posts/index.tsx';


const Profile = () => {
  return (
    <div className=''>
      <img src={img2} alt='sss' />
      <div>Ava+description</div>
      <div>my posts<div><textarea></textarea><button>Add post</button><button>Remove</button></div></div>
      <Posts message='Отличная соц.сеть!' kol='11'/>
      <Posts message='Я обязательно сдам экзамены...' kol='8'/>

    </div>
  );
}

export default Profile;