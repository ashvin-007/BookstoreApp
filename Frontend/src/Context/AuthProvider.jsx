import React, { createContext, useContext, useState } from 'react'

export const AuthContext=createContext()
const Authprovider = ({children}) => {
  const initialAuthUser=localStorage.getItem("users")
    const [AuthUser,setAutUser]=useState(
         initialAuthUser?JSON.parse(initialAuthUser):undefined
    )
  return(
     <AuthContext.Provider value={[AuthUser,setAutUser]}>
        {children}
     </AuthContext.Provider>
  ) 
}
export const useAuth=()=>useContext(AuthContext)
export default Authprovider
