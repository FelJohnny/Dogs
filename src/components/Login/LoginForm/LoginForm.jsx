import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../Forms/Input/Input'
import Button from '../../Forms/Button/Button'
import useForm from '../../../Hooks/useForm.jsx'
import { TOKEN_POST, USER_GET } from '../../../api/api.js'

function LoginForm() {

  const username = useForm()
  const password = useForm()

  async function getUser(token){
    const {url, options} = USER_GET(token)
    const response = await fetch(url,options)
    const json = await response.json()
    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if(username.validate() && password.validate()){
      const { url, options }= TOKEN_POST({
        username: username.value,
        password: password.value
      });

      const response = await fetch(url,options);
      const json = await response.json();
      console.log(json);
      window.localStorage.setItem('token', json.token)
      getUser(json.token)
    }
  }
    
    
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="usuario" type="text" name="username" {...username} />
        <Input label="senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm
