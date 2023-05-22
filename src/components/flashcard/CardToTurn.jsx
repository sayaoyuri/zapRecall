import styled from 'styled-components';
import { Card } from './CardModel';

import turnArrow from '../../assets/seta_virar.png';

function CardToTurn(props) {
  const {card, index, cardsStatus, setCardsStatus} = props;

  function turnCard (i) {
    const aux = [...cardsStatus];

    aux[i].status = 'toAnswer';
    setCardsStatus(aux);
  }

  return (
    <CardContainer data-test="flashcard">
      <p data-test="flashcard-text">{card.question}</p>
      <img src={turnArrow} onClick={() => turnCard(index)} alt="Turn arrow" data-test="turn-btn"/>
    </CardContainer>
  );
}

export default CardToTurn;

const CardContainer = styled(Card)`
  position: relative;

  background-color: #FFFFD5; 
  height: 131px;

  flex-direction: column;
  justify-content: center;
  gap: 20px;

  p{
    font-size: 18px;
    font-family: 'Recursive';
    font-weight: 400;
    line-height: 22px;
    color: #333333;
  }

  img {
    width: 30px;
    height: 20px;
    position: absolute;
    bottom: 6px;
    right: 15px;
    cursor: pointer;
  }
`;