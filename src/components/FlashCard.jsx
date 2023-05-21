import styled from "styled-components";

import playArrow from '../assets/seta_play.png';
import turnArrow from '../assets/seta_virar.png';
import error from '../assets/icone_erro.png';

function FlashCard( props ) {

  const {card, index, cardStatus, cardAnswer, cardsStatus, setCardsStatus} = props;
  console.log(cardStatus);

  return (
    <>
      { cardStatus === 'toPlay' ?
          <CardToPlay>
            <h1>{`Pergunta ${index + 1}`}</h1>
            <img src={playArrow} alt="Play arrow" />
          </CardToPlay>
          : cardStatus === 'toTurn' ?
            <CardToTurn>
              <p>{card.question}</p>
              <img src={turnArrow} alt="Turn arrow" />
            </CardToTurn>
          : cardStatus === 'toAnswer' ?
            <CardToAnswer>
              <p>{card.answer}</p>
              <div>
                <button>Não lembrei</button>
                <button>Quase não lembrei</button>
                <button>Zap!</button>
              </div>
            </CardToAnswer>
            : cardStatus === 'answered' ?
              <CardAnswered>
                <h1>{`Pergunta ${index + 1}`}</h1>
                <img src={error} alt="" />
              </CardAnswered>
            : ''
      }
    </>
  );
}
  
export default FlashCard;

const Card = styled.li`
  width: 300px;
  height: 65px;
  padding: 0px 15px;
  display: flex;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15); 
  font-family: 'Recursive';
`;

const CardToPlay = styled(Card)`
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

const CardToTurn = styled(Card)`
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

const CardToAnswer = styled(Card)`
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

const CardAnswered = styled(Card)`
  justify-content: space-between;
  align-items: center;

  h1 {
    text-decoration: line-through;
  }

  img {
    width: 23px;
    height: 23px;
  }
`;

// const Card = styled.li`
// background-color: ${props => props.status ? "#ffffff" : '#000000'};
// height: 65px;
// justify-content: space-between;

//   /* width: 300px;
//   padding: 0px 15px; */
//   /* display: flex; */
//   align-items: center;
//   /* border: none;
//   border-radius: 5px;
//   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);   */

//   h1 {
//     font-size: 16px;
//     font-family: 'Recursive';
//     font-weight: 700;
//     line-height: 19px;
//     color: #333333;
//   }

//   .icon {
//     width: 20px;
//     height: 23px;
//     cursor: pointer;
//   }

//   /* position: relative;

//   /* background-color: #FFFFD5; */
//   /* height: 131px;

//   flex-direction: column;
//   justify-content: center;
//   gap: 20px;

//   p{
//     font-size: 16px;
//     font-family: 'Recursive';
//     font-weight: 400;
//     line-height: 22px;
//     color: #333333;
//   }

//   .turn {
//     width: 30px;
//     height: 20px;
//     position: absolute;
//     bottom: 6px;
//     right: 15px;
//     cursor: pointer;
//   }

//   div {
//     display: flex;
//     gap: 8px;
    
//     button {
//       border-radius: 5px;
//       border: none;
//       outline: none;
//       font-family: 'Recursive';
//       color: #ffffff;
//       width: 85px;
//       height: 37px;
//       text-align: center;
//       cursor: pointer;
//     }
//   }

//   div :nth-child(1) {
//       background-color: #FF3030;  
//   }

//   div :nth-child(2) {
//       background-color: #FF922E;  
//   }

//   div :nth-child(3) {
//       background-color: #2FBE34;  
//   } */ 
// `;