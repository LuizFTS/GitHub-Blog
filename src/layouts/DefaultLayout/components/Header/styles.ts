import { styled } from "styled-components";


export const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  background: ${({ theme }) => theme["base-profile"]};

  height: 18.5rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  div {
    flex: 1;
    display: flex;
    height: 70%;
    
    &:nth-child(1){
      background-image: url('/bg1.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: left;
    }
    
    &:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:nth-child(3) {
      background-image: url('/bg2.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right;
    }
      
  }
`

export const RightLightningCircle = styled.div`
  position: absolute;
  border-radius: 50%;

  width: 10rem;
  height: 10rem;

  background-color: rgb(20, 88, 156);
  right: 0.5rem;
  top: -2.25rem;
  filter: blur(128px);
`

export const LeftLightningCircle = styled.div`
  position: absolute;
  border-radius: 50%;

  width: 14.75rem;
  height: 14.75rem;

  background-color: rgb(20, 88, 156);
  left: -6.625rem;
  top: -6rem;
  filter: blur(128px);
`

export const CenterLightningBox = styled.div`
  position: absolute;
  background-color: rgb(20, 88, 156);
  
  width: 54rem;
  height: 3.25rem;
  
  bottom: 0;
  left: 50%;

  transform: translate(-50%, 70%);
  filter: blur(80px);
  
`