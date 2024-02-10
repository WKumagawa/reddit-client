import './App.css';
import { search } from './util/reddit';
import React, { useState } from 'react'
import Popular from './component/redditData';

function App() {
  const [redditData, setRedditData] = useState(['yo']);
  const [keyWord, setKeyWord] = useState('')
  
  const handleSearch = (event) => {
    const value = event.target.value;
    setKeyWord(value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <input onChange={handleSearch} value={keyWord}></input>
          <button onClick={() => search(keyWord).then(setRedditData)}>Search</button>
        </nav>
      </header>
      <main>
        <p>
          <Popular cards={redditData} />
        </p>
      </main>
    </div>
  );
}

export default App;
