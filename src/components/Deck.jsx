import styled from "styled-components";

import FlashCard from './FlashCard';

function Deck(props) {
  const {flashCards, cardsStatus, setCardsStatus} = props;

  return (
    <DeckContainer>
      {flashCards.map( (card, i) => <FlashCard key={i} index={i} card={card} cardStatus={cardsStatus[i].status} cardAnswer={cardsStatus[i].answer} setCardsStatus={setCardsStatus} cardsStatus={cardsStatus}/> )}
    </DeckContainer>
  );
}

export default Deck;

const DeckContainer = styled.ul`
  width: 300px;
  margin: 60px 0px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;