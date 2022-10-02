import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { useMemo } from "react";

const CardLink = styled.a`
  cursor: pointer;
  width: auto;
  height: auto;
`;

export default function FlagsList({ data, search, filter, modalData }) {
  function handleClick(data) {
    modalData(data);
  }

  const applyFilter = useMemo(() => {
    switch (filter) {
      case "All":
        return renderFlags(data);
      case "Africa":
        const filteredAfrica = data.filter((item) => {
          return item.region === filter;
        });
        return renderFlags(filteredAfrica);
      case "Asia":
        const filteredAsia = data.filter((item) => {
          return item.region === filter;
        });
        return renderFlags(filteredAsia);
      case "Oceania":
        const filteredOceania = data.filter((item) => {
          return item.region === filter;
        });
        return renderFlags(filteredOceania);
      case "Europe":
        const filteredEurope = data.filter((item) => {
          return item.region === filter;
        });
        return renderFlags(filteredEurope);
      case "Americas":
        const filteredAmericas = data.filter((item) => {
          return item.region === filter;
        });
        return renderFlags(filteredAmericas);
      default:
        return renderFlags(data);
    }
  });

  function renderFlags(flagsdata) {
    //Render based on what is in the Search Input
    if (search !== "") {
      const names = flagsdata.filter((item) => {
        let name = item.name.common.trim().toLowerCase();
        if (name.includes(search.trim().toLowerCase())) {
          return item;
        } else {
          return "";
        }
      });
      return (
        <>
          {names.map((item, key) => {
            return !item ? (
              ""
            ) : (
              <CardLink key={key} onClick={() => handleClick(item)}>
                <Card
                  key={key}
                  flag={item.flags.png}
                  country={item.name.common}
                  population={item.population}
                  region={item.continents}
                  capital={item.capital}
                ></Card>
              </CardLink>
            );
          })}
        </>
      );
    }
    //Full render of the flags
    else {
      return (
        <>
          {flagsdata.map((item, key) => {
            return !item ? (
              ""
            ) : (
              <CardLink key={key} onClick={() => handleClick(item)}>
                <Card
                  key={key}
                  flag={item.flags.png}
                  country={item.name.common}
                  population={item.population}
                  region={item.continents}
                  capital={item.capital}
                ></Card>
              </CardLink>
            );
          })}
        </>
      );
    }
  }
  return <>{applyFilter}</>;
}
