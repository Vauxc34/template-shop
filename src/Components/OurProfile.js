import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { userRequest } from '../RequestMethod'
import { logout } from '../redux/UserSlice'  
import axios from 'axios'

const OurProfile = () => {

    const [LogOut, setLogOut] = useState(false)

    const SocialMedias = [
        { name: 'facebook' },
        { name: 'twitter' },
        { name: 'linkedin' },
        { name: 'instagram' },
    ]

    const [ ActualUser, setActualUser ] = useState('Gość')

    const dispatch = useDispatch()

    useEffect(() => {

        const GetUser = async () => {

            try {                

                const res = await userRequest.get('https://basic-shop-apii.herokuapp.com/api/users/find/61fa687cce29a34e7900853a')
                console.log(res.data)
                
                if(user.currentUser.isAdmin == true) {
                    setActualUser('Administrator')
                }
            

            } catch {

            }

        }

        GetUser()

    }, [])

    const HandleLogOut = () => {
        logout()
    }

    const user =  useSelector(state => state.user.currentUser)

    
    /*const HandleLogOut = () => {
        setLogOut(true)
        if(!LogOut) {

            user.currentUser(null)
        } 

    }*/

  return (
    (
        <>
        
        <div className='col-12'>
            <div className='row d-flex justify-content-center align-self-center my-5'>

            <div className='col-md-6 my-3'>
            <div className='card'>
            <div className='card-header d-flex my-2'>
                <h3 className='text-black-50'>Informacje o tobie</h3>
            </div>
            <div className='card m-4 d-flex justify-content-center'>
                <label className='text-muted mx-4 mt-3'>Twój nick</label>
            <input className='mx-4 mt-1 my-2 w-50'/>
                <label className='text-muted mx-4 mt-3'>Biogram</label>
            <textarea className='w-75 mx-4'/>
                <label className='text-muted mx-4 mt-3'>Twój wiek</label>
            <input type="number" className='mx-4 mt-1 my-2 w-25' min="0"/>
                <label className='text-muted mx-4 mt-3'>Media społecznościowe</label>

            <select className='mx-4 mt-2 w-25'>
                {SocialMedias.map((media) => (
                    <option>
                        {media.name}
                    </option>
                ))}
            </select>
                
            <input type="submit" className='mx-4 mt-5 my-2' value="edytuj informacje"/>
            <input type="submit" onClick={HandleLogOut} className='mx-4 mt-0 my-4' value="wyloguj się"/>
            </div>
            </div>
            </div>
            
            <div className='col-md-4 my-3'>
            <div className='card'>
            <div className='card-header d-flex my-2'>
                <h3 className='text-black-50'>Zdjęcie profilowe</h3>
            </div>
            <div className='card m-5'>
            <img src="" className='h-50 w-50' />
            </div>
            </div>
            </div>

            </div>
        </div>

        </>
    )
  )
}

export default OurProfile