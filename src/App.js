import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const fetchFlags = () => {
    return axios.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchFlags();
  }, []);

  function renderFlags(){
    if(search !== ''){
    const names = data.filter(item=>{
      let name = item.name.common.trim().toLowerCase()
      if(name.includes(search.trim().toLowerCase())) {
        return item
      }
      else{
        return ''
      }
    })
    console.log(names)
    return (
      <div>
      {names.map((item, key) => {
        return !item ? '' :(
          <>
            <img alt={`Flag of ${item.name.common}`} src={item.flags.png}></img>
            <p key={key}>{item.name.common}</p>
          </>
        );
      })}
      </div>
    )
  }else{
    return(
      <div>
      {data.map((item, key) => {
        return !item ? '' :(
          <>
            <img alt={`Flag of ${item.name.common}`} src={item.flags.png}></img>
            <p key={key}>{item.name.common}</p>
          </>
        );
      })}
      </div>
    )
  }
  }

  return (
    <div>
      <span>
            <label htmlFor="searchFlags">Search</label>
            <input value={search} id="searchFlags" type="text" onChange={e=>setSearch(e.target.value)}></input>
            </span>
      <div>
        {renderFlags()}
      </div>
    </div>
  );
}

export default App;
