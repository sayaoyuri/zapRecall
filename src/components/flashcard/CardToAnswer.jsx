import styled from "styled-components";
import { Card } from "./CardModel";

function CardToAnswer(props) {
  const {card, index, answered, setAnswered, cardsStatus, setCardsStatus} = props;

  function answer(ev, i) {
    const aux = [...cardsStatus];

    aux[i].status = 'answered';
    aux[i].answer = ev.target.value;

    setCardsStatus(aux);
    setAnswered(answered + 1);
  }

  return (
    <CardContainer data-test="flashcard">
      <p data-test="flashcard-text">{card.answer}</p>
      <div>
        <button onClick={(ev) => answer(ev, index)} value='error' data-test="no-btn">Não lembrei</button>
        <button onClick={(ev) => answer(ev, index)} value='almost' data-test="partial-btn">Quase não lembrei</button>
        <button onClick={(ev) => answer(ev, index)} value='right' data-test="zap-btn">Zap!</button>
      </div>
    </CardContainer>
  );
}

export default CardToAnswer;

const CardContainer = styled(Card)`
  background-color: #FFFFD5; 
  flex-direction: column;
  justify-content: space-evenly;
  height: 131px;

  div {
    display: flex;
    gap: 8px;
      
    button {
      border-radius: 5px;
      border: none;
      outline: none;
      font-family: 'Recursive';
      color: #ffffff;
      width: 85px;
      height: 37px;
      text-align: center;
      cursor: pointer;
    }
  }

  div :nth-child(1) {
      background-color: #FF3030;  
  }

  div :nth-child(2) {
    background-color: #FF922E;  
  }

  div :nth-child(3) {
    background-color: #2FBE34;  
  }
`;