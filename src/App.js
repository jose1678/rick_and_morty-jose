import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBAr from './components/Nav/NavBar';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';





function App () {

const [characters, setCharacters] = useState ([]);

const [access, setAccess] = useState(false);
const username = "riviroro@gmail.com";
const password="290702";
const navigate = useNavigate();

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
   !access && navigate('/');
}, [access]);


function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}

const onClose = id =>{
  setCharacters(characters.filter(char=> char.id !== id))
}

const location = useLocation();
  return (
    <div className='App' style={{ padding: '25px' }}>
      
      {location.pathname !== "/" && <NavBAr onSearch={onSearch}/>}
        <hr/>
      <Routes>
        <Route exact path='/' element={<Form login={login} />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/home' element={
           <Cards characters={characters} onClose = {onClose}/>}
           />
        <Route path='/detail/:detailId' element ={<Detail/>} />
      </Routes>
       </div>
  );
}

export default App
      
