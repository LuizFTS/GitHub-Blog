import { styled } from "styled-components";


export const PostsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 15rem;
`

export const PostCard = styled.div`
  padding: 2rem;
  max-width: 26rem;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;

  background: ${({ theme }) => theme["base-post"]};

  & > div {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    h2 {
      font-size: 1.25rem;
      color: ${({ theme }) => theme["base-title"]};
      width: 70%;
    }

    & > p {
      flex: 1;
      font-size: 0.875rem;
      font-weight: bold;
      color: ${({ theme }) => theme["base-label"]};
      text-align: right;
    }
  }

  & > p {
    font-size: 1rem;
    color: ${({ theme }) => theme["base-text"]};
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme["base-label"]};
  }
`