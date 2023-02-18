import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
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

  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    createTech(data);
    setAddModal(false);
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
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                {...register("title")}
                placeholder="Digite sua tecnologia"
              />
              <label htmlFor="status">Selecionar status</label>
              <select name="" id="status" {...register("status")}>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avançado">Avançado</option>
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
