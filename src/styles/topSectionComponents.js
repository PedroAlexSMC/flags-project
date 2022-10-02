import styled from "styled-components";
import React from "react";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Selector = styled.select`
  width: 200px;
  height: 70px;
  background-color: ${(props) => props.theme.elementsColor};
  color: ${(props) => props.theme.textColor};
  box-shadow: 9px 9px 10px rgba(0, 0, 0, 0.1);
  border: none;
  font-size: 16px;
  padding: 10px;
  margin-right: 50px;
  font-weight: 600;
`;

export const SearchInput = styled.input`
  min-width: 500px;
  border: none;
  border-radius: 5px;
  height: 70px;
  padding: 20px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.elementsColor};

  @media screen and (max-width: 760px) {
    min-width: 280px;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.inputTextColor};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => props.theme.inputTextColor};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => props.theme.inputTextColor};
  }
`;

export const SearchIcon = styled.svg`
  height: 30px;
  padding-left: 20px;
  stroke: ${(props) => props.theme.textColor};
`;

export const SearchContainer = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  margin-left: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.elementsColor};
  box-shadow: 9px 9px 10px rgba(0, 0, 0, 0.1);
`;
