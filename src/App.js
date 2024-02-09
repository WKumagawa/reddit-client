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
      </header>
      <body>
        <p>
          <input onChange={handleSearch} value={keyWord}/>
          <button onClick={() => search(keyWord).then(setRedditData)}>
            click me
          </button>
        </p>
        <p>
          <Popular cards={redditData} />
        </p>
      </body>
    </div>
  );
}

export default App;
