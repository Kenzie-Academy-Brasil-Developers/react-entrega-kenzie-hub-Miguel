import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { Label } from "../../pages/Login/style";
import { TechContext } from "../../providers/TechContext";
import {
  ButtonAddTechs,
  ButtonCloseModal,
  DivModal,
  DivModalopacity,
  DivTitleModal,
} from "./style";

export const AddModalTech = () => {
  const { createTech, setAddModal, addModal } = useContext(TechContext);

  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    createTech(data);
    setAddModal(false);
    reset();
  };

  return (
    <>
      {addModal ? (
        <DivModalopacity>
          <DivModal>
            <DivTitleModal>
              <h2>Cadastrar Tecnologia</h2>
              <ButtonCloseModal onClick={() => setAddModal(false)}>
                X
              </ButtonCloseModal>
            </DivTitleModal>
            <form onSubmit={handleSubmit(submit)}>
              <Label htmlFor="name">Nome</Label>
              <input
                id="name"
                type="text"
                {...register("title")}
                placeholder="Digite sua tecnologia"
              />
              <Label htmlFor="status">Selecionar status</Label>
              <select name="" id="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <ButtonAddTechs type="submit">
                Cadastrar Tecnologia
              </ButtonAddTechs>
            </form>
          </DivModal>
        </DivModalopacity>
      ) : (
        <Outlet />
      )}
    </>
  );
};
