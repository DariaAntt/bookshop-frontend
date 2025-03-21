import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 20px 70px;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormContainer = styled.form`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

export const FilterElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 16px;

  p {
    margin: 0px;
    margin-left: 0px;
  }

  label {
    display: flex;
    margin-top: 0px;
  }

  .filter-element-name {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p.filter-element-name {
    margin-bottom: 5px;
  }

  .input-field {
    width: 43%;
  }

  .radio-label {
    display: flex;
    margin-bottom: 5px;
  }
  .radio-label input {
    margin: 0;
  }

  label.label-checkbox {
    margin-top: 5px;
  }

  select,
  input {
    padding: 7px;
    border: 1px solid #d1d6da;
    border-radius: 6px;
    color: #353637;
    font-size: 16px;
  }

  select {
    overflow-y: 30px;
  }

  option {
    overflow-y: scroll;
  }
`;

export const CatalogList = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: column;
`;

export const Catalog_in = styled.div`
  display: flex;
  justify-content: start;
  margin: 0px;
  flex-wrap: wrap;
`;
