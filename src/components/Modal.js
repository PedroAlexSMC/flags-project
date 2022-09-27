import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

const ModalBackContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalContainer = styled.section`
  position: fixed;
  background: white;
  width: 80vw;
  height: 80vh;
  border-radius: 30px;
  padding: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Modal({ handleClose, show, children, data }) {
  const currencies = () => {
    if (data.currencies != undefined) {
      const moneyList = data.currencies.map((item) => item.name).join(", ");
      return moneyList;
    } else return "";
  };

  const languages = () => {
    if (data.languages != undefined) {
      const languageList = Object.values(data.languages).join(", ");
      return languageList;
    } else return "";
  };

  return (
    <ModalBackContainer style={{ display: show ? "block" : "none" }}>
      <ModalContainer>
        {children}
        <p>{data.countryName}</p>
        <p>{data.capital}</p>
        <img src={data.flag}></img>
        <p>{data.region}</p>
        <p>{data.population}</p>
        <p>{currencies()}</p>
        <p>{languages()}</p>
        <button onClick={handleClose}>Close</button>
      </ModalContainer>
    </ModalBackContainer>
  );
}
