import React from "react";

import Logo from "./../../assets/Logo.svg";
import { HeaderHome, NavHome, LinkBack } from "./style";

export const Header = () => {
  return (
    <HeaderHome>
      <NavHome>
        <img src={Logo} />
        <LinkBack to={"/"}>Sair</LinkBack>
      </NavHome>
    </HeaderHome>
  );
};
