import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  max-width: 60%; /* Максимальная ширина */
  max-height: 90vh; /* Максимальная высота */
  overflow-y: auto; /* Добавляем вертикальную прокрутку */
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  h1,
  h2 {
    margin: 0;
  }
`;

export const ModalBody = styled.div`
  margin-top: 20px;
  flex: 1;
  overflow-y: auto; /* Прокрутка внутри тела модального окна */

  .book-image img {
    max-width: 100%;
    height: auto;
  }

  .book-details p {
    margin: 5px 0;
  }

  table {
    border-collapse: collapse;
    width: 400px;
    margin-left: 40px;
  }
  td {
    width: 60%;
  }
  th,
  td {
    height: 35px;
    font-size: 16px;
    padding-left: 10px;
    text-align: start;
    border: 1px solid rgb(227, 227, 227);
  }
`;

export const BookDetailsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
`;

export const BookImg = styled.div`
  height: 250px;
  width: 250px;
  overflow: hidden;
  background-color: #efefefaa;

  img {
    width: 100%; /* Изображение растягивается по ширине блока */
    height: 100%; /* Изображение растягивается по высоте блока */
    object-fit: contain; /* Сохраняет пропорции и подгоняет изображение в блок */
  }
`;
