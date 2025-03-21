import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: fit-content;
  width: 1000px;
  box-sizing: border-box;
  padding: 20px;
  margin: 20px auto;

  p {
    text-indent: 1em;
  }
`;

export const PromotionContainer = styled.div`
  border-radius: 20px;
  height: fit-content;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: 0 0px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-bottom: 30px;

  img {
    width: 100%;
    border-radius: 20px;
  }
`;
