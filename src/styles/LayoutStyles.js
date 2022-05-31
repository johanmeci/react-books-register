import styled from "styled-components";
import theme from "./Theme";

export const PanelContainer = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1200px;
  background-color: ${theme.colors.backgroundThird};
  min-height: 550px;
  display: flex;
`;

export const SideNavbar = styled.nav`
  background-color: ${theme.colors.backgroundSecondary};
`;

export const MainContainer = styled.main`
  border: 1px solid red;
`;