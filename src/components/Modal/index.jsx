import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { TechContext } from "../../providers/TechContext";

export const AddModalTech = () => {
  const { createTech, setAddModal, addModal } = useContext(TechContext);

  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    createTech(data);
  };

  return (
    <div>
      {addModal ? (
        <div>
          <p>Cadastrar Tecnologia</p>
          <button onClick={() => setAddModal(false)}>X</button>
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
            <button type="submit">Cadastrar Tecnologia</button>
          </form>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};
