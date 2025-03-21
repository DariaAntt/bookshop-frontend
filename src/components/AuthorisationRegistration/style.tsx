import styled from "styled-components";

export const Container = styled.div`
  border: 3px #cb2f1ae0 solid;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  height: fit-content;
  box-sizing: border-box;
  padding: 40px;
  width: 900px;
  box-shadow: 8px 8px 8px rgb(238, 238, 238);
  margin: 10px auto 30px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  input {
    box-sizing: border-box;
    padding: 7px;
    border: 1px solid #d1d6da;
    border-radius: 6px;
    width: 100%;
    color: #353637;
    font-size: 16px;
  }
  label {
    font-size: 16px;
    font-weight: 300;
    width: 100%;
    margin: 10px 0px 2px;
  }
`;

export const FormContainerTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

export const Button = styled.button`
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 300;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  &:hover {
    background-color: #282828e0;
  }
`;
