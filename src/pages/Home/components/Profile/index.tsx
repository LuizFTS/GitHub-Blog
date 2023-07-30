import { GithubLink, ImageContainer, ProfileContainer, ProfileTextContainer } from "./styles";
import { AiFillGithub } from 'react-icons/ai'
import { BsFillBuildingFill, BsBoxArrowUpRight } from 'react-icons/bs'
import { HiUsers } from 'react-icons/hi'
import { GithubContext } from "../../../../contexts/GithubContext";
import { useContext } from 'react'

export function Profile() {
  const { user } = useContext(GithubContext)

  return (
    <ProfileContainer>
      <ImageContainer src={user.avatar_url} />
      <ProfileTextContainer>
        <h1>{user.name}</h1>
        <p>
          {user.bio}
        </p>

        <ul>
          <li>
            <span>
              <AiFillGithub size={16} />
            </span>
            {user.login}
          </li>
          <li>
            {user.company && (
              <>
                <span>
                  <BsFillBuildingFill size={16} />
                </span>
                {user.company}
              </>
            )}
          </li>
          <li>
            <span>
              <HiUsers size={16} />
            </span>
            {user.followers > 1 ? `${user.followers} seguidores` : `${user.followers} seguidor`}
          </li>
        </ul>
      </ProfileTextContainer>
      <GithubLink to={user.html_url} target="_blank">
        github
        <BsBoxArrowUpRight />
      </GithubLink>
    </ProfileContainer>
  )
}