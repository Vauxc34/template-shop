import React, { useState, useEffect } from 'react';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching, error } = useSelector(state => state.user)

  const HandleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password })
  }

  return (
      <>
      
      <input type='text' value={username} placeholder='username' onChange={(e) => setUserName(e.target.value)}/>
      <input type='text' value={password} 
      placeholder='password'
      type='password'
      onChange={(e) => setPassword(e.target.value)}/>
      <input onClick={HandleLogin}
      disabled={isFetching}
      type='button' value='login'/>
      {error && <span>coś się zjebało</span> }

      </>
  );
}
