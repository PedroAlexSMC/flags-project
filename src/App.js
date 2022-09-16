import "./App.css";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import FlagsList from "./components/FlagsList";
import Modal from "./components/Modal";
import { GlobalStyles } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";


function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [modalData, setModalData] = useState('');
  const [showModal, setshowModal] = useState(false);


  const fetchFlags = () => {
    return axios.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchFlags();
  }, []);


  function displayModal(){
    setshowModal(true)
  }
  function hideModal(){
    setshowModal(false)
  }

  function printData(dado){
    console.log(dado);
  }

  const setDataForModal = (item)=>{
    console.log(item.name.common)
    setModalData(item.name.common)
    displayModal()
  }


  return (
    <div>
      <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <Modal show={showModal} handleClose={hideModal}>
        <p>{modalData}</p>
        {printData(modalData)}
      </Modal>
      <button type="button" onClick={displayModal}>Show modal</button>
      <span>
            <label htmlFor="searchFlags">Search</label>
            <input value={search} id="searchFlags" type="text" onChange={e=>setSearch(e.target.value)}></input>
      </span>
      <div>
        <FlagsList data={data} search={search} modalData={setDataForModal}></FlagsList>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
