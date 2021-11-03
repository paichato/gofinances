import React, { createContext, ReactNode, useContext } from 'react';

interface AuthProviderProps{
    children:ReactNode
}

interface IAuthContextData{
    user:User;
}

interface User{
id:string;
name:string;
email:string;
photo?:string;
}

const AuthContext=createContext({} as IAuthContextData);

export default function AuthProvider({children}:AuthProviderProps){

    const user={id:'asdad12ad',name:'Paichato',email:'asdad12ad@gmail.com',photo:'https://www.google.com'}as User;

    return <AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext=()=>{
    const context=useContext(AuthContext);
    const {}=context;
    return {}
}
