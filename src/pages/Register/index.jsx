import React from "react";
import { ButtonRegisterInput, ButtonReturn } from "../../components/Button";
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
import Logo from "./../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { api } from "../../Services/";

const schema = yup.object({
  name: yup.string().required("é obrigatório!"),
  email: yup.string().required("é obrigatório!"),
  bio: yup.string().required("é obrigatório!"),
  contact: yup.string().required("é obrigatório!"),
  course_module: yup.string().required("é obrigatório!"),
  password: yup
    .string()
    .matches(/(\d)/, "Deve conter ao menos 1 Número")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
    .matches(/.{8,}/, "Deve conter 8 caracteres"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmação de senha deve ser igual a senha")
    .required("Confirmação obrigatoria!"),
});

export const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const registerUser = async (data) => {
    console.log(data);

    try {
      await api.post("/users", data);
      navigate("/");
    } catch (error) {
      console.error(error);
      reset();
    }
  };

  return (
    <>
      <DivLogo>
        <img src={Logo} />
        <ButtonReturn />
      </DivLogo>
      <FormRegister onSubmit={handleSubmit(registerUser)}>
        <DivTitle>
          <H1Title>Crie sua conta</H1Title>
          <PInfoRegister>Rapido e grátis, vamos nessa</PInfoRegister>
        </DivTitle>
        <DivInputs>
          <LabelRegister htmlFor="name">
            Nome
            <p>{errors.name?.message}</p>
          </LabelRegister>
          <InputsRegister
            type="text"
            {...register("name")}
            id="name"
            placeholder="Digite aqui seu nome"
          />
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="email">
            Email
            <p>{errors.email?.message}</p>
          </LabelRegister>
          <InputsRegister
            type="text"
            {...register("email")}
            id="email"
            placeholder="Digite aqui seu email"
          />
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="senha">
            Senha
            <p>{errors.password?.message}</p>
          </LabelRegister>
          <InputsRegister
            type="password"
            {...register("password")}
            id="password"
            placeholder="Digite aqui sua senha"
          />
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="confirmarSenha">
            Confirmar senha
            <p>{errors.passwordConfirmation?.message}</p>
          </LabelRegister>
          <InputsRegister
            type="password"
            {...register("passwordConfirmation")}
            id="confirmarSenha"
            placeholder="Digite novamente sua senha"
          />
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="bio">
            Bio
            <p>{errors.bio?.message}</p>
          </LabelRegister>
          <InputsRegister
            type="text"
            {...register("bio")}
            id="bio"
            placeholder="Fale sobre você"
          />
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="contato">
            Contato
            <p>{errors.contact?.message}</p>
          </LabelRegister>
          <InputsRegister
            type="text"
            {...register("contact")}
            id="contact"
            placeholder="Opção de contato"
          />
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="selecionarModulo">
            Selecionar modulo
            <p>{errors.course_module?.message}</p>
          </LabelRegister>
          <SelectRegister
            name=""
            {...register("course_module")}
            id="course_module"
          >
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
    </>
  );
};
