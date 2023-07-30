import { GithubContext } from "../../../../contexts/GithubContext";
import { SearchFormContainer, SearchInput } from "./styles";
import { useContext } from 'react'

export function SearchForm() {
  const { posts } = useContext(GithubContext)
  return (
    <SearchFormContainer>
      <div>
        <h2>Publicações</h2>
        <p>{posts && posts?.total_count} {posts && posts?.total_count > 1 ? 'publicações' : 'publicação'}</p>
      </div>
      <SearchInput type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}