import styled from "styled-components";

export const FormRegister = styled.form`
  max-width: 370px;
  width: 95%;
  max-height: 1000px;
  height: 100%;
  margin: 0 auto;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const DivLogo = styled.div`
  margin: 58px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 370px;
  width: 95%;
`;

export const DivTitle = styled.div`
  padding: 42px 0 28px 0;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const H1Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;

  color: #f8f9fa;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PInfoRegister = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;

  color: #868e96;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelRegister = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12.182px;
  line-height: 0px;

  color: #f8f9fa;

  margin-left: 10px;
  margin-bottom: 3px;
`;

export const InputsRegister = styled.input`
  max-width: 329.93px;
  width: 90%;
  padding: 16px 11px;

  background: #343b41;
  border: 1.2182px solid #343b41;
  border-radius: 4px;
  margin: 10px auto;
`;

export const SelectRegister = styled.select`
  max-width: 350.93px;
  width: 100%;
  height: 55px;
  margin: 10px auto;
  padding: 0px 16px 0px 16px;

  background: #343b41;
  border: 1.2182px solid #343b41;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  color: #868e96;
`;

export const Perror = styled.p`
  padding: 0px 0px 15px 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;

  color: #868e96;
`;
