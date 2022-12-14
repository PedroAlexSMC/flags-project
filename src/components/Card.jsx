import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  min-height: 400px;
  max-height: 400px;
  max-width: 300px;
  margin: 25px;
  overflow: overlay;
  background-color: ${(props) => props.theme.elementsColor};
  box-shadow: 9px 9px 10px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  text-align: left;
  color: ${(props) => props.theme.textColor};
`;

const Image = styled.img`
  width: 300px;
`;
const CountryName = styled.h4`
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 15px;
`;
const CountryData = styled.span`
  font-weight: 300;
  font-size: 16px;
`;
const CountryTitle = styled.em`
  font-weight: 600;
  font-size: 16px;
`;

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export default function Card({ flag, country, population, region, capital }) {
  return (
    <>
      <Container>
        <Image alt={`Flag of ${country}`} src={flag}></Image>
        <TextContainer>
          <CountryName>{country}</CountryName>
          <p>
            <strong>Population:</strong>{" "}
            <CountryData>{INTEGER_FORMATTER.format(population)}</CountryData>
          </p>
          <p>
            <strong>Region:</strong> <CountryData>{region}</CountryData>
          </p>
          <p>
            <strong>Capital:</strong> <CountryData>{capital}</CountryData>
          </p>
        </TextContainer>
      </Container>
    </>
  );
}
