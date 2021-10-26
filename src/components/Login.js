import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from "../features/user"
export default function Login() {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=>
                {dispatch(login({name: "sai", age:20, email:"sai@gail.com"}));
                }} >Login</button>

                <button onClick={() => {
                dispatch(logout());

                }}>Logout</button>
        </div>
    )
}
