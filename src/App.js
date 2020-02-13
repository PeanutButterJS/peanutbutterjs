import React from "react";
import styled from "styled-components";

const Main = styled.main`
  color: white;
  background: rgb(9, 48, 40);
  background: linear-gradient(
    180deg,
    rgba(9, 48, 40, 1) 0%,
    rgba(35, 122, 87, 1) 100%
  );
  min-height: 100vh;
`;

export default function App() {
  return (
    <Main>
      <h1>peanutbutterjs</h1>
    </Main>
  );
}
