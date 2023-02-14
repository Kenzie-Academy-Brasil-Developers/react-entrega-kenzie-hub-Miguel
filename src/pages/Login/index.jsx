import { ButtonLogin, ButtonRegister } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import {
  DivInfo,
  DivTitle,
  Form,
  H2Login,
  ImgTeste,
  InputForm,
  Label,
  Pinfo,
} from "./style";
import Logo from "./../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../Services";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const schema = yup.object({
  email: yup.string().required("é obrigatório!"),
  password: yup.string().matches(/.{8,}/, "Deve conter 8 caracteres!"),
});

export const Login = () => {
  const { loginUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  /* const loginUser = async (data) => {
    console.log(data);

    try {
      const response = await api.post("/sessions", data);

      console.log(response.data);
      navigate("/home");
    } catch (error) {
      console.error(error);
      reset();
    }
  };*/

  return (
    <>
      <ImgTeste src={Logo} />
      <Form onSubmit={handleSubmit(loginUser)}>
        <DivTitle>
          <H2Login>Login</H2Login>
        </DivTitle>
        <DivInfo>
          <Label htmlFor="email">
            Email
            <p>{errors.email?.message}</p>
          </Label>
          <InputForm
            {...register("email", { required: true })}
            type="text"
            id="email"
            placeholder="Digite aqui seu email"
          />
          <Label htmlFor="password">
            Senha
            <p>{errors.password?.message}</p>
          </Label>
          <InputForm
            {...register("password", { required: true })}
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
          />
          <ButtonLogin />
          <Pinfo>Ainda não possui uma conta?</Pinfo>
          <ButtonRegister />
        </DivInfo>
      </Form>
    </>
  );
};
