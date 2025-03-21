import styled from "styled-components";

export const MyHeader = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: stretch;
  background-color: white;
  box-shadow: 5px 5px 8px rgb(238, 238, 238);
  color: #7e7e7e;
`;

export const A = styled.a`
  display: flex;
  border: 10px #cb2f1ae0 solid;
`;
export const HeaderRight = styled.div`
  margin-right: 50px;
  height: 80%;
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-decoration-line: none;

    img {
      height: 100%;
      margin-inline: auto;
    }
  }

  p {
    margin-top: 2px;
    margin-inline: 0px;
    font-size: 14px;
    color: rgb(0, 0, 0);
    font-weight: 600;
  }
`;

export const Navigation = styled.nav`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    list-style: none;
  }

  a {
    color: #000000;
    font-size: 22px;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    color: #cb2f1ae0;
  }
`;
