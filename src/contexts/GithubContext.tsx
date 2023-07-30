import { createContext, ReactNode, useState, useEffect } from 'react'
import { api } from '../lib/axios'

interface User {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  name: string,
  company: string,
  blog: string,
  location: string,
  email: string,
  hireable: null,
  bio: string,
  twitter_username: null,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: string,
  updated_at: string,
  private_gists: number,
  total_private_repos: number,
  owned_private_repos: number,
  disk_usage: number,
  collaborators: number,
  two_factor_authentication: boolean,
  plan: {
    name: string,
    space: number,
    collaborators: number,
    private_repos: number
  }
}

interface GithubProviderProps {
  children: ReactNode
}

interface FetchPosts {
  username: string,
}

export interface Post {
  url: string,
  repository_url: string,
  labels_url: string,
  comments_url: string,
  events_url: string,
  html_url: string,
  id: number,
  node_id: string,
  number: number,
  title: string,
  user: {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean
  },
  labels: [

  ],
  state: string,
  locked: boolean,
  assignee: null,
  assignees: [

  ],
  milestone: null,
  comments: number,
  created_at: string,
  updated_at: string,
  closed_at: null,
  author_association: string,
  active_lock_reason: null,
  body: string,
  reactions: {
    url: string,
    total_count: number,
    "+1": number,
    "-1": number,
    laugh: number,
    hooray: number,
    confused: number,
    heart: number,
    rocket: number,
    eyes: number
  },
  timeline_url: string,
  performed_via_github_app: null,
  state_reason: null,
  score: number

}

const initialState = {
  login: "",
  id: 73566518,
  node_id: "",
  avatar_url: "",
  gravatar_id: "",
  url: "",
  html_url: "",
  followers_url: "",
  following_url: "",
  gists_url: "",
  starred_url: "",
  subscriptions_url: "",
  organizations_url: "",
  repos_url: "",
  events_url: "",
  received_events_url: "",
  type: "",
  site_admin: false,
  name: "",
  company: "",
  blog: "",
  location: "",
  email: "",
  hireable: null,
  bio: "",
  twitter_username: null,
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "",
  updated_at: "",
  private_gists: 0,
  total_private_repos: 0,
  owned_private_repos: 0,
  disk_usage: 0,
  collaborators: 0,
  two_factor_authentication: false,
  plan: {
    name: "",
    space: 0,
    collaborators: 0,
    private_repos: 0
  }
}

interface PostSearch {
  total_count: number,
  incomplete_results: boolean,
  items: Post[]
}

interface ContextValue {
  user: User
  posts: PostSearch
}

export const GithubContext = createContext({} as ContextValue)

export const GithubProvider = ({ children }: GithubProviderProps) => {
  const [user, setUser] = useState(initialState)
  const [posts, setPosts] = useState<PostSearch>({
    total_count: 0,
    incomplete_results: true,
    items: []
  })

  async function fetchUser() {
    const response = await api.get('/users/luizfts')
    setUser(response.data)
  }
  async function fetchPosts({ username }: FetchPosts) {
    const response = await api.get(`/search/issues`, {
      params: {
        q: `user:${username}`,
        per_page: 6
      }
    })
    setPosts(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    if (user.login) {
      fetchPosts({ username: user.login })
    }
  }, [user])

  return (
    <GithubContext.Provider value={{ user, posts }}>
      {children}
    </GithubContext.Provider>
  )
}