import { useNavigate } from "react-router";
import { Button, Container, FormContainer, FormContainerTitle } from "./style";

export function AuthorisationRegistration() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px auto 0px",
      }}
    >
      <Container>
        <FormContainer>
          <FormContainerTitle>Войти</FormContainerTitle>
          <label htmlFor="login">Логин</label>
          <input id="login" placeholder="Введите логин" />
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" placeholder="Введите пароль" />
          <Button>Войти</Button>
        </FormContainer>

        <FormContainer>
          <FormContainerTitle>Регистрация</FormContainerTitle>
          <label htmlFor="registration_login">Логин</label>
          <input id="registration_login" placeholder="Введите логин" />

          <label htmlFor="registration_password">Пароль</label>
          <input
            type="password"
            id="registration_password"
            placeholder="Введите пароль"
          />
          <label htmlFor="registration_password_contribute">
            Подвердите пароль
          </label>
          <input
            type="password"
            id="registration_password_contribute"
            placeholder="Повторите пароль"
          />
          <Button>Зарегистрироваться</Button>
        </FormContainer>
      </Container>
      <Button
        style={{
          width: "fit-content",
          marginTop: 10,
          marginBottom: 0,
          paddingInline: 30,
        }}
      >
        <a
          href=""
          onClick={() => {
            navigate("/add_new_book");
            document.location.reload();
          }}
        >
          Добавить товар
        </a>
        <img
          style={{ height: "60%", marginLeft: 10 }}
          src="../static/plus.png"
          alt=""
        />
      </Button>
    </div>
  );
}
