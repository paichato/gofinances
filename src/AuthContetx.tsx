import React, { createContext, ReactNode, useContext, useState } from 'react';
const {CLIENT_ID}=process.env;
const {REDIRECT_URL}=process.env;
import * as AuthSession from 'expo-auth-session'

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

interface AuthorizationResponse{
    params:{
        access_token:string;
    }
    type:string;
}

interface ErrorType{
    error:()=>Error;
}

const AuthContext=createContext({} as IAuthContextData);

export default function AuthProvider({children}:AuthProviderProps){

    const [user,setUser]=useState<User>({}as User);

    const signInWithGoogle=async()=> {
        try {
            
            const RESPONSE_TYPE='token';
            const SCOPE=encodeURI('profile email');


           const authUrl=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

           const {type,params}= await AuthSession.startAsync({authUrl})as AuthorizationResponse; 
            if(type=='success'){
                const response=await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const userInfo=await response.json();
                console.log(userInfo);
                setUser({
                    id: userInfo.id,
                    name: userInfo.given_name,
                    email: userInfo.email,
                    photo: userInfo?.picture,
                })
            }
           
           
        } catch (error : any) {
            throw new Error(error);
        }
    }

    return <AuthContext.Provider value={{user,signInWithGoogle}}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext=()=>{
    const context=useContext(AuthContext);
    const {user,signInWithGoogle}=context;
    return {user,signInWithGoogle}
    // return context;
}
