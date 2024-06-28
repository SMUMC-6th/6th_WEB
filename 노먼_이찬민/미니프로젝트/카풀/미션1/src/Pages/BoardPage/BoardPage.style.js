import styled from "styled-components";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Container = styled(TableContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const BoardBox = styled(Table)`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SearchBox = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: row;
  /* justify-content: ; */
  align-items: center;
`;

const BoardBoxHeader = styled.h1``;
const BoardBoxPostContainer = styled.ul`
  width: 100%;
  height: 80%;
  list-style: none;
  border-top: 3px solid black;
  border-bottom: 1.5px solid black;
`;
const BoardBoxPageButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
`;

const SearchBoxInput = styled.input`
  width: 30%;
  height: 30%;
  border-radius: 10px;
`;
const SearchBoxButton = styled.button`
  margin-right: 60%;
  left: -100px;
  /* margin-left: 70%; */
`;
const SearchBoxWritingButton = styled.button`
  width: 10%;
  height: 30%;
  /* color: skyblue; */
  background-color: aliceblue;
  border: 1px solid skyblue;
  border-radius: 10px;

  &:hover {
    scale: 1.15;
    /* pointer-events: "click"; */
  }
`;

export {
  Container,
  BoardBox,
  SearchBox,
  BoardBoxHeader,
  BoardBoxPostContainer,
  BoardBoxPageButton,
  SearchBoxInput,
  SearchBoxButton,
  SearchBoxWritingButton,
};
