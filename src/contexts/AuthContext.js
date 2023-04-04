import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext()

// Hook to access the context
const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true)

  // creamos un state para saber cuando termina de
  // cargar la comprobacion de onAuthStateChanged
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Validate if there's a user
    const cancelSub = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return cancelSub
  }, [])

  return (
    <AuthContext.Provider value={{ usuario: user }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext, useAuth }