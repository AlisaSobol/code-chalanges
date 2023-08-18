import { useState,useEffect } from "react";
import Tab from "./components/Tab";
import Error from "./components/Error";
import Loading from "./components/Loading";
import List from "./components/List";

function App() {
  const [ tab, setTab ] = useState('users');
  const [ list, setList ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  const URLS = {
    USERS: 'https://jsonplaceholder.typicode.com/users',
    POSTS: 'https://jsonplaceholder.typicode.com/posts',
    COMMENTS: 'https://jsonplaceholder.typicode.com/comments'
  }

  useEffect(() => {
    handleFetch(URLS.USERS, 'users')
  }, []);

  const handleFetch = async (url, tabName) => {
    try {
      setError(false)
      setLoading(true)

      const response = await fetch(url)

      if (!response.ok) throw Error('Smth went wrong') 

      const list = await response.json()

      setList(list)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }

    setTab(tabName);
  }

  const handleUsers = async (value) => {
   handleFetch(URLS.USERS, value)
  }

  const handlePosts = async (value) => {
   handleFetch(URLS.POSTS, value)
  }

  const handleComments = async (value) => {
   handleFetch(URLS.COMMENTS, value)
  }

  return (
    <div className="App">
      <nav className="tab-bar">
        <Tab
          value="users"
          tab={tab}
          setTab={handleUsers}
        />
        <Tab
          value="posts"
          tab={tab}
          setTab={handlePosts}
        />
        <Tab
          value="comments"
          tab={tab}
          setTab={handleComments}
        />
      </nav>     

      <div className="list-holder">
        { error && <Error /> }

        { loading && <Loading /> }

        { !error && !loading && <List list={list} /> }
      </div> 
    </div>
  );
}

export default App;