import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { Label } from "../../pages/Login/style";
import { TechContext } from "../../providers/TechContext";
import {
  ButtonCloseModal,
  DivModalopacity,
  DivTitleModal,
} from "../Modal/style";
import { ButtonAttTech, ButtonDelete, DivButtons, DivModalEdit } from "./style";

export const EditModalTech = ({ tech }) => {
  const {
    attTech,
    EditModal,
    setEditModal,
    attTecnologia,
    deleteTech,
    listTech,
    setattTecnologia,
  } = useContext(TechContext);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: attTecnologia.title,
      status: attTecnologia.status,
    },
  });

  const submit = (data) => {
    attTech(attTecnologia.id, data);
    setEditModal(false);
  };

  return (
    <>
      {EditModal ? (
        <DivModalopacity>
          <DivModalEdit>
            <DivTitleModal>
              <p>Editar tecnologia</p>
              <ButtonCloseModal onClick={() => setEditModal(false)}>
                X
              </ButtonCloseModal>
            </DivTitleModal>
            <form onSubmit={handleSubmit(submit)}>
              <Label htmlFor="name">Nome</Label>
              <input
                id="name"
                type="text"
                {...register("title")}
                placeholder="Atualize sua tecnologia"
              />
              <Label htmlFor="status">Selecionar status</Label>
              <select name="" id="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <DivButtons>
                <ButtonAttTech type="submit">
                  Atualizar Tecnologia
                </ButtonAttTech>
                <ButtonDelete
                  type="button"
                  onClick={() =>
                    deleteTech(attTecnologia.id) && setEditModal(false)
                  }
                >
                  Deletar
                </ButtonDelete>
              </DivButtons>
            </form>
          </DivModalEdit>
        </DivModalopacity>
      ) : (
        <Outlet />
      )}
    </>
  );
};
