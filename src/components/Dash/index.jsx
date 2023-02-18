import React, { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import { DivDash, DivTest, H1Dash, PDash } from "./style";

export const Dash = () => {
  const { user } = useContext(UserContext);

  return (
    <DivTest>
      <DivDash>
        <H1Dash>Olá, {user?.name}</H1Dash>
        <PDash>{user?.course_module}</PDash>
      </DivDash>
    </DivTest>
  );
};
