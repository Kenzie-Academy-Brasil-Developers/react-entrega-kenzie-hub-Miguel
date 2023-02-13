import styled from "styled-components";
import { Link as linkRouter } from "react-router-dom";

export const HeaderHome = styled.header`
  max-width: 1440px;
  width: 100%;
  height: 72px;

  margin: 0 auto;
`;

export const NavHome = styled.nav`
  max-width: 1440px;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkBack = styled(linkRouter)`
  width: 55.49px;
  height: 32px;

  background: #212529;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  color: #f8f9fa;
  display: flex;
  justify-content: center;
  text-align: center;
`;
