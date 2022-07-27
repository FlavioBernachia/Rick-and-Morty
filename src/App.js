import { useEffect, useState } from 'react';
import './App.css';
import Character from './components/cards/Character';
import Header from './components/header/Header';
import Pagination from './components/pagination/Pagination';


function App() {
  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacter(data.results)
        setInfo(data.info)
      })
      .catch(error => {
        console.log(error);
      })
  }
  const onPrevious = () =>{
    fetchCharacters(info.prev)
  }
  const onNext = () =>{
    fetchCharacters(info.next)
  }
  useEffect(() => {
    fetchCharacters(url);
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="container">
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      <Character character={character}/>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </div>
  );
}

export default App;
