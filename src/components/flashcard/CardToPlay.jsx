import styled from 'styled-components';
import {Card} from './CardModel';

import playArrow from '../../assets/seta_play.png';

function CardToPlay(props) {
  const {index, cardsStatus, setCardsStatus} = props;

  function playCard (i) {
    const aux = [...cardsStatus];

    aux[i].status = 'toTurn';
    setCardsStatus(aux);
  }

  return (
    <CardContainer data-test="flashcard">
      <h1 data-test="flashcard-text">{`Pergunta ${index + 1}`}</h1>
      <img src={playArrow} onClick={() => playCard(index)} alt="Play arrow" data-test="play-btn"/>
    </CardContainer>
  );

}

export default CardToPlay;

const CardContainer = styled(Card)`
  background-color: #ffffff;
  height: 65px;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;

  img {
    width: 20px;
    height: 23px;
    cursor: pointer;
  }
`;