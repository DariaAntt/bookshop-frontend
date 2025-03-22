import { useState, useEffect, useRef } from "react";
import {
  BookImage,
  Button,
  Card,
  CardButtons,
  MainSliderContainer,
  Recommendations,
  Slide,
  Slider,
  SliderContainer,
} from "./style";
import { BookCard } from "../Catalog/Catalog";

export function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideCount = 3; // Количество слайдов

  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const [books, setBooks] = useState<BookCard[]>([]);

  const showNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  const showBackSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  const updateSliderPosition = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0].clientWidth;
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * slideWidth
      }px)`;
    }
  };

  useEffect(() => {
    // первая загрузка книг
    fetch(BASE_URL + "/Catalog")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.slice(0, 5));
      })
      .catch((error) => console.error("Ошибка при загрузке книг:", error));

    updateSliderPosition();
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => updateSliderPosition();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <MainSliderContainer>
        <a href="#" className="arrow-back" onClick={showBackSlide}>
          &#10094;
        </a>
        <SliderContainer>
          <Slider ref={sliderRef}>
            <Slide>
              <img src="/static/image.png" alt="Акция 1" />
            </Slide>
            <Slide>
              <img src="/static/image1.png" alt="Акция 2" />
            </Slide>
            <Slide>
              <img src="/static/image2.png" alt="Акция 3" />
            </Slide>
          </Slider>
        </SliderContainer>
        <a href="#" className="arrow-next" onClick={showNextSlide}>
          &#10095;
        </a>
      </MainSliderContainer>

      <h1 style={{ marginLeft: 60 }}>Какие книги почитать: выбор редакции</h1>

      <Recommendations>
        {books.map((book, index) => (
          <Card
            key={index}
            style={{
              marginBottom: "0",
              height: "min-content",
              paddingInline: "10px",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <BookImage>
                <img
                  src={BASE_URL + "/img/books/" + book.bookImage}
                  alt={book.title}
                />
              </BookImage>
              <div className="card_description" style={{ height: "120px" }}>
                <p className="price">{book.price} ₽</p>
                <p className="book_title">{book.title}</p>
                <p className="author">{book.author}</p>
              </div>
            </div>
          </Card>
        ))}
      </Recommendations>
    </>
  );
}
