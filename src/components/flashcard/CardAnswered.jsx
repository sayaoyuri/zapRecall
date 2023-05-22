import styled from "styled-components";
import { Card } from "./CardModel";

import error from '../../assets/icone_erro.png';
import almost from '../../assets/icone_quase.png';
import right from '../../assets/icone_certo.png';

function CardAnswered(props) {
  const {cardAnswer, index} = props;
  // console.log(cardAnswer);
  return(
    <CardContainer cardAnswer={cardAnswer} data-test="flashcard">
      <h1 data-test="flashcard-text">{`Pergunta ${props.index + 1}`}</h1>
      <img 
        src={props.cardAnswer === 'error' ? error : props.cardAnswer === 'almost' ? almost : right}
        data-test={props.cardAnswer === 'error' ? 'no-icon' : props.cardAnswer === 'almost' ? 'partial-icon' : 'zap-icon'}
      />
    </CardContainer>
  );
}

export default CardAnswered;

const CardContainer = styled(Card)`
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 700;
    color: ${props => props.cardAnswer === 'error' ? '#FF3030' : props.cardAnswer === 'almost' ? '#FF922E' : '#2FBE34' };
    text-decoration: line-through;
  }

  img {
    width: 23px;
    height: 23px;
  }
`;