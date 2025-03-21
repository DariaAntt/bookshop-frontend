import { A, MyHeader, HeaderRight, Navigation } from "./style";
import { useNavigate } from "react-router";

export function Header() {
  const baseUrl = "https://localhost:5001/";
  const navigate = useNavigate();
  return (
    <MyHeader>
      <A>
        <img src={baseUrl + "img/logo.jpg"} />
      </A>
      <Navigation>
        <ul>
          <li>
            <a
              href=""
              onClick={() => {
                navigate("/");
                document.location.reload();
              }}
            >
              Главная
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => {
                navigate("/catalog");
                document.location.reload();
              }}
            >
              Каталог
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => {
                navigate("/promotions");
                document.location.reload();
              }}
            >
              Акции
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => {
                navigate("/about");
                document.location.reload();
              }}
            >
              О нас
            </a>
          </li>
        </ul>
      </Navigation>

      <HeaderRight>
        <a
          href=""
          onClick={() => {
            navigate("/favorite");
            document.location.reload();
          }}
        >
          <img src={baseUrl + "img/favorite.png"} alt="Избранное" />
          <p>Избранное</p>
        </a>
        <a
          href=""
          onClick={() => {
            navigate("/cart");
            document.location.reload();
          }}
        >
          <img src={baseUrl + "img/shopping-basket.png"} alt="Корзина" />
          <p>Корзина</p>
        </a>
        <a
          href=""
          onClick={() => {
            navigate("/authorisation_registration");
            document.location.reload();
          }}
        >
          <img src={baseUrl + "img/sign-in.png"} alt="Вход" />
          <p>Войти</p>
        </a>
      </HeaderRight>
    </MyHeader>
  );
}
