import "./App.css";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import FlagsList from "./components/FlagsList";
import Modal from "./components/Modal";
import { GlobalStyles } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { FlagContext } from "./provider/flagsProvider";
import {
  HeaderContainer,
  Selector,
  SearchIcon,
  SearchInput,
  SearchContainer,
} from "./styles/topSectionComponents";
import HeaderComponents from "./styles/HeaderComponents";

export const CardGrid = styled.div`
  display: grid;
  min-width: 100vw;
  min-height: 100%;
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
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  padding-top: 100px;
`;

const GeneralBackground = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function validateTheme() {
  if (localStorage.getItem("theme") === "dark") {
    return theme.dark;
  }
  if (localStorage.getItem("theme") === "light") {
    return theme.light;
  } else {
    localStorage.setItem("theme", "dark");
    return theme.dark;
  }
}

function App() {
  const [search, setSearch] = useState("");
  const [modalData, setModalData] = useState("");
  const [showModal, setshowModal] = useState(false);
  const { dataFlags, changeDataFlags } = useContext(FlagContext);
  const [currTheme, setTheme] = useState(validateTheme());
  const [selectRegion, setSelectRegion] = useState("All");

  function handleRegionChange(e) {
    setSelectRegion(e.target.value);
  }

  const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
  });

  const fetchFlags = () => {
    return axios.get("https://restcountries.com/v3.1/all").then((res) => {
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

  const setDataForModal = (item) => {
    setModalData({
      countryName: item.name.common,
      nativeNames: Object.values(item.name.nativeName),
      capital: item.capital,
      flag: item.flags.png,
      region: item.region,
      currencies: Object.values(item.currencies),
      languages: Object.values(item.languages),
      population: INTEGER_FORMATTER.format(item.population),
    });
    displayModal();
  };

  return (
    <GeneralBackground>
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
          <HeaderContainer>
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
            <Selector value={selectRegion} onChange={handleRegionChange}>
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Oceania">Oceania</option>
            </Selector>
          </HeaderContainer>
          <CardGrid>
            <FlagsList
              data={dataFlags}
              search={search}
              modalData={setDataForModal}
              filter={selectRegion}
            ></FlagsList>
          </CardGrid>
        </Container>
      </ThemeProvider>
    </GeneralBackground>
  );
}

export default App;
