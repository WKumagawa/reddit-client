import './App.css';
import { search, popular } from '../util/reddit';
import React, { useState, useEffect } from 'react'
import RedditData from '../component/redditData';
import Popular from '../component/popular';
import { useDispatch } from 'react-redux';
import { reddit } from '../component/popularSlice';
//import Popular from '../component/popular';
//import { selectPopular } from '../component/popularSlice';
//import { UseSelector } from 'react-redux';
//import { Provider } from 'react-redux';


function App() {
  const [redditData, setRedditData] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [keyWord, setKeyWord] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
      popular().then(setPopularPosts)
  }, []);
  dispatch(reddit(popularPosts))

  /*
  useEffect(() => {
    popular().then(setRedditData);
  }, []);
  */
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
        <RedditData cards={popularPosts} />
        {popularPosts.map((x) => {
          return(
            <Popular
              title={x.title}
              subreddit={x.subreddit}
              thumbnail={x.thumbnail}
              commentsLink={x.commentsLink}
              media={x.media}
              up={x.ups}
              numberComments={x.numberComments}
              author={x.numberComments}
            />
        )})
        }
      </main>
    </div>
  );
}

export default App;
