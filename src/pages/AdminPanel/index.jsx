import React from 'react'
import { auth } from './../../firebase/firebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
  let navigate = useNavigate()

  const logOut = () => {

    signOut(auth).then(() => {
      console.log('Sign out successfull', auth.currentUser?.email);
      navigate("/portfolio_react_2023/login")
    }).catch((err) => {
      console.error(err);
    })
  }

  return (
    <div>
      <h1>
        Admin Panel
      </h1>
      <button
        className="btn btn-lg
            bg-accent hover:bg-secondary-hover"
        onClick={logOut}
      >
        Logout
      </button>
    </div>
  )
}

export default AdminPanel