import './App.css';
import { useState } from 'react';
import ChuckCard from './components/chuck_card';
import ChuckInfo from './components/chuck_info';
import ChuckJokes from './components/chuck_joke';
import Joke from './joke';
import { chuckJokes } from './joke-data';

function App() {
  const [chuckGreeting, setChuckGreeting] = useState<string>(
    'I am Chuck Norris!!!'
  );
  const [whalesSaved, setWhalesSaved] = useState<number>(700);
  const [roundHouseKicks, setRoundHouseKicks] = useState<number>(300000);
  const [jokes, setJokes] = useState<Array<Joke>>(chuckJokes);
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    event.preventDefault();
  };

  const filteredJokes = jokes.filter((joke) => joke.id === parseInt(value));

  return (
    <div className='App'>
      <h1>React props and state</h1>
      <ChuckCard chuckGreeting={chuckGreeting} />

      <h2>Chuck Info: </h2>
      <ChuckInfo whalesSaved={whalesSaved} roundHouseKicks={roundHouseKicks} />

      <h2>Jokes:</h2>
      {jokes.map((joke, id) => (
        <ChuckJokes key={joke.id} joke={joke.joke} id={id} />
      ))}

      <h2>Remove Joke: </h2>
      <input
        type='text'
        id='value'
        name='value'
        onChange={handleChange}
        placeholder='enter number'
      />

      <h2>Filtered Jokes:</h2>
      {filteredJokes.map((joke, id) => (
        <ChuckJokes key={joke.id} joke={joke.joke} id={id} />
      ))}
    </div>
  );
}

export default App;
