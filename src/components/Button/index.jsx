import React from "react";
import {
  ButtonCadastro,
  ButtonEntrar,
  ButtonInput,
  ButtonReturnRegister,
  Link,
  LinkReturn,
} from "./style";

export const ButtonLogin = () => {
  return <ButtonEntrar type="submit">Entrar</ButtonEntrar>;
};

export const ButtonRegister = () => {
  return <Link to={"/register"}>Cadastre-se</Link>;
};

export const ButtonRegisterInput = () => {
  return <ButtonInput type="submit">Cadastrar</ButtonInput>;
};

export const ButtonReturn = () => {
  return <LinkReturn to={"/"}>Voltar</LinkReturn>;
};
