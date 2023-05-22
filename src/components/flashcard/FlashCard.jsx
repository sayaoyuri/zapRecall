import styled from "styled-components";

// import { Card } from "./CardModel";

// import playArrow from '../assets/seta_play.png';
// import turnArrow from '../../assets/seta_virar.png';
// import error from '../../assets/icone_erro.png';
// import almost from '../../assets/icone_quase.png';
// import right from '../../assets/icone_certo.png';

import CardToPlay from "./CardToPlay";
import CardToTurn from "./CardToTurn";
import CardToAnswer from "./CardToAnswer";
import CardAnswered from "./CardAnswered";

function FlashCard( props ) {

  const {card, index, cardStatus, cardAnswer, cardsStatus, setCardsStatus, answered, setAnswered} = props;

  // function answer(ev, i) {

  //   const aux = [...cardsStatus];

  //   aux[i].status = 'answered';
  //   aux[i].answer = ev.target.value;

  //   setCardsStatus(aux);
  //   setAnswered(answered + 1);
  // }

  // function playCard (i) {
  //   const aux = [...cardsStatus];

  //   aux[i].status = 'toTurn';
  //   setCardsStatus(aux);
  // }

  // function turnCard (i) {
  //   const aux = [...cardsStatus];

  //   aux[i].status = 'toAnswer';
  //   setCardsStatus(aux);
  // }

  return (
    <>
      { cardStatus === 'toPlay' ?
          <CardToPlay index={index} cardsStatus={cardsStatus} setCardsStatus={setCardsStatus} />
          // <CardToPlay data-test="flashcard">
          //   <h1 data-test="flashcard-text">{`Pergunta ${index + 1}`}</h1>
          //   <img src={playArrow} onClick={() => playCard(index)} alt="Play arrow" data-test="play-btn"/>
          // </CardToPlay>
          : cardStatus === 'toTurn' ?
            <CardToTurn card={card} index={index} cardsStatus={cardsStatus} setCardsStatus={setCardsStatus}/>

            // <CardToTurn data-test="flashcard">
            //   <p data-test="flashcard-text">{card.question}</p>
            //   <img src={turnArrow} onClick={() => turnCard(index)} alt="Turn arrow" data-test="turn-btn"/>
            // </CardToTurn>
          : cardStatus === 'toAnswer' ?
              <CardToAnswer card={card} index={index} answered={answered} setAnswered={setAnswered} cardsStatus={cardsStatus} setCardsStatus={setCardsStatus} />
            // <CardToAnswer data-test="flashcard">
            //   <p data-test="flashcard-text">{card.answer}</p>
            //   <div>
            //     <button onClick={(ev) => answer(ev, index)} value='error' data-test="no-btn">Não lembrei</button>
            //     <button onClick={(ev) => answer(ev, index)} value='almost' data-test="partial-btn">Quase não lembrei</button>
            //     <button onClick={(ev) => answer(ev, index)} value='right' data-test="zap-btn">Zap!</button>
            //   </div>
            // </CardToAnswer >
            : cardStatus === 'answered' ?
                <CardAnswered cardAnswer={cardAnswer} index={index} />
              // <CardAnswered cardAnswer={cardAnswer} data-test="flashcard">
              //   <h1 data-test="flashcard-text">{`Pergunta ${index + 1}`}</h1>
              //   <img 
              //     src={cardAnswer === 'error' ? error : cardAnswer === 'almost' ? almost : right}
              //     data-test={cardAnswer === 'error' ? 'no-icon' : cardAnswer === 'almost' ? 'partial-icon' : 'zap-icon'}
              //   />
              // </CardAnswered>
            : ''
      }
    </>
  );
}
  
export default FlashCard;

// export const Card = styled.li`
//   width: 300px;
//   height: 65px;
//   padding: 0px 15px;
//   display: flex;
//   border: none;
//   border-radius: 5px;
//   background-color: #ffffff;
//   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15); 
//   font-family: 'Recursive';
// `;

// const CardToPlays = styled(Card)`
//   background-color: #ffffff;
//   height: 65px;
//   justify-content: space-between;
//   align-items: center;

//   font-weight: 700;

//   img {
//     width: 20px;
//     height: 23px;
//     cursor: pointer;
//   }
// `;

// const CardToTurn = styled(Card)`
//   position: relative;

//   background-color: #FFFFD5; 
//   height: 131px;

//   flex-direction: column;
//   justify-content: center;
//   gap: 20px;

//   p{
//     font-size: 18px;
//     font-family: 'Recursive';
//     font-weight: 400;
//     line-height: 22px;
//     color: #333333;
//   }

//   img {
//     width: 30px;
//     height: 20px;
//     position: absolute;
//     bottom: 6px;
//     right: 15px;
//     cursor: pointer;
//   }

// `;

// const CardToAnswer = styled(Card)`
//   background-color: #FFFFD5; 
//   flex-direction: column;
//   justify-content: space-evenly;
//   height: 131px;

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
//     background-color: #FF922E;  
//   }

//   div :nth-child(3) {
//     background-color: #2FBE34;  
//   }
// `;

// const CardAnswered = styled(Card)`
//   justify-content: space-between;
//   align-items: center;

//   h1 {
//     font-weight: 700;
//     color: ${props => props.cardAnswer === 'error' ? '#FF3030' : props.cardAnswer === 'almost' ? '#FF922E' : '#2FBE34' };
//     text-decoration: line-through;
//   }

//   img {
//     src: ${props => props.cardAnswer === 'error' ? error : props.cardAnswer === 'almost' ? almost : right };
//     width: 23px;
//     height: 23px;
//   }
// `;

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