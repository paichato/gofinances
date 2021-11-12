import React, { createContext, ReactNode, useContext } from 'react';
import AuthSession from 'expo-auth-session'

interface AuthProviderProps{
    children:ReactNode
}

interface IAuthContextData{
    user:User;
    signInWithGoogle():Promise<void>;
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

    async function signInWithGoogle() {
        try {
            const CLIENT_ID='379611206344-i0po2uqug7nb9lf3o8cqpcmoos384n0u.apps.googleusercontent.com';
            const REDIRECT_URL='https://auth.expo.io/@paichato/gofinances';
            const RESPONSE_TYPE='token';
            const SCOPE=encodeURI('profile email');


           const authUrl=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

           const response= await AuthSession.startAsync({authUrl});
           console.log(response);
           
        } catch (error) {
            throw new Error(error);
        }
    }

    return <AuthContext.Provider value={{user,signInWithGoogle}}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext=()=>{
    const context=useContext(AuthContext);
    // const {}=context;
    // return {}
    return context;
}
