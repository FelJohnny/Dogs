import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../Forms/Input/Input'
import Button from '../../Forms/Button/Button'
import useForm from '../../../Hooks/useForm.jsx'
import { UserContext } from '../../../GlobalContext/UserContext.jsx'

function LoginForm() {

  const { userLogin, error, loading } = useContext(UserContext)
  const username = useForm()
  const password = useForm()


  async function handleSubmit(event) {
    event.preventDefault()

    if(username.validate() && password.validate()){
      userLogin(username.value, password.value);

    }
  }
    
    
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="usuario" type="text" name="username" {...username} />
        <Input label="senha" type="password" name="password" {...password} />
        
        {loading 
        ? <Button disabled >Carregando...</Button>
        : <Button>Entrar</Button>}
        {error&& <p>{error}</p>}
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm
