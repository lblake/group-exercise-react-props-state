import './App.css';
import { useState } from 'react';
import ChuckCard from './components/chuck_card';
import ChuckInfo from './components/chuck_info';
import ChuckJokes from './components/chuck_joke';
import Joke from './joke';
import {chuckJokes} from './joke-data'


function App() {
  const [chuckGreeting, setChuckGreeting] = useState<string>(
    'I am Chuck Norris!!!'
  );
  const [whalesSaved, setWhalesSaved] = useState<number>(700);
  const [roundHouseKicks, setRoundHouseKicks] = useState<number>(300000);
  const [jokes, setJokes] = useState<Array<Joke>>(chuckJokes);

  return (
    <div className='App'>
      <h1>React props and state</h1>
      <ChuckCard chuckGreeting={chuckGreeting} />

      <h2>Chuck Info: </h2>
      <ChuckInfo whalesSaved={whalesSaved} roundHouseKicks={roundHouseKicks} />

      <h2>Jokes:</h2>
      {jokes.map((joke) => (
        <ChuckJokes key={joke.id} joke={joke.joke} />
      ))}
    </div>
  );
}

export default App;
