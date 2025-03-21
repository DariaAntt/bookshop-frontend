import {
  CartSummary,
  CountButton,
  Delete,
  DeleteButton,
  MainContainer,
  OrderButton,
  Price,
  ProductCard,
  ProductDetails,
  ProductImage,
  ProductsList,
  Quantity,
  QuantityPrice,
} from "./style";

export function Cart() {
  const baseUrl = "https://localhost:5001/";

  return (
    <MainContainer>
      <p className="page-title">Корзина</p>
      <div style={{ display: "flex" }}>
        <ProductsList>
          <ProductCard>
            <ProductImage>
              <img src={baseUrl + "img/books/onegin.png"} />
            </ProductImage>
            <ProductDetails>
              Евгений Онегин с комментариями Ю. М. Лотмана. В 2-х книгах
              <p>Александр Пушкин</p>
            </ProductDetails>
            <QuantityPrice>
              <Quantity>
                <CountButton>-</CountButton>
                <input type="text" value="1" readOnly />
                <CountButton>+</CountButton>
              </Quantity>
              <Price>
                <span>1900 ₽</span>
              </Price>
              <DeleteButton>
                <Delete>
                  <img src={baseUrl + "img/delete.png"} />
                </Delete>
              </DeleteButton>
            </QuantityPrice>
          </ProductCard>
        </ProductsList>
        <CartSummary>
          <div style={{ fontSize: 16, fontWeight: 400 }}>
            <p>Количество товаров:</p>
            <p>
              <span>1</span> шт.
            </p>
          </div>
          <div>
            <p>Итого:</p>
            <p>
              <span className="total-price">1900</span>₽
            </p>
          </div>
          <OrderButton>ПЕРЕЙТИ К ОФОРМЛЕНИЮ</OrderButton>
        </CartSummary>
      </div>
    </MainContainer>
  );
}
