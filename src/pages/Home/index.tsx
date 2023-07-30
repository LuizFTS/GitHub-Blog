// Components
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";

// Contexts
import { GithubContext } from "../../contexts/GithubContext";

// External imports
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

// Utils
import { capitalize, truncateString } from "../../utils/textCutter";

// React
import { useContext } from 'react'


// Styles import
import { PostCard, PostsContainer } from "./styles";


export function Home() {
  const { posts } = useContext(GithubContext)
  return (
    <>
      <Profile />
      <SearchForm />
      <PostsContainer>
        {posts && posts.items.map(item => {
          return (
            <Link to={`/${item.number}`} key={item.id}>
              <PostCard>
                <div>
                  <h2>{item.title}</h2>
                  <p>{capitalize(formatDistanceToNow(new Date(item.created_at), {
                    addSuffix: true,
                    locale: ptBR
                  }))}</p>
                </div>
                <p>{truncateString(item.body, 27)}
                </p>
              </PostCard>
            </Link>
          )
        })}
      </PostsContainer>

    </>
  )
}