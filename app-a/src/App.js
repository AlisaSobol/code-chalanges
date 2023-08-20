import { useState,useEffect } from "react";
import Tab from "./components/Tab";
import Error from "./components/Error";
import Loading from "./components/Loading";
import Table from "./components/Table";

function App() {
  const [ tab, setTab ] = useState('users');
  const [ list, setList ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  const URL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    handleFetch(tab)
  }, [tab]);

  const handleFetch = async (tabName) => {
    try {
      setError(false)
      setLoading(true)

      const response = await fetch(`${URL}/${tabName}`)

      if (!response.ok) throw Error('Smth went wrong') 

      const list = await response.json()

      setList(list)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <nav className="tab-bar">
        <Tab
          value="users"
          tab={tab}
          setTab={setTab}
        />
        <Tab
          value="posts"
          tab={tab}
          setTab={setTab}
        />
        <Tab
          value="comments"
          tab={tab}
          setTab={setTab}
        />
      </nav>     

      <div>
        
        { error && <Error /> }

        { loading && <Loading /> }

        { !error && !loading && <Table entries={list}/> }
      </div> 
    </div>
  );
}

export default App;