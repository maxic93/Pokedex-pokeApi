
import { useState } from 'react';
import './App.css';
import Form from './component/Form';
import ShowDates from './component/ShowDates';

function App() {
  
  const [pokemon, setPokemon] = useState("")
  
  return (
    <div className="App">
      <div className='img_container'>
      <img alt="imgfondo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png'/>
      </div>
      
      <Form setPokemon={setPokemon}/> 
      <ShowDates pokemon={pokemon}/>
    </div>
  );
}

export default App;
