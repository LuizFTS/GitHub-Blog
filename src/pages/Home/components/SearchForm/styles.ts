import { styled } from "styled-components";


export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  & > div {
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${({ theme }) => theme["base-subtitle"]};
    }

    p {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${({ theme }) => theme["base-span"]};
    }
  }
`

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 6px;
  background: ${({ theme }) => theme["base-input"]};
  border: 1px solid ${({ theme }) => theme["base-border"]};
  color: ${({ theme }) => theme["base-text"]};
  outline: none;
  padding: 0.75rem 1rem;
  margin-top: 0.75rem;

  &::placeholder {
  color: ${({ theme }) => theme["base-label"]};
    font-size: 1rem;
  }

  &:focus {
  border: 1px solid ${({ theme }) => theme.blue};
  }
`