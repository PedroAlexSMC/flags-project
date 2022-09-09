import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchFlags = () => {
    return axios.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchFlags();
  }, []);

  return (
    <div>
      <div>
        {data.map((item, key) => {
          return (
            <>
              <img src={item.flags.png}></img>
              <p key={key}>{item.name.common}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
