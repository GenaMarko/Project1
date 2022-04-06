import React from 'react';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/index.tsx';
import Header from './components/header/index.tsx';
import Navbar from './components/navbar/index.tsx';
import Profile from './components/profile/index.tsx';



const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Routes>
        <Route  path='/profile' element={<Profile />}></Route>
        <Route  path='/dialogs' element={<Dialogs />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
//  {/* <div className='head'><p>Главная</p></div> */}
//  <div className='center'>
//  <img src='risunok.jpg'></img>
// </div>fg