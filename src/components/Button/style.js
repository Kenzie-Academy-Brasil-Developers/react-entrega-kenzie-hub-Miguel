import styled from "styled-components";
import { Link as linkRouter } from "react-router-dom";

export const ButtonEntrar = styled.button`
  max-width: 324px;
  height: 48px;
  margin-bottom: 34px;

  background: #ff577f;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;
  color: #ffffff;
`;

export const ButtonCadastro = styled.button`
  max-width: 324px;
  height: 48px;
  margin-top: 22px;

  background: #868e96;

  border: 1.2182px solid #868e96;
  border-radius: 4px;
`;

export const ButtonInput = styled.button`
  max-width: 350px;
  width: 100%;
  height: 48px;

  background: #59323f;

  border: 1.2182px solid #59323f;
  border-radius: 4px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #f8f9fa;
`;

export const ButtonReturnRegister = styled.button`
  width: 67.49px;
  height: 45.11px;
  padding: 0px 16.2426px;

  background: #212529;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  color: #f8f9fa;
`;

export const Link = styled(linkRouter)`
  max-width: 324px;
  height: 48px;
  margin-top: 22px;

  background: #868e96;

  border: 1.2182px solid #868e96;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkReturn = styled(linkRouter)`
  width: 67.49px;
  height: 45.11px;
  padding: 0px 16.2426px;

  background: #212529;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  color: #f8f9fa;

  display: flex;
  align-items: center;
  justify-content: center;
`;
