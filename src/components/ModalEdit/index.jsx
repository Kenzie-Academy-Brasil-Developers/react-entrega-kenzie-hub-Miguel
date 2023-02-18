import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { TechContext } from "../../providers/TechContext";

export const EditModalTech = () => {
  const {
    attTech,
    EditModal,
    setEditModal,
    attTecnologia,
    deleteTech,
    listTech,
    setattTecnologia,
  } = useContext(TechContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: attTecnologia.title,
      status: attTecnologia.status,
    },
  });

  const submit = (data) => {
    attTech(attTecnologia.id, data);
  };

  return (
    <div>
      {EditModal ? (
        <div>
          <p>Editar tecnologia</p>
          <button onClick={() => setEditModal(false)}>X</button>
          <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              {...register("title")}
              placeholder="Atualize sua tecnologia"
            />
            <label htmlFor="status">Selecionar status</label>
            <select name="" id="status" {...register("status")}>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avançado">Avançado</option>
            </select>
            <button type="submit">Atualizar Tecnologia</button>
            <button>Delettar</button>
          </form>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};
