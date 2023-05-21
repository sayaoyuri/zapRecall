import styled from "styled-components";

function DeckResult(props) {
  const {answered, cardsQt} = props;

  return (
    <DeckResultContainer>
      <p>{`${answered}/${cardsQt} CONCLUÍDOS`}</p>
    </DeckResultContainer>
  );
}

export default DeckResult;

const DeckResultContainer = styled.footer`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  
  p {
    font-size: 16px;
    font-family: 'Recursive';
  }
`;