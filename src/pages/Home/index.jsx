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
  Pinfos,
  PMsgtech,
  Ptech,
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
                  <Pinfos>{tech.title}</Pinfos>
                  <Pinfos>{tech.status}</Pinfos>
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
