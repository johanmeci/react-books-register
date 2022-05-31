import Navbar from "./Navbar";

import { PanelContainer, MainContainer } from "../styles/LayoutStyles";

export default function Layout({children}) {
  return(
    <PanelContainer>
      <Navbar/>
      <MainContainer>{children}</MainContainer>
    </PanelContainer>
  );
}