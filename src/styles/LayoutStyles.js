import styled from "styled-components";
import theme from "./Theme";

export const PanelContainer = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1200px;
  background-color: ${theme.colors.backgroundThird};
  min-height: 650px;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
`;

export const SideNavbar = styled.nav`
  background-color: ${theme.colors.backgroundSecondary};
  width: 220px;
  margin-right: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .NavLink {
    padding: .6rem;
    text-decoration: none;
    border-radius: 12px;
    transition: background 320ms ease-in-out;
    color: white;
    display: flex;
    align-items: center;
    font-weight: 300;

    svg {
      margin-right: .5rem;
      width: 15px;
    }

    &:hover {
      background-color: ${theme.colors.backgroundThird};
    }

    &.active {
      background-color: ${theme.colors.backgroundPrimary};
    }
  }
`;

export const HeaderNav = styled.header`
  display: flex;
  align-items: center;
  margin: 0 auto 2rem auto;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${theme.colors.backgroundThird};
`;

export const IconNav = styled.div`
  background-color: ${theme.colors.backgroundPrimary};
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 13px 13px 3px 13px;
  margin-right: 1rem;

  svg {
    margin: auto;
    padding: 0;
    width: 23px;
    height: 23px;
  }
`;

export const TitleNav = styled.h1`
  font-size: 1rem;
  margin: 0;
`;

export const MainContainer = styled.main`
  flex-grow: 1;
  background-color: ${theme.colors.backgroundSecondary};
`;