import { useEffect, useState } from "react";
import {
  BookImage,
  Button,
  ButtonFavorite,
  Card,
  CardButtons,
} from "../Main/style";
import { Catalog_in, CatalogList } from "./style";
import { BookCard } from "../Catalog/Catalog";
import axios from "axios";

export function Favorite() {
  const baseUrl = "https://localhost:5001/";

  const [favorites, setFavorites] = useState<BookCard[]>([]);

  useEffect(() => {
    // Загрузка избранных книг при монтировании компонента
    fetch(baseUrl + "favorites/books") // URL вашего API
      .then((response) => response.json())
      .then((data) => setFavorites(data))
      .catch((error) =>
        console.error("Ошибка загрузки избранных книг:", error)
      );
  }, []);

  const toggleFavorite = async (bookId: number) => {
    try {
      const url = `${baseUrl}Favorites/${bookId}`;
      const response = await axios({
        method: "DELETE",
        url,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Удаляем книгу из состояния
        setFavorites((prev) => prev.filter((book) => book.id !== bookId));
      }
    } catch (error) {
      console.error("Ошибка при обновлении избранного:", error);
    }
  };

  return (
    <CatalogList>
      <p className="page-title" style={{ marginLeft: 17 }}>
        Избранное
      </p>
      <Catalog_in>
        {favorites.length > 0 ? (
          favorites.map((book) => (
            <Card key={book.id}>
              <div>
                <BookImage>
                  <img
                    src={baseUrl + `img/books/${book.bookImage}`}
                    alt={book.title}
                  />
                </BookImage>
                <div className="card_description">
                  <p className="price">{book.price} ₽</p>
                  <p className="book_title">{book.title}</p>
                  <p className="author">{book.author}</p>
                </div>
              </div>
              <CardButtons>
                <Button>
                  <p>КУПИТЬ</p>
                </Button>
                <ButtonFavorite>
                  {/* <img src={baseUrl + "img/heart1.png"} alt="В избранное" /> */}
                  <img
                    id={`favorite-${book.id}`}
                    src={baseUrl + "img/heart2.png"}
                    onClick={() => toggleFavorite(book.id)}
                  />
                </ButtonFavorite>
              </CardButtons>
            </Card>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: 20 }}>
            В избранном пока ничего нет.
          </p>
        )}{" "}
      </Catalog_in>
    </CatalogList>
  );
}
