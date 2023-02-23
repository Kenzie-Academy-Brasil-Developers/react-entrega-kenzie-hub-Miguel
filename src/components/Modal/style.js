import styled from "styled-components";

export const DivModal = styled.div`
  max-width: 369px;
  width: 95%;
  height: 372px;

  display: flex;
  flex-direction: column;

  //position: fixed;
  left: 40%;

  background: #212529;

  border-radius: 4px;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;

    color: #f8f9fa;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #f8f9fa;
  }

  label {
    color: #f8f9fa;
    margin-bottom: 22px;
  }

  input {
    height: 48px;
    padding: 0px 16.2426px;
    margin-bottom: 22px;

    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: #f8f9fa;
  }

  select {
    padding: 0px 16.2426px;
    height: 48px;

    background: #343b41;

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: #f8f9fa;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`;

export const DivTitleModal = styled.div`
  height: 50px;
  padding: 0px 15px 0px 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #343b41;
  border-radius: 4px 4px 0px 0px;
`;

export const ButtonCloseModal = styled.button`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #868e96;
  background: transparent;
  border: none;
`;

export const ButtonAddTechs = styled.button`
  height: 48px;
  padding: 0px 22.3336px;
  margin-top: 20px;

  background: #ff577f;
  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
`;

export const DivModalopacity = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
