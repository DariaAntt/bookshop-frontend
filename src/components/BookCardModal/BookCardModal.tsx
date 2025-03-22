import React from "react";
import {
  BookDetailsBlock,
  BookImg,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "./style";
import { BookDetails, BookCard } from "../Catalog/Catalog";

interface ModalProps {
  book: BookCard | null;
  onClose: () => void;
  details: any; // Дополнительные данные о книге
}

export const BookModal: React.FC<ModalProps> = ({ book, onClose, details }) => {
  const BASE_URL = "https://bookshop-backend-latest.onrender.com"; // Базовый URL API

  if (!book) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>Трое в лодке, не считая собаки</h1>
            <h2 style={{ color: "#bf4f4f" }}> {book.author}</h2>
          </div>
          <button onClick={onClose}>X</button>
        </ModalHeader>
        <ModalBody>
          <BookDetailsBlock>
            <BookImg>
              <img
                src={BASE_URL + "/img/books/" + book.bookImage}
                alt={book.title}
              />
            </BookImg>
            <table>
              <tr>
                <th>Категория</th>
                <td>{details.category}</td>
              </tr>
              <tr>
                <th>Издательство</th>
                <td>{details.publishing}</td>
              </tr>
              <tr>
                <th>Год издания</th>
                <td>{details.year}</td>
              </tr>
              <tr>
                <th>Тип переплёта</th>
                <td>{details.binding}</td>
              </tr>
              <tr>
                <th>Возрастное ограничение</th>
                <td>{details.ageLimit}+</td>
              </tr>
            </table>
          </BookDetailsBlock>
          <p
            style={{
              textIndent: "1em",
              fontSize: "17px",
              textAlign: "justify",
            }}
          >
            {details.description}
          </p>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};
