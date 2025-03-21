import styled from "styled-components";

export const Card = styled.div`
  margin: 0px 13px 73px;
  padding: 2px;
  margin-right: 40px;
  width: 200px;
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background-color: #efefefaa;
    border-radius: 7px;
  }

  .card_description {
    height: 150px;
    display: flexbox;
    justify-content: space-between;
  }

  .book_title {
    display: block;
    color: #000000;
    margin-bottom: 10px;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    line-height: 1.3em;
    max-height: 5.2em;
    margin-left: 0px;

    font-weight: bold;
    font-size: small;
    margin-bottom: 10px;

    cursor: pointer;
  }

  .book_title:hover {
    color: rgb(234, 53, 53);
  }

  .author {
    font-weight: 300;
    color: #585858;
    font-size: x-small;
    margin: 0px;
    cursor: default;
  }

  .price {
    font-weight: 500;
    color: #505050;
    margin-bottom: 10px;
    margin-left: 0px;
    cursor: default;
  }
`;

export const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 40px;
    width: 40px;
  }
`;

export const BookImage = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 7px;
  background-color: #efefefaa;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Сохраняет пропорции и подгоняет изображение в блок */
  }
`;

export const MainSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;

  a {
    text-decoration: none;
    color: rgb(69, 69, 69);
    background-color: #f1f1f1;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    text-align: center;
    box-sizing: border-box;
    padding: 7px;
    margin: 20px;
    transform: translateY(-50%);
    z-index: 10;
  }

  a:hover {
    color: rgb(69, 69, 69);
    background-color: #e4e4e4;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  height: 400px;
  width: 1200px;
  overflow: hidden;
`;

export const Slider = styled.div`
  display: flex;
  transition: transform 0.7s ease-in-out;
`;

export const Slide = styled.div`
  position: relative;
  height: 400px;
  width: 1200px;
  overflow: hidden;

  min-width: 100%;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 400px;
    object-fit: contain;
    background-color: #f1f1f18f;
    display: block;
  }
`;

export const Button = styled.button`
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 600;
  width: 130px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #282828e0;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ButtonFavorite = styled.button`
  background: rgba(0, 0, 0, 0);
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 2px;

  &:hover {
    background: rgba(255, 162, 162, 0.43);
  }
`;

export const Recommendations = styled.div`
  margin: 0 60px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: start;
`;
