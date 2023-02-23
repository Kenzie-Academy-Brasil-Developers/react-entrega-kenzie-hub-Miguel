import styled from "styled-components";

export const DivModalEdit = styled.div`
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
export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
  gap: 5px;
`;

export const ButtonAttTech = styled.button`
  padding: 0px 22.3336px;
  height: 52px;

  background: #59323f;
  border: 1.2182px solid #59323f;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
`;

export const ButtonDelete = styled.button`
  padding: 0px 22.3336px;
  height: 52px;

  background: #868e96;
  border: 1.2182px solid #868e96;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
`;
