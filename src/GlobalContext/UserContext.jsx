import React, { createContext, useEffect, useState } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api/api';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserStorage = ({children}) => {

  const [data, setData] =useState(null)
  const [login,setLogin]=useState(null)
  const [loading, setLoading]=useState(null)
  const [error, setError]=useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    async function autoLogin(){
      const token = window.localStorage.getItem('token')
      if(token){
        try {
          setError(null);
          setLoading(true)
          const {url, options} = TOKEN_VALIDATE_POST(token)
          const response  = await fetch(url, options)
          const json = response.json()
          if(!response.ok) throw new Error('token invalido')
          getUser(token)
        } catch (error) {
          userLogout()
        }finally{
          setLoading(false)
        }

      }
    }
    autoLogin()
  },[])
  
  async function getUser(token){
    const {url, options} = USER_GET(token)
    const response = await fetch(url,options)
    const json = await response.json()
    setData(json)
    setLogin(true)
  }

  async function userLogin(username,password){
    try {
      setError(null);
      setLoading(true)
      const {url, options} = TOKEN_POST({username, password});
      const tokenRes = await fetch(url, options);
      if(!tokenRes.ok) throw new Error(`Usuario Invalido`);
      const {token} = await tokenRes.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta')
    } catch (error) {
      setError(error.message)
      setLogin(false)
    }finally{
      setLoading(false)
    }
  }

  async function userLogout(){
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/login')
  }

  return (
    <UserContext.Provider value={{
      userLogin,
      userLogout,
      data,
      error,
      loading,
      login
    }}>
      {children}
    </UserContext.Provider>
  )
}

