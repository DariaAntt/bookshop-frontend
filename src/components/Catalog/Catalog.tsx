import {
  BookImage,
  Button,
  ButtonFavorite,
  Card,
  CardButtons,
} from "../Main/style";
import {
  Catalog_in,
  CatalogList,
  Container,
  FilterElement,
  FormContainer,
  MainContainer,
} from "./style";

import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import qs from "qs";
import { BookModal } from "../BookCardModal/BookCardModal";

export interface BookCard {
  id: number;
  title: string;
  author: string;
  price: number;
  bookImage: string;
}

export interface BookDetails {
  id: number;
  category: string;
  publishing: string;
  binding: string;
  year: number;
  ageLimit: number;
  bookImage: string;
}

interface BookFilter {
  categories: string[];
  minPrice: number | null;
  maxPrice: number | null;
  authors: string[];
  publishers: string[];
  bindingType: string | null;
  minYear: number | null;
  maxYear: number | null;
  ageLimits: number[];
}

export function Catalog() {
  const BASE_URL = "https://bookshop-backend-latest.onrender.com";
  const [books, setBooks] = useState<BookCard[]>([]);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedBook, setSelectedBook] = useState<BookCard | null>(null);
  const [selectedBinding, setSelectedBinding] = useState<string | null>(null);

  const [bookDetails, setBookDetails] = useState<{ [key: number]: any }>({});
  const [filters, setFilters] = useState<BookFilter>({
    categories: [],
    minPrice: null,
    maxPrice: null,
    authors: [],
    publishers: [],
    bindingType: null,
    minYear: null,
    maxYear: null,
    ageLimits: [],
  });

  const [authorOptions, setAuthorOptions] = useState<
    { value: string; label: string }[]
  >([]);

  const [publisherOptions, setPublisherOptions] = useState<
    { value: string; label: string }[]
  >([]);

  const categoryOptions = [
    { value: "Детская литература", label: "Детская литература" },
    { value: "Искусство", label: "Искусство" },
    { value: "История. Общество", label: "История. Общество" },
    { value: "Комиксы", label: "Комиксы" },
    { value: "Медицина и здоровье", label: "Медицина и здоровье" },
    { value: "Наука. Техника. IT", label: "Наука. Техника. IT" },
    { value: "Образование", label: "Образование" },
    { value: "Подростковая литература", label: "Подростковая литература" },
    { value: "Психология", label: "Психология" },
    { value: "Художественная литература", label: "Художественная литература" },
  ];

  useEffect(() => {
    // первая загрузка книг
    fetch(BASE_URL + "/Catalog")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        if (data.length < 8) setHasMore(false);
      })
      .catch((error) => console.error("Ошибка при загрузке книг:", error));

    // инициализация состояния избранного
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/Favorites`);
        const favoriteIds = response.data.map((fav: any) => fav.bookId);
        setFavorites(new Set(favoriteIds));
      } catch (error) {
        console.error("Ошибка при загрузке избранного:", error);
      }
    };

    fetchFavorites();

    // Загрузка авторов
    axios
      .get<string[]>(BASE_URL + "/Catalog/authors")
      .then((response) => {
        const authors = response.data.map((author) => ({
          value: author,
          label: author,
        }));
        setAuthorOptions(authors); // Сохраняем авторов в состояние
      })
      .catch((error) => {
        console.error("Ошибка при загрузке авторов:", error);
      });

    // Загрузка издательств
    axios
      .get<string[]>(BASE_URL + "/Catalog/publishings")
      .then((response) => {
        const publishers = response.data.map((publisher) => ({
          value: publisher,
          label: publisher,
        }));
        setPublisherOptions(publishers); // Сохраняем авторов в состояние
      })
      .catch((error) => {
        console.error("Ошибка при загрузке издательсвт:", error);
      });
  }, []);

  // Пагинация
  const loadMoreBooks = async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const queryString = qs.stringify(
        {
          skip: page * 8,
          take: 8,
          ...filters,
        },
        { arrayFormat: "repeat" }
      );

      const response = await axios.get<BookCard[]>(
        `${BASE_URL}Catalog/paged?${queryString}`
      );

      if (response.data.length > 0) {
        setBooks((prev) => [...prev, ...response.data]);
        setPage((prev) => prev + 1);
        if (response.data.length < 8) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Ошибка при загрузке книг:", error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = async () => {
    try {
      const response = await axios.post<BookCard[]>(
        `${BASE_URL}Catalog/filtered`,
        filters
      );
      setBooks(response.data);
      setPage(1);
      setHasMore(response.data.length === 8); // Проверяем, есть ли еще данные
    } catch (error) {
      console.error("Ошибка при применении фильтров:", error);
    }
  };

  const handleBookClick = async (book: BookCard) => {
    // Получаем детальные данные о книге
    await getBookDetails(book.id);

    // Открываем модальное окно
    setSelectedBook(book);
  };

  const getBookDetails = async (id: number) => {
    try {
      const response = await axios.get(`${BASE_URL}Catalog/${id}`);
      setBookDetails((prev) => ({
        ...prev,
        [id]: response.data, // Сохраняем данные в объекте по id книги
      }));
    } catch (error) {
      console.error("Ошибка при загрузке данных о книге:", error);
    }
  };

  const resetBindingType = () => {
    setFilters((prev) => ({ ...prev, bindingType: null }));
    setSelectedBinding(null);
  };

  const isFavorite = (bookId: number) => favorites.has(bookId);

  const toggleFavorite = async (bookId: number) => {
    try {
      const url = `${BASE_URL}Favorites/${bookId}`;
      const method = isFavorite(bookId) ? "DELETE" : "POST";

      const response = await axios({
        method,
        url,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { icon } = response.data;

      setFavorites((prev) => {
        const newFavorites = new Set(prev);
        if (isFavorite(bookId)) {
          newFavorites.delete(bookId); // Удаление из избранного
        } else {
          newFavorites.add(bookId); // Добавление в избранное
        }
        return newFavorites;
      });

      // Обновление иконки кнопки
      const button = document.querySelector(`#favorite-${bookId}`);
      if (button) {
        button.setAttribute("src", BASE_URL + icon);
      }
    } catch (error) {
      console.error("Ошибка при обновлении избранного:", error);
    }
  };

  return (
    <MainContainer>
      <p className="page-title">Каталог книг</p>
      <Container>
        {/* --------------------- Фильтры --------------------- */}
        <FormContainer>
          {/* Категория */}
          <FilterElement>
            <label htmlFor="category_select" className="filter-element-name">
              Категория
            </label>
            <Select
              options={categoryOptions}
              placeholder="Выберите категории"
              isMulti
              onChange={(selected) =>
                setFilters((prev) => ({
                  ...prev,
                  categories: selected.map((opt) => opt.value),
                }))
              }
            />
          </FilterElement>

          {/* Цена */}
          <FilterElement>
            <label htmlFor="min_price" className="filter-element-name">
              Цена
            </label>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                className="input-field"
                type="number"
                name="min-price"
                id="min_price"
                min="0"
                placeholder="мин."
                value={filters.minPrice || ""}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setFilters((prev) => ({
                    ...prev,
                    minPrice: e.target.value ? Number(e.target.value) : null,
                  }));
                }}
                onKeyDown={(e) => {
                  const allowedKeys = [
                    "Backspace",
                    "Delete",
                    "ArrowLeft",
                    "ArrowRight",
                    "Tab", // Разрешаем Tab для удобства навигации
                  ];

                  if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
                    e.preventDefault(); // Блокируем ввод недопустимых символов
                  }
                }}
              />
              <input
                className="input-field"
                type="number"
                name="max-price"
                placeholder="макс."
                min="0"
                value={filters.maxPrice || ""}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    maxPrice: e.target.value ? Number(e.target.value) : null,
                  }))
                }
                onKeyDown={(e) => {
                  const allowedKeys = [
                    "Backspace",
                    "Delete",
                    "ArrowLeft",
                    "ArrowRight",
                    "Tab", // Разрешаем Tab для удобства навигации
                  ];

                  if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
                    e.preventDefault(); // Блокируем ввод недопустимых символов
                  }
                }}
              />
            </div>
          </FilterElement>

          {/* Авторы */}
          <FilterElement>
            <label htmlFor="author_select" className="filter-element-name">
              Авторы
            </label>
            <Select
              placeholder="Выберите авторов"
              options={authorOptions}
              isMulti
              onChange={(selected) =>
                setFilters((prev) => ({
                  ...prev,
                  authors: selected.map((opt) => opt.value),
                }))
              }
            />
          </FilterElement>

          {/* Издательство */}
          <FilterElement>
            <label htmlFor="publishing_select" className="filter-element-name">
              Издательство
            </label>
            <Select
              options={publisherOptions}
              placeholder="Выберите издательства"
              isMulti
              onChange={(selected) =>
                setFilters((prev) => ({
                  ...prev,
                  publishers: selected.map((opt) => opt.value),
                }))
              }
            />
          </FilterElement>

          {/* Переплет */}
          <FilterElement>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className="filter-element-name">Тип переплёта</p>
              {selectedBinding && (
                <button
                  style={{
                    fontFamily:
                      "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS",
                    color: "rgb(195, 0, 0)",
                    fontSize: "14px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    marginBottom: "5px",
                  }}
                  onClick={resetBindingType}
                >
                  Сбросить
                </button>
              )}
            </div>
            <label className="radio-label">
              <input
                type="radio"
                name="cover"
                checked={filters.bindingType === "твердый"}
                onChange={() => {
                  setFilters((prev) => ({ ...prev, bindingType: "твердый" }));
                  setSelectedBinding("твердый");
                }}
              />
              <p> Твердый переплет</p>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="cover"
                checked={filters.bindingType === "мягкий"}
                onChange={() => {
                  setFilters((prev) => ({ ...prev, bindingType: "мягкий" }));
                  setSelectedBinding("мягкий");
                }}
              />
              <p> Мягкий переплет</p>
            </label>
          </FilterElement>

          {/* Год */}
          <FilterElement>
            <p className="filter-element-name">Год издания</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                className="input-field"
                type="number"
                placeholder="мин."
                min={1900}
                max={2025}
                value={filters.minYear || ""}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    minYear: e.target.value ? Number(e.target.value) : null,
                  }))
                }
                onKeyDown={(e) => {
                  const allowedKeys = [
                    "Backspace",
                    "Delete",
                    "ArrowLeft",
                    "ArrowRight",
                    "Tab", // Разрешаем Tab для удобства навигации
                  ];

                  if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
                    e.preventDefault(); // Блокируем ввод недопустимых символов
                  }
                }}
              />
              <input
                className="input-field"
                type="number"
                placeholder="макс."
                min={1900}
                max={2025}
                value={filters.maxYear || ""}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    maxYear: e.target.value ? Number(e.target.value) : null,
                  }))
                }
                onKeyDown={(e) => {
                  const allowedKeys = [
                    "Backspace",
                    "Delete",
                    "ArrowLeft",
                    "ArrowRight",
                    "Tab", // Разрешаем Tab для удобства навигации
                  ];

                  if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
                    e.preventDefault(); // Блокируем ввод недопустимых символов
                  }
                }}
              />
            </div>
          </FilterElement>

          {/* Возраст */}
          <FilterElement>
            <p className="filter-element-name">Возрастное ограничение</p>
            <label htmlFor="year18" className="label-checkbox">
              <input
                className="label-checkbox"
                type="checkbox"
                id="year18"
                checked={filters.ageLimits.includes(18)}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    ageLimits: e.target.checked
                      ? [...prev.ageLimits, 18]
                      : prev.ageLimits.filter((age) => age !== 18),
                  }))
                }
              />
              <p>18+</p>
            </label>
            <label htmlFor="year16" className="label-checkbox">
              <input
                className="label-checkbox"
                type="checkbox"
                id="year16"
                checked={filters.ageLimits.includes(16)}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    ageLimits: e.target.checked
                      ? [...prev.ageLimits, 16]
                      : prev.ageLimits.filter((age) => age !== 16),
                  }))
                }
              />
              <p>16+</p>
            </label>
            <label htmlFor="year12" className="label-checkbox">
              <input
                className="label-checkbox"
                type="checkbox"
                id="year12"
                checked={filters.ageLimits.includes(12)}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    ageLimits: e.target.checked
                      ? [...prev.ageLimits, 12]
                      : prev.ageLimits.filter((age) => age !== 12),
                  }))
                }
              />
              <p>12+</p>
            </label>
            <label htmlFor="year6" className="label-checkbox">
              <input
                className="label-checkbox"
                type="checkbox"
                id="year6"
                checked={filters.ageLimits.includes(6)}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    ageLimits: e.target.checked
                      ? [...prev.ageLimits, 6]
                      : prev.ageLimits.filter((age) => age !== 6),
                  }))
                }
              />
              <p>6+</p>
            </label>{" "}
          </FilterElement>

          <Button
            type="button"
            style={{ width: "100%" }}
            onClick={applyFilters}
          >
            <p>ПРИМЕНИТЬ</p>
          </Button>
        </FormContainer>

        {/* --------------------- Список товаров --------------------- */}
        <CatalogList>
          <Catalog_in>
            {books.map((book, index) => (
              <Card key={index}>
                <div>
                  <BookImage>
                    <img
                      src={BASE_URL + "/img/books/" + book.bookImage}
                      alt={book.title}
                      onClick={() => handleBookClick(book)}
                    />
                  </BookImage>
                  <div className="card_description">
                    <p className="price">{book.price} ₽</p>
                    <p
                      className="book_title"
                      onClick={() => handleBookClick(book)}
                    >
                      {book.title}
                    </p>
                    <p className="author">{book.author}</p>
                  </div>
                </div>
                <CardButtons>
                  <Button>
                    <p>КУПИТЬ</p>
                  </Button>
                  <ButtonFavorite>
                    {/* <img src={BASE_URL + "/img/heart1.png"} alt="В избранное" /> */}
                    <img
                      id={`favorite-${book.id}`}
                      src={
                        isFavorite(book.id)
                          ? BASE_URL + "/img/heart2.png"
                          : BASE_URL + "/img/heart1.png"
                      }
                      alt="В избранное"
                      onClick={() => toggleFavorite(book.id)}
                    />
                  </ButtonFavorite>
                </CardButtons>
              </Card>
            ))}
          </Catalog_in>
          {hasMore && (
            <Button
              style={{ width: "100%", marginTop: 20 }}
              onClick={loadMoreBooks}
              disabled={loading}
            >
              <p>{loading ? "ЗАГРУЗКА..." : "ЗАГРУЗИТЬ ЕЩЁ"}</p>
            </Button>
          )}
        </CatalogList>
      </Container>
      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          details={bookDetails[selectedBook.id]}
        />
      )}
    </MainContainer>
  );
}
