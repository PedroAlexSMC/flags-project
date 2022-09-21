import styled from "styled-components";
import React from "react";

export const SearchInput = styled.input`
  min-width: 500px;
  border: none;
  border-radius: 5px;
  height: 70px;
  padding: 20px;
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
