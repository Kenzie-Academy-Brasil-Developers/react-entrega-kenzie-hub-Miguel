import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dash } from "../../components/Dash";
import { Header } from "../../components/Header";
import { AddModalTech } from "../../components/Modal";
import { EditModalTech } from "../../components/ModalEdit";
import { TechContext } from "../../providers/TechContext";
import {
  ButtonAddTech,
  DivTech,
  DivUl,
  LiCard,
  PMsgtech,
  Ptech,
  Ptest,
  UlContainer,
} from "./style";

export const Home = () => {
  const {
    listTech,
    setAddModal,
    setEditModal,
    attTecnologia,
    EditModal,
    setattTecnologia,
  } = useContext(TechContext);

  return (
    <div>
      <Header />
      <Dash />
      <DivTech>
        <Ptech>Tecnologias</Ptech>
        <ButtonAddTech onClick={() => setAddModal(true)}>+</ButtonAddTech>
      </DivTech>

      <DivUl>
        {listTech.length > 0 ? (
          <UlContainer>
            {listTech.map((tech) => {
              return (
                <LiCard
                  key={tech.id}
                  onClick={() => {
                    setEditModal(true);
                    setattTecnologia(tech);
                  }}
                >
                  <Ptest>{tech.title}</Ptest>
                  <Ptest>{tech.status}</Ptest>
                  {/*<button
                    type="submit"
                    onClick={() => {
                      setEditModal(true);
                      setattTecnologia(tech);
                    }}
                  >
                    Editar
                  </button>*/}
                </LiCard>
              );
            })}
          </UlContainer>
        ) : (
          <PMsgtech>Nenhuma tech cadastrada!</PMsgtech>
        )}
      </DivUl>
      <AddModalTech />
      {EditModal && <EditModalTech />}
    </div>
  );
};
