import { Outlet, Route, useNavigate } from "react-router";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Catalog } from "../components/Catalog/Catalog";
import { Footer } from "../components/Footer/Footer";
import { About } from "../components/About/About";
import { Favorite } from "../components/Favorite/Favorite";
import { Cart } from "../components/Cart/Cart";
import { AuthorisationRegistration } from "../components/AuthorisationRegistration/AuthorisationRegistration";
import { AddNewBook } from "../components/AddNewBook/AddNewBook";
import { Promotions } from "../components/Promotions/Promotions";

export function Layout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export function MainRouter() {
  return (
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/authorisation_registration"
          element={<AuthorisationRegistration />}
        />
        <Route path="/add_new_book" element={<AddNewBook />} />
      </Route>
    </>
  );
}
