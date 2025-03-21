import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  width: fit-content;

  p {
    text-indent: 1em;
    margin: 7px 0px;
    text-align: justify;
  }
  li {
    text-align: justify;
    margin-bottom: 10px;
  }

  h1 {
    text-align: center;
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 0px;
    padding: 7px 0px 5px;
  }
  em,
  strong {
    color: #c24838;
  }
  h2 {
    margin-top: 15px;
  }

  .page-title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
    text-indent: 0;
    margin-left: 0px;
  }
`;

export const Container = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 1000px;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: 0 0px 25px rgba(0, 0, 0, 0.1);
`;
