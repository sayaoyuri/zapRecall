import styled from "styled-components";

import FlashCard from './FlashCard';

function Deck() {
  return (
    <DeckContainer>
      <FlashCard></FlashCard>
      <FlashCard></FlashCard>
      <FlashCard></FlashCard>
      <FlashCard></FlashCard>
      <FlashCard></FlashCard>
      <FlashCard></FlashCard>
      <FlashCard></FlashCard>
      <FlashCard></FlashCard>
    </DeckContainer>
  );
}

export default Deck;

const DeckContainer = styled.ul`
/* background-color: blue; */
  width: 300px;
  margin: 60px 0px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;