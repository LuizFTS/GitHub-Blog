import { CenterLightningBox, HeaderContainer, LeftLightningCircle, RightLightningCircle } from "./styles";
import Logo from '../../../../Assets/Logo.svg'
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <div />
      <div>
        <NavLink to='/'>
          <img src={Logo} />
        </NavLink>
      </div>
      <div />
      <RightLightningCircle />
      <LeftLightningCircle />
      <CenterLightningBox />
    </HeaderContainer>
  )
}