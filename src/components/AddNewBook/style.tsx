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

export const FormContainer = styled.form`
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 30px 40px;
  border: 3px #cb2f1ae0 solid;
  border-radius: 20px;
  height: fit-content;
  width: 850px;
  box-shadow: 8px 8px 8px rgb(238, 238, 238);

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
  font-size: 24px;
  margin-bottom: 5px;
`;

export const FormContainerElement = styled.div`
  margin: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 10px;

  textarea,
  input,
  select {
    box-sizing: border-box;
    padding: 7px;
    border: 1px solid #d1d6da;
    border-radius: 6px;
    width: 100%;
    color: #353637cd;
    font-size: 16px;
  }

  textarea {
    resize: vertical;
    min-height: 70px;
  }
  label {
    font-size: 16px;
    font-weight: 300;
    width: 100%;
    margin-bottom: 2px;
  }
  button {
    font-size: 16px;
    font-weight: 300;
    width: 100%;
    margin: 20px 0px;
  }
  .hint {
    font-size: 14px;
    font-weight: 300;
    color: gray;
    margin: 0px;
  }
`;

export const Button = styled.button`
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 300;
  width: 30%;
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

export const RadioBlock = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;

  .input-radio {
    display: flex;
    width: 30px;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
  }
  .input-radio input {
    margin: 0px;
    height: 100%;
  }
  .input-radio label {
    margin: 0px 5px;
  }
`;

export const ErrorMess = styled.small`
  color: red;
  font-size: 14px;
  font-weight: 300;
`;
