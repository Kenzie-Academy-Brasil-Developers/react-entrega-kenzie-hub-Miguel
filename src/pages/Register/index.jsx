import React, { useContext } from "react";
import { ButtonRegisterInput, ButtonReturn } from "../../components/Button";
import {
  DivInputs,
  DivLogo,
  DivTitle,
  FormRegister,
  H1Title,
  InputsRegister,
  LabelRegister,
  Perror,
  PInfoRegister,
  SelectRegister,
} from "./style";
import Logo from "./../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../providers/UserContext";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório!"),
  email: yup.string().required("Email é obrigatório!"),
  bio: yup.string().required("Bio é obrigatório!"),
  contact: yup.string().required("Contato é obrigatório!"),
  course_module: yup.string().required("Modulo é obrigatório!"),
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
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
          <LabelRegister htmlFor="name">Nome</LabelRegister>
          <InputsRegister
            type="text"
            {...register("name")}
            id="name"
            placeholder="Digite aqui seu nome"
          />
          <Perror>{errors.name?.message}</Perror>
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="email">Email</LabelRegister>
          <InputsRegister
            type="text"
            {...register("email")}
            id="email"
            placeholder="Digite aqui seu email"
          />
          <Perror>{errors.email?.message}</Perror>
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="senha">Senha</LabelRegister>
          <InputsRegister
            type="password"
            {...register("password")}
            id="password"
            placeholder="Digite aqui sua senha"
          />
          <Perror>{errors.password?.message}</Perror>
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="confirmarSenha">
            Confirmar senha
          </LabelRegister>
          <InputsRegister
            type="password"
            {...register("passwordConfirmation")}
            id="confirmarSenha"
            placeholder="Digite novamente sua senha"
          />
          <Perror>{errors.passwordConfirmation?.message}</Perror>
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="bio">Bio</LabelRegister>
          <InputsRegister
            type="text"
            {...register("bio")}
            id="bio"
            placeholder="Fale sobre você"
          />
          <Perror>{errors.bio?.message}</Perror>
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="contato">Contato</LabelRegister>
          <InputsRegister
            type="text"
            {...register("contact")}
            id="contact"
            placeholder="Opção de contato"
          />
          <Perror>{errors.contact?.message}</Perror>
        </DivInputs>
        <DivInputs>
          <LabelRegister htmlFor="selecionarModulo">
            Selecionar modulo
          </LabelRegister>
          <SelectRegister
            name=""
            {...register("course_module")}
            id="course_module"
          >
            <option value="m1">Módulo 1</option>
            <option value="m2">Módulo 2</option>
            <option value="m3">Módulo 3</option>
            <option value="m4">Módulo 4</option>
            <option value="m5">Módulo 5</option>
            <option value="m6">Módulo 6</option>
          </SelectRegister>
          <Perror>{errors.course_module?.message}</Perror>
        </DivInputs>
        <div>
          <ButtonRegisterInput />
        </div>
      </FormRegister>
    </>
  );
};
