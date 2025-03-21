import styled from "styled-components";

export const MainContainer = styled.div`
  width: 1000px;
  min-height: 358px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 12px;
    margin-top: 0px;
  }
`;

export const CartSummary = styled.div`
  width: 300px;
  height: fit-content;
  padding: 20px;
  margin-top: 10px;
  background-color: #f1f1f1;
  border-radius: 8px;

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 0px;
    font-size: 23px;
    font-weight: 700;
  }
`;

export const QuantityPrice = styled.div`
  margin-left: auto;
  text-align: center;
`;

export const ProductsList = styled.div`
  width: 700px;
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: start;
  border-bottom: 1px solid #ddd;
  padding: 15px 0px;
  width: 90%;
`;

export const ProductImage = styled.div`
  min-width: 120px;
  height: 120px;
  margin-right: 15px;
  background-color: #f1f1f1;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const ProductDetails = styled.div`
  font-size: 17px;
  font-weight: 700;

  p {
    margin: 5px 0;
    color: #666;
    font-size: 16px;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  button {
    width: 25px;
    height: 25px;
    margin: 0 10px;
  }

  input {
    width: 30px;
    text-align: center;
    border: none;
    background: none;
  }
`;

export const Price = styled.div`
  color: #3a3a3a;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0px;
`;

export const DeleteButton = styled.div`
  margin: 0px;
  display: flex;
  justify-content: end;
  align-items: start;
`;

export const Delete = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  height: 35px;
  width: 35px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 30px;
    width: 30px;
  }

  &:hover {
    background-color: #ff00000c;
  }
`;

export const OrderButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  &:hover {
    background-color: #282828e0;
  }
`;

export const CountButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  &:hover {
    background-color: #282828e0;
  }
`;
