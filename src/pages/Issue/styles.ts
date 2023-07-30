import { styled } from "styled-components";
import { Card } from "../../styles/global";
import { Link } from 'react-router-dom'

export const IssueTitle = styled(Card)`
  position: relative;
  margin-top: -5.5rem;
  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  & > h1 {
    color: ${({ theme }) => theme["base-title"]};
    font-size: 1.5rem;
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

export const LabelLink = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  text-transform: uppercase;
  color: ${({ theme }) => theme.blue};
  font-size: 0.75rem;

  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.blue};
  }
`

export const IssueBody = styled.div`
  width: 100%;
  padding: 2.5rem 2rem;
  line-height: 1.6;

  pre {
    background: ${({ theme }) => theme["base-post"]};
    padding: 1rem;
    overflow: auto;
    border-radius: 2px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a, a:visited {
    color: ${({ theme }) => theme.blue};
    text-decoration: underline;
  }

  h1, h2, h3, h4 {
    margin-top: 2rem;
    margin-bottom: 0.875rem;
  }

  li {
    margin-left: 2rem;
  }
`