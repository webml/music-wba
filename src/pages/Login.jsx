import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyleDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2 {
    font-size: 6em;
  }

  & * {
    font-size: 24px;
  }
`

export const Login = () => {
  const handleClick = () => {
    localStorage.setItem('token', true)
    window.location.href = '/'
  }

  return (
    <StyleDiv>
      <h2>Вход</h2>
      <input type="text" placeholder="login" />
      <input type="password" name="" id="" />
      <button onClick={handleClick}>Войти</button>
      <NavLink to="/reg">Создать аккаунт →</NavLink>
    </StyleDiv>
  )
}
