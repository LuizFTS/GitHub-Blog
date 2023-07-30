// React imports
import { useContext, useEffect, useState } from 'react'

// External dependencies imports
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

// Icons
import { BsBoxArrowUpRight, BsChevronLeft, BsFillCalendar2EventFill } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'

// utils
import { capitalize } from '../../utils/textCutter'

// Contexts
import { GithubContext } from '../../contexts/GithubContext'

// Markdown
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Styles imports
import { IssueBody, IssueTitle, LabelLink } from './styles'

export function Issue() {
  // hooks
  const { posts } = useContext(GithubContext)
  const { issue } = useParams()
  const navigate = useNavigate()

  // states
  const [post, setPost] = useState(posts.items)



  const postNumber = issue ? parseInt(issue) : 0


  useEffect(() => {

    const postFiltered = posts.items.find(item => item.number === postNumber);

    if (!postFiltered) {
      navigate('/')
      return
    } else {
      setPost([postFiltered])
    }

  }, [navigate, posts.items, postNumber])

  return (
    <>
      <IssueTitle>
        <div>
          <LabelLink to='/'>
            <BsChevronLeft size={12} />
            voltar
          </LabelLink>
          <LabelLink to={post[0].html_url} target='_blank'>
            ver no github
            <BsBoxArrowUpRight size={12} />
          </LabelLink>
        </div>
        <h1>
          {post[0].title}
        </h1>

        <ul>
          <li>
            <span>
              <AiFillGithub size={18} />
            </span>
            {post[0].user.login}
          </li>
          <li>
            <span>
              <BsFillCalendar2EventFill size={18} />
            </span>
            {post && capitalize(formatDistanceToNow(new Date(post[0].created_at), {
              addSuffix: true,
              locale: ptBR
            }))}
          </li>
          <li>
            <span>
              <FaComment size={18} />
            </span>
            {post[0].comments}
          </li>
        </ul>
      </IssueTitle>
      <IssueBody>
        <ReactMarkdown children={post[0].body} remarkPlugins={[remarkGfm]} />
      </IssueBody>
    </>
  )
}