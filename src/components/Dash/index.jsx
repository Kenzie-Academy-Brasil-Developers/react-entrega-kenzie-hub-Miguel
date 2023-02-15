import React, { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import { DivDash, H1Dash, PDash } from "./style";

export const Dash = () => {
  const { user } = useContext(UserContext);

  return (
    <DivDash>
      <H1Dash>{user?.name}</H1Dash>
      <PDash>{user?.course_module}</PDash>
    </DivDash>
  );
};
