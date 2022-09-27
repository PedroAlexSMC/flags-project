import "./App.css";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState, useMemo, useContext } from "react";
import FlagsList from "./components/FlagsList";
import Modal from "./components/Modal";
import { GlobalStyles } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { useFlags, FlagContext } from "./provider/flagsProvider";
import searchSvg from "./assets/search-outline.svg";
import {
  SearchIcon,
  SearchInput,
  SearchContainer,
} from "./styles/topSectionComponents";
import HeaderComponents from "./styles/HeaderComponents";

export const CardGrid = styled.div`
  display: grid;
  width: 100vw;
  height: 100%;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  gap: 10px;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 1890px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1560px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1168px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 789px) {
    grid-template-columns: repeat(1, 1fr);
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  padding-top: 100px;
`;

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [modalData, setModalData] = useState("");
  const [showModal, setshowModal] = useState(false);
  const { dataFlags, changeDataFlags } = useContext(FlagContext);
  const [currTheme, setTheme] = useState(theme.light);
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
    setModalData({
      countryName: item.name.common,
      nativeNames: Object.values(item.name.nativeName),
      capital: item.capital,
      flag: item.flags.png,
      region: item.region,
      currencies: Object.values(item.currencies),
      languages: Object.values(item.languages),
      population: item.population,
    });
    displayModal();
  };

  return (
    <div>
      <ThemeProvider theme={currTheme}>
        <GlobalStyles></GlobalStyles>
        <Container>
          <Modal
            show={showModal}
            handleClose={hideModal}
            data={modalData}
          ></Modal>
          <HeaderComponents
            currTheme={currTheme}
            themes={theme}
            setter={setTheme}
          ></HeaderComponents>
          <SearchContainer>
            <SearchIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                fill="none"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M338.29 338.29L448 448"
              />
            </SearchIcon>
            <SearchInput
              value={search}
              id="searchFlags"
              placeholder="Search for a country..."
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            ></SearchInput>
          </SearchContainer>
          <CardGrid>
            <FlagsList
              data={dataFlags}
              search={search}
              modalData={setDataForModal}
            ></FlagsList>
          </CardGrid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
