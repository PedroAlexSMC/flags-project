import React from "react";
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
  background: ${(props) => props.theme.backgroundColor};
  width: 80vw;
  height: 80vh;
  border-radius: 30px;
  padding: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FlagModal = styled.img`
  width: 100%;
`;

const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 40px;
  padding-left: 140px;
`;

const CountryTitle = styled.h2`
  font-size: 35px;
  font-weight: 800;
  padding-bottom: 50px;
  color: ${(props) => props.theme.textColor};
`;

const CountryDetails = styled.p`
  font-size: 20px;
  line-height: 40px;
  color: ${(props) => props.theme.textColor};
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  gap: 0px;
`;

const ModalHeader = styled.header`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: left;
  padding-top: 10px;
  padding-bottom: 50px;
`;

const ButtonBack = styled.button`
  box-shadow: 0.1px 0.1px 1.4px rgba(0, 0, 0, 0.255),
    1px 1px 11px rgba(0, 0, 0, 0.51);

  border-radius: 10px;
  width: 130px;
  height: 40px;
  font-size: 16px;
  border: none;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.elementsColor};
  cursor: pointer;
`;

export default function Modal({ handleClose, show, data }) {
  const currencies = () => {
    if (data.currencies !== undefined) {
      const moneyList = data.currencies.map((item) => item.name).join(", ");
      return moneyList;
    } else return "";
  };

  const languages = () => {
    if (data.languages !== undefined) {
      const languageList = Object.values(data.languages).join(", ");
      return languageList;
    } else return "";
  };

  return (
    <ModalBackContainer style={{ display: show ? "block" : "none" }}>
      <ModalContainer>
        <ModalHeader>
          <ButtonBack onClick={handleClose}>⬅ Back</ButtonBack>
        </ModalHeader>
        <ContentWrapper>
          <ImageContainer>
            <FlagModal src={data.flag}></FlagModal>
          </ImageContainer>
          <TextContainer>
            <CountryTitle>{data.countryName}</CountryTitle>
            <CountryDetails>
              <strong>Capital: </strong> {data.capital}
            </CountryDetails>
            <CountryDetails>
              <strong>Region: </strong>
              {data.region}
            </CountryDetails>
            <CountryDetails>
              <strong>Population: </strong>
              {data.population}
            </CountryDetails>
            <CountryDetails>
              <strong>Currencies: </strong>
              {currencies()}
            </CountryDetails>
            <CountryDetails>
              <strong>Languages: </strong>
              {languages()}
            </CountryDetails>
          </TextContainer>
        </ContentWrapper>
      </ModalContainer>
    </ModalBackContainer>
  );
}
