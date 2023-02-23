import { ButtonLogin, ButtonRegister } from "../../components/Button";
import {
  DivInfo,
  DivTitle,
  Form,
  H2Login,
  ImgTeste,
  InputForm,
  Label,
  PerrorLogin,
  Pinfo,
} from "./style";
import Logo from "./../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().required("é obrigatório!"),
  password: yup.string().matches(/.{8,}/, "Deve conter 8 caracteres!"),
});

export const Login = () => {
  const { loginUser, user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <ImgTeste src={Logo} />
      <Form onSubmit={handleSubmit(loginUser)}>
        <DivTitle>
          <H2Login>Login</H2Login>
        </DivTitle>
        <DivInfo>
          <Label htmlFor="email">Email</Label>
          <InputForm
            {...register("email", { required: true })}
            type="text"
            id="email"
            placeholder="Digite aqui seu email"
          />
          <PerrorLogin>{errors.email?.message}</PerrorLogin>
          <Label htmlFor="password">Senha</Label>
          <InputForm
            {...register("password", { required: true })}
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
          />
          <PerrorLogin>{errors.password?.message}</PerrorLogin>
          <ButtonLogin />
          <Pinfo>Ainda não possui uma conta?</Pinfo>
          <ButtonRegister />
        </DivInfo>
      </Form>
    </>
  );
};
