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
      <div className='col-12 d-flex flex-column justify-content-center align-items-center my-2'>
        <div className='row w-75 my-5 py-5 bg-success d-flex flex-column justify-content-center align-items-center my-12'>

      <label className=' form-label text-center text-uppercase h2 my-5'>logowanie</label>

      <input type='text' className='m-3 my-2 input-group-text w-50 text-uppercase' value={username} placeholder='nazwa użytkownika' onChange={(e) => setUserName(e.target.value)}/>
      <input type='text' className='m-3 my-2 input-group-text w-50 text-uppercase' value={password} 
      placeholder='hasło'
      type='password'
      onChange={(e) => setPassword(e.target.value)}/>
      <input 
      className="my-4 w-25 text-uppercase button-radius border-info"
      onClick={HandleLogin}
      disabled={isFetching}
      type='button' value='zaloguj się'/>
      {error && <span className='text-center my-2 text-uppercase'>coś się zjebało</span> }

        </div>
      </div>
      </>
  );
}
