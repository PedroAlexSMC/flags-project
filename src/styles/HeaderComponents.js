import React from "react";
import styled from "styled-components";
import { theme } from "./Theme";

const HeaderTitle = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: ${(props) => props.theme.textColor};

  @media screen and (max-width: 760px) {
    font-size: 18px;
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -100px;
  padding-left: 50px;
  padding-right: 50px;
  box-shadow: 9px 9px 10px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.elementsColor};
`;
const HeaderDarkModeSwitcher = styled.a`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;

  @media screen and (max-width: 760px) {
    font-size: 16px;
  }
`;

export default function HeaderComponents({ currTheme, themes, setter }) {
  const handleThemeChange = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      setter(themes.light);
    } else {
      localStorage.setItem("theme", "dark");
      setter(themes.dark);
    }
  };
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>Where in the World?</HeaderTitle>
        <HeaderDarkModeSwitcher
          onClick={(e) => {
            handleThemeChange();
          }}
        >
          {currTheme === theme.dark ? "☀ Light Mode" : "🌙 Dark Mode"}
        </HeaderDarkModeSwitcher>
      </HeaderContainer>
    </>
  );
}
