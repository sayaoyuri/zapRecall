import CardToPlay from "./CardToPlay";
import CardToTurn from "./CardToTurn";
import CardToAnswer from "./CardToAnswer";
import CardAnswered from "./CardAnswered";

function FlashCard( props ) {
  const {card, index, cardStatus, cardAnswer, cardsStatus, setCardsStatus, answered, setAnswered} = props;

  return (
    <>
      { cardStatus === 'toPlay' ?
          <CardToPlay index={index} cardsStatus={cardsStatus} setCardsStatus={setCardsStatus} />
        : cardStatus === 'toTurn' ?
          <CardToTurn card={card} index={index} cardsStatus={cardsStatus} setCardsStatus={setCardsStatus}/>
        : cardStatus === 'toAnswer' ?
          <CardToAnswer card={card} index={index} answered={answered} setAnswered={setAnswered} cardsStatus={cardsStatus} setCardsStatus={setCardsStatus} />
        : cardStatus === 'answered' ?
          <CardAnswered cardAnswer={cardAnswer} index={index} />
        : false
      }
    </>
  );
}
  
export default FlashCard;