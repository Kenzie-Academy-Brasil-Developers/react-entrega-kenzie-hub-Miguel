import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import Logo from "./../../assets/Logo.svg";
import { HeaderHome, NavHome, LinkBack, ButtonRemove } from "./style";

export const Header = () => {
  const { userLogout } = useContext(UserContext);
  return (
    <HeaderHome>
      <NavHome>
        <img src={Logo} />
        <ButtonRemove onClick={userLogout}>Sair</ButtonRemove>
        {/*<LinkBack to={"/"}>Sair</LinkBack>*/}
      </NavHome>
    </HeaderHome>
  );
};
