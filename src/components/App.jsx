import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../assets/syle/GlobalStyle";

import Deck from "./Deck";
import DeckResult from "./DeckResult";

import logo from '../assets/logo.png';

import { flashCards } from "../mock";
import { statuses } from "../mock";

function App() {
  const [cardsStatus, setCardsStatus] = useState( [...statuses] );
  const [answered, setAnswered] = useState(0);

  return (
    <AppContainer>
      <GlobalStyle></GlobalStyle>
      <header>
        <img src={logo} alt="ZapRecall logo" />
        <h1>ZapRecall</h1>
      </header>
      <Deck flashCards={flashCards} cardsStatus={cardsStatus} setCardsStatus={setCardsStatus} answered={answered} setAnswered={setAnswered}/>
      <DeckResult answered={answered} cardsQt={flashCards.length}/>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.main`
  background-color: #FB6B6B;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  header {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      width: 52px;
      height: 60px;
    }

    h1 {
      font-family: 'Righteous', cursive;
      font-size: 36px;
      font-weight: 400;
      color: #ffffff;
    }
  }
`;