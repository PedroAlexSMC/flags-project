import "./App.css";
import axios from "axios";
import { useEffect, useState, useMemo, useContext } from "react";
import FlagsList from "./components/FlagsList";
import Modal from "./components/Modal";
import { GlobalStyles } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { useFlags, FlagContext } from "./provider/flagsProvider";
import styled from "styled-components";

const CardGrid = styled.div`
  display: grid;
  width: 100vw;
  height: 100%;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 10px;
  padding-left: 50px;
  padding-right: 50px;
`;
const SearchInput = styled.input`
  min-width: 500px;
  border: none;
  box-shadow: 9px 9px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 70px;
  padding: 20px;
`;

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [modalData, setModalData] = useState("");
  const [showModal, setshowModal] = useState(false);
  const { dataFlags, changeDataFlags } = useContext(FlagContext);
  console.log("dataFlags", dataFlags);

  const fetchFlags = () => {
    return axios.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log(res.data);
      changeDataFlags(res.data);
    });
  };

  useEffect(() => {
    fetchFlags();
  }, []);

  function displayModal() {
    setshowModal(true);
  }
  function hideModal() {
    setshowModal(false);
  }

  function printData(dado) {
    console.log(dado);
  }

  const setDataForModal = (item) => {
    console.log(item.name.common);
    setModalData(item.name.common);
    displayModal();
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <Modal show={showModal} handleClose={hideModal}>
          <p>{modalData}</p>
          {printData(modalData)}
        </Modal>
        <button type="button" onClick={displayModal}>
          Show modal
        </button>
        <span>
          <label htmlFor="searchFlags">Search</label>
          <SearchInput
            value={search}
            id="searchFlags"
            placeholder="Search for a country..."
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          ></SearchInput>
        </span>
        <CardGrid>
          <FlagsList
            data={dataFlags}
            search={search}
            modalData={setDataForModal}
          ></FlagsList>
        </CardGrid>
      </ThemeProvider>
    </div>
  );
}

export default App;
