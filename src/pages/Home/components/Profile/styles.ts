import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ProfileContainer = styled.div`
  position: relative;
  padding: 2.5rem;
  border-radius: 10px;
  display: flex;
  gap: 2rem;
  margin-top: -5.5rem;
  z-index: 10;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  background: ${({ theme }) => theme["base-profile"]};
`

export const ImageContainer = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 8px;
`

export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  h1 {
    color: ${({ theme }) => theme["base-title"]};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;
  }

  p {
    font-size: 1rem;
    flex: 1;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;

    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${({ theme }) => theme["base-subtitle"]};

      span {
        line-height: 0;
        color: ${({ theme }) => theme["base-label"]};
      }

     
    }
  }
`

export const GithubLink = styled(Link)`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;

  font-size: 12px;
  font-weight: bold;
  display: flex;
  gap: 0.5rem;
  cursor: pointer;

  color: ${({ theme }) => theme.blue};

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.blue};
  }
`

