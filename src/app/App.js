import './App.css';
import { search, popular } from '../util/reddit';
import React, { useEffect, useState } from 'react'
import RedditData from '../component/redditData';
import { useDispatch } from 'react-redux';
import { selectPosts, addPosts} from '../component/redditSlice';
import { useSelector } from 'react-redux';
import Card from '../component/card';


function App() {
  // setting use states
  const [keyWord, setKeyWord] = useState('');
  const [posts, setPosts] = useState([])
  // setup dispatch for store
  const dispatch = useDispatch();
  //get posts from the store
  //get popular posts if posts is empty
  useEffect(() => {
    popular().then((x) => setPosts(x))
  }, []);
  //set key word

  const handleSearch = (event) => {
    const value = event.target.value;
    setKeyWord(value)
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <input onChange={handleSearch} value={keyWord}></input>
          <button onClick={() => {search(keyWord).then((x) => setPosts(x))}}>Search</button>
        </nav>
      </header>
      <main>
        <RedditData cards={posts}/>
      </main>
    </div>
  );
}

export default App;
