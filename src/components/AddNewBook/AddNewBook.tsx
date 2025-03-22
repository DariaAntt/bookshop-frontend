import axios from "axios";
import {
  Button,
  ErrorMess,
  FormContainer,
  FormContainerElement,
  FormContainerTitle,
  RadioBlock,
} from "./style";
import { useRef, useState } from "react";

export interface BookInfo {
  title: string;
  author: string;
  description: string;
  category: string;
  publishing: string;
  binding: string;
  year: number;
  ageLimit: number;
  price: number;
  bookImage: File;
}
const book = axios.create({ BASE_URL: "https://localhost:5001" });

async function sendToServer(
  title: string,
  author: string,
  description: string,
  category: string,
  publishing: string,
  binding: string,
  year: number,
  ageLimit: number,
  price: number,
  bookImage: File | null
) {
  if (!bookImage) {
    return;
  }
  const formData = new FormData();
  formData.append("title", title);
  formData.append("author", author);
  formData.append("description", description);
  formData.append("category", category);
  formData.append("publishing", publishing);
  formData.append("binding", binding);
  formData.append("year", year.toString());
  formData.append("ageLimit", ageLimit.toString());
  formData.append("price", price.toString());
  formData.append("bookImage", bookImage as File);

  return book.post("/AddNewBook", formData).then(function (response: any) {
    console.log(response);
  });
}

export function AddNewBook() {
  const validateTitle = (input: string) => {
    if (input.trim() === "") {
      return "Поле не должно быть пустым";
    }
    if ((input.length < 2 || input.length > 250) && input.trim() !== "") {
      return "Минимальная длина текста от 2 до 250 символов.";
    }
    return "";
  };
  const validateAuthor = (input: string) => {
    if (input.trim() === "") {
      return "Поле не должно быть пустым";
    }
    if (input.length < 2 || input.length > 200) {
      return "Минимальная длина текста от 2 до 200 символов.";
    }
    return "";
  };
  const validateDescription = (input: string) => {
    if (input.trim() === "") {
      return "Поле не должно быть пустым";
    }
    if (input.length < 100 || input.length > 1000) {
      return "Описание должно быть от 100 до 1000 символов.";
    }
    return "";
  };
  const validateCategory = (input: string) => {
    if (input.trim() === "") {
      return "Поле обязательно для заполнения.";
    }
    return "";
  };
  const validatePublishing = (input: string) => {
    if (input.trim() === "") {
      return "Поле обязательно для заполнения.";
    }
    return "";
  };
  const validateBinding = (input: string) => {
    if (input.trim() === "") {
      return "Поле обязательно для заполнения.";
    }
    return "";
  };
  const validateAgeLimit = (input: string) => {
    if (input.trim() === "") {
      return "Поле обязательно для заполнения.";
    }
    return "";
  };
  const validateYear = (input: string) => {
    const value = parseInt(input, 10);
    if (input.trim() === "") {
      return "Поле не должно быть пустым";
    }
    if (value < 0) {
      return "Число не должно быть отрицательным.";
    }
    if (value < 1900) {
      return "Минимальный год издания 1900.";
    }
    if (value > currentYear) {
      return "Максимальный год издания 2025.";
    }
    return "";
  };
  const validatePrice = (input: string) => {
    const value = parseFloat(input);
    if (input.trim() === "") {
      return "Поле не должно быть пустым";
    }
    if (value <= 0) {
      return "Число должно быть положительным.";
    }
    return "";
  };
  const validateBookImage = (file: File | null) => {
    const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB

    if (!file) {
      return "Выберите изображение";
    }
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      return "Допустимые форматы изображения: JPEG и PNG. Максимальный размер изображения 2 MB.";
    }
    if (file.size > maxSizeInBytes) {
      return "Размер изображения не должен превышать 2 MB.";
    }
    return "";
  };

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [errorTitle, setErrorTitle] = useState("");
  const [errorAuthor, setErrorAuthor] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorCategory, setErrorCategory] = useState("");
  const [errorPublishing, setErrorPublishing] = useState("");
  const [errorBinding, setErrorBinding] = useState("");
  const [errorYear, setErrorYear] = useState("");
  const [errorAgeLimit, setErrorAgeLimit] = useState("");
  const [errorPrice, setErrorPrice] = useState("");
  const [errorBookImage, setErrorBookImage] = useState("");
  const [formError, setFormError] = useState("");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [descriotion, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [publishing, setPublishing] = useState("");
  const [binding, setBinding] = useState("");
  const [year, setYear] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [price, setPrice] = useState("");
  const [bookImage, setBookImage] = useState<File | null>(null);

  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [isAuthorTouched, setIsAuthorTouched] = useState(false);
  const [isDescriptionTouched, setIsDescriptionTouched] = useState(false);
  const [isCategoryTouched, setIsCategoryTouched] = useState(false);
  const [isPublishingTouched, setIsPublishingTouched] = useState(false);
  const [isBindingTouched, setIsBindingTouched] = useState(false);
  const [isYearTouched, setIsYearTouched] = useState(false);
  const [isAgeLimitTouched, setIsAgeLimitTouched] = useState(false);
  const [isPriceTouched, setIsPriceTouched] = useState(false);
  const [isBookImageTouched, setIsBookImageTouched] = useState(false);

  const handleTitleBlur = () => {
    setIsTitleTouched(true);
    const errorMessage = validateTitle(title);
    setErrorTitle(errorMessage);
  };
  const handleAuthorBlur = () => {
    setIsAuthorTouched(true);
    const errorMessage = validateAuthor(author);
    setErrorAuthor(errorMessage);
  };
  const handleDescriptionBlur = () => {
    setIsDescriptionTouched(true);
    const errorMessage = validateDescription(descriotion);
    setErrorDescription(errorMessage);
  };
  const handleCategoryBlur = () => {
    setIsCategoryTouched(true);
    const errorMessage = validateCategory(category);
    setErrorCategory(errorMessage);
  };
  const handlePublishingBlur = () => {
    setIsPublishingTouched(true);
    const errorMessage = validatePublishing(publishing);
    setErrorPublishing(errorMessage);
  };
  const handleBindingBlur = () => {
    setIsBindingTouched(true);
    const errorMessage = validateBinding(binding);
    setErrorBinding(errorMessage);
  };
  const handleYearBlur = () => {
    setIsYearTouched(true);
    const errorMessage = validateYear(year);
    setErrorYear(errorMessage);
  };
  const handleAgeLimitBlur = () => {
    setIsAgeLimitTouched(true);
    const errorMessage = validateAgeLimit(ageLimit || "");
    setErrorAgeLimit(errorMessage);
  };
  const handlePriceBlur = () => {
    setIsPriceTouched(true);
    const errorMessage = validatePrice(price);
    setErrorPrice(errorMessage);
  };
  const handleBookImageBlur = () => {
    setIsBookImageTouched(true);
    const errorMessage = validateBookImage(bookImage);
    setErrorBookImage(errorMessage);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    const errorMessage = validateTitle(e.target.value);
    setErrorTitle(errorMessage);
  };
  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
    const errorMessage = validateAuthor(e.target.value);
    setErrorAuthor(errorMessage);
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    const errorMessage = validateDescription(e.target.value);
    setErrorDescription(errorMessage);
  };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    const errorMessage = validateCategory(e.target.value);
    setErrorCategory(errorMessage);
  };
  const handlePublishingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPublishing(e.target.value);
    const errorMessage = validatePublishing(e.target.value);
    setErrorPublishing(errorMessage);
  };
  const handleBindingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBinding(e.target.value);
    const errorMessage = validateBinding(e.target.value);
    setErrorBinding(errorMessage);
  };
  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
    const errorMessage = validateYear(e.target.value);
    setErrorYear(errorMessage);
  };
  const handleAgeLimitChange = (value: string) => {
    setAgeLimit(value);
    setErrorAgeLimit("");
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
    const errorMessage = validatePrice(e.target.value);
    setErrorPrice(errorMessage);
  };
  const handleBookImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null; // Получаем первый выбранный файл или null
    setBookImage(file); // Сохраняем объект File или null
    const errorMessage = validateBookImage(file); // Передаем объект File в валидатор
    setErrorBookImage(errorMessage);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const titleError = validateTitle(title);
    const authorError = validateAuthor(author);
    const descriptionError = validateDescription(descriotion);
    const categoryError = validateCategory(category);
    const publishingError = validatePublishing(publishing);
    const bindingError = validateBinding(binding);
    const yearError = validateYear(year);
    const priceError = validatePrice(price);
    const bookImageError = validateBookImage(bookImage);
    const ageLimitError = ageLimit ? "" : "Выберите возрастное ограничение.";

    setErrorTitle(titleError);
    setErrorAuthor(authorError);
    setErrorDescription(descriptionError);
    setErrorCategory(categoryError);
    setErrorPublishing(publishingError);
    setErrorBinding(bindingError);
    setErrorYear(yearError);
    setErrorPrice(priceError);
    setErrorBookImage(bookImageError);
    setErrorAgeLimit(ageLimitError);

    if (
      titleError ||
      authorError ||
      descriptionError ||
      categoryError ||
      publishingError ||
      bindingError ||
      yearError ||
      priceError ||
      bookImageError ||
      ageLimitError
    ) {
      setFormError(
        "Не все поля заполнены или введены ошибочные данные. Проверьте, пожалуйста, введенные данные."
      );
      return;
    }

    setFormError("");
    resetForm();

    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("author", author);
    // formData.append("description", descriotion);
    // formData.append("category", category);
    // formData.append("publishing", publishing);
    // formData.append("binding", binding);
    // formData.append("year", year);
    // formData.append("ageLimit", ageLimit || "");
    // formData.append("price", price.toString());
    // formData.append("bookImage", bookImage as File);

    // console.log("Отправляем данные:", Object.fromEntries(formData.entries()));
  };

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setDescription("");
    setCategory("");
    setPublishing("");
    setBinding("");
    setYear("");
    setAgeLimit("");
    setPrice("");
    setBookImage(null);
    setErrorTitle("");
    setErrorAuthor("");
    setErrorDescription("");
    setErrorCategory("");
    setErrorPublishing("");
    setErrorBinding("");
    setErrorYear("");
    setErrorAgeLimit("");
    setErrorPrice("");
    setErrorBookImage("");
    setFormError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormContainerTitle>Параметры нового товара</FormContainerTitle>

      {/* Название */}
      <FormContainerElement>
        <label htmlFor="title">Название книги</label>
        <input
          id="title"
          value={title}
          placeholder="Введите название книги"
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          // required
        />
        <p className="hint">От 2 до 250 символов.</p>
        {errorTitle && <ErrorMess>{errorTitle}</ErrorMess>}
      </FormContainerElement>

      {/* Автор */}
      <FormContainerElement>
        <label htmlFor="author">Автор книги</label>
        <input
          id="author"
          name="author"
          value={author}
          onChange={handleAuthorChange}
          onBlur={handleAuthorBlur}
          placeholder="Введите полное имя автора книги"
          // required
        />
        <p className="hint">До 200 символов.</p>
        {errorAuthor && <ErrorMess>{errorAuthor}</ErrorMess>}
      </FormContainerElement>

      {/* Аннотация */}
      <FormContainerElement>
        <label htmlFor="description">Аннотация к книге</label>
        <textarea
          id="description"
          name="description"
          value={descriotion}
          placeholder="Введите описание книги"
          onChange={handleDescriptionChange}
          onBlur={handleDescriptionBlur}
          // required
        ></textarea>
        <p className="hint">От 100 до 1000 символов.</p>
        {errorDescription && <ErrorMess>{errorDescription}</ErrorMess>}
      </FormContainerElement>

      {/* Категория */}
      <FormContainerElement>
        <label htmlFor="category_select">Категория</label>
        <select
          id="category_select"
          name="category"
          value={category}
          onChange={handleCategoryChange}
          onBlur={handleCategoryBlur}
          // required
        >
          <option value="">Выберите категорию</option>
          <option value="Детская литература">Детская литература</option>
          <option value="Исскуство">Исскуство</option>
          <option value="История. Общество">История. Общество</option>
          <option value="Комиксы">Комиксы</option>
          <option value="Медицина и здоровье">Медицина и здоровье</option>
          <option value="Наука. Техника. IT">Наука. Техника. IT</option>
          <option value="Образование">Образование</option>
          <option value="Подростковая литература">
            Подростковая литература
          </option>
          <option value="Психология">Психология</option>
          <option value="Художественная литература">
            Художественная литература
          </option>
        </select>
        {errorCategory && <ErrorMess>{errorCategory}</ErrorMess>}
      </FormContainerElement>

      {/* Издательство */}
      <FormContainerElement>
        <label htmlFor="publishing_select">Издательство</label>
        <select
          id="publishing_select"
          name="publishing"
          value={publishing}
          onChange={handlePublishingChange}
          onBlur={handlePublishingBlur}
          // required
        >
          <option value="">Выберите издетельство</option>
          <option value="АСТ">АСТ</option>
          <option value="Дрофа">Дрофа</option>
          <option value="Лабиринт">Лабиринт</option>
          <option value="Лайвбук">Лайвбук</option>
          <option value="РОСМЭН">РОСМЭН</option>
          <option value="Стрекоза">Стрекоза</option>
          <option value="Эксмо">Эксмо</option>
        </select>
        {errorPublishing && <ErrorMess>{errorPublishing}</ErrorMess>}
      </FormContainerElement>

      {/* Тип переплёта */}
      <FormContainerElement>
        <label htmlFor="binding_select">Тип переплёта</label>
        <select
          id="binding_select"
          name="binding"
          value={binding}
          onChange={handleBindingChange}
          onBlur={handleBindingBlur}
          // required
        >
          <option value="">Выберите тип переплёта</option>
          <option value="твердый">Твердый переплет</option>
          <option value="мягкий">Мягкий переплет</option>
        </select>
        {errorBinding && <ErrorMess>{errorBinding}</ErrorMess>}
      </FormContainerElement>

      {/* Год издания */}
      <FormContainerElement>
        <label htmlFor="year">Год издания</label>
        <input
          id="year"
          name="year"
          value={year}
          type="number"
          min="1900"
          max={currentYear.toString()}
          onChange={handleYearChange}
          onBlur={handleYearBlur}
          placeholder="Введите год издания книги"
          // required
        />
        <p className="hint">От 1900 до 2025.&ensp;Допустимые символы: цифры.</p>
        {errorYear && <ErrorMess>{errorYear}</ErrorMess>}
      </FormContainerElement>

      {/* Возрастное ограничение  */}
      <FormContainerElement>
        <label htmlFor="">Возрастное ограничение</label>
        <RadioBlock>
          <div className="input-radio">
            <input
              type="radio"
              id="age18"
              name="ageLimit"
              value="18"
              onChange={() => handleAgeLimitChange("18+")}
              onBlur={handleAgeLimitBlur}
              checked={ageLimit === "18+"}
            />
            <label htmlFor="age18" className="label-checkbox">
              18+
            </label>
          </div>
          <div className="input-radio">
            <input
              type="radio"
              id="age16"
              name="ageLimit"
              value="16"
              onChange={() => handleAgeLimitChange("16+")}
              onBlur={handleAgeLimitBlur}
              checked={ageLimit === "16+"}
            />
            <label htmlFor="age16" className="label-checkbox">
              16+
            </label>
          </div>
          <div className="input-radio">
            <input
              type="radio"
              id="age12"
              name="ageLimit"
              value="12"
              checked={ageLimit === "12+"}
              onChange={() => handleAgeLimitChange("12+")}
              onBlur={handleAgeLimitBlur}
            />
            <label htmlFor="age12" className="label-checkbox">
              12+
            </label>
          </div>
          <div className="input-radio">
            <input
              type="radio"
              id="age6"
              name="ageLimit"
              value="6"
              checked={ageLimit === "6+"}
              onChange={() => handleAgeLimitChange("6+")}
              onBlur={handleAgeLimitBlur}
            />
            <label htmlFor="age6" className="label-checkbox">
              6+
            </label>
          </div>
        </RadioBlock>
        <p
          id="age_error"
          style={{
            color: "red",
            display: "none",
            margin: 0,
            fontSize: 14,
            fontWeight: 200,
          }}
        >
          Выберите возрастное ограничение.
        </p>
        {errorAgeLimit && <ErrorMess>{errorAgeLimit}</ErrorMess>}
      </FormContainerElement>

      {/* Цена */}
      <FormContainerElement>
        <label htmlFor="price">Цена</label>
        <input
          name="price"
          value={price}
          id="price"
          type="number"
          min="1"
          onChange={handlePriceChange}
          onBlur={handlePriceBlur}
          placeholder="Введите цену книги"
          // required
        />
        <p className="hint">
          Положительное число.&ensp;Допустимые символы: цифры.
        </p>
        {errorPrice && <ErrorMess>{errorPrice}</ErrorMess>}
      </FormContainerElement>

      {/* Изображение */}
      <FormContainerElement>
        <label htmlFor="bookImage">Изображение</label>
        <input
          onChange={handleBookImageChange}
          onBlur={handleBookImageBlur}
          ref={fileInputRef}
          name="bookImage"
          id="bookImage"
          // value={bookImage}
          type="file"
          accept=".png, .jpeg"
        />
        <p className="hint">
          Допустимые форматы изображения: JPEG и PNG.&ensp;Максимальный размер
          изображения 2 MB.
        </p>
        {errorBookImage && <ErrorMess>{errorBookImage}</ErrorMess>}
      </FormContainerElement>

      <Button
        onClick={() =>
          sendToServer(
            title,
            author,
            descriotion,
            category,
            publishing,
            binding,
            parseInt(year),
            parseInt(ageLimit),
            parseFloat(price),
            bookImage
          )
        }
      >
        Добавить
      </Button>
      {formError && (
        <div
          style={{
            color: "red",
            marginTop: "1em",
            marginBottom: "1em",
            fontSize: "small",
            fontWeight: 600,
          }}
        >
          {formError}
        </div>
      )}
    </FormContainer>
  );
}
