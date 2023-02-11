import React from "react";
import {
  DivInputs,
  DivLogo,
  DivTitle,
  FormRegister,
  H1Title,
  InputsRegister,
  LabelRegister,
  PInfoRegister,
  SelectRegister,
} from "./style";
import { ButtonRegisterInput, ButtonReturn } from "../../components/Button";
import { useForm } from "react-hook-form";

export const FormRegisterTeste = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <FormRegister onSubmit={(handleSubmit = { submit })}>
        <DivTitle>
          <H1Title>Crie sua conta</H1Title>
          <PInfoRegister>Rapido e grátis, vamos nessa</PInfoRegister>
        </DivTitle>
        <DivInputs>
          <LabelRegister htmlFor="name">Nome</LabelRegister>
          <InputsRegister
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
          />
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="email">Email</LabelRegister>
          <InputsRegister
            type="text"
            id="email"
            placeholder="Digite aqui seu email"
          />
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="senha">Senha</LabelRegister>
          <InputsRegister
            type="password"
            id="senha"
            placeholder="Digite aqui sua senha"
          />
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="confirmarSenha">
            Confirmar senha
          </LabelRegister>
          <InputsRegister
            type="text"
            id="confirmarSenha"
            placeholder="Digite novamente sua senha"
          />
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="bio">Bio</LabelRegister>
          <InputsRegister type="text" id="bio" placeholder="Fale sobre você" />
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="contato">Contato</LabelRegister>
          <InputsRegister
            type="text"
            id="contato"
            placeholder="Opção de contato"
          />
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="selecionarModulo">
            Selecionar modulo
          </LabelRegister>
          <SelectRegister name="" id="selecionarModulo">
            <option value="m1">M1</option>
            <option value="m2">M2</option>
            <option value="m3">M3</option>
            <option value="m4">M4</option>
            <option value="m5">M5</option>
            <option value="m6">M6</option>
          </SelectRegister>
        </DivInputs>
        <div>
          <ButtonRegisterInput />
        </div>
      </FormRegister>
    </div>
  );
};
