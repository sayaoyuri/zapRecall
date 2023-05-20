import styled from "styled-components";

import playArrow from '../assets/seta_play.png';

function FlashCard() {
  return (
    <Card>
      <h1>Pergunta 1</h1>
      <img src={playArrow} alt="" className="icon" />
    </Card>
  );
}

export default FlashCard;

const Card = styled.li`
  background-color: white;
  width: 300px;
  height: 65px;
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

  h1 {
    font-size: 16px;
    font-family: 'Recursive';
    font-weight: 700;
    line-height: 19px;
    color: #333333;
  }

  .icon {
    width: 20px;
    height: 23px;
    cursor: pointer;
  }
`;