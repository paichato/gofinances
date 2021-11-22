import React, { createContext, ReactNode, useContext, useState } from 'react';
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

const AuthContext=createContext({} as IAuthContextData);

export default function AuthProvider({children}:AuthProviderProps){

    const [user,setUser]=useState({id:'asdad12ad',name:'Paichato',email:'asdad12ad@gmail.com',photo:'https://www.google.com'}as User);

    const signInWithGoogle=async()=> {
        try {
            const CLIENT_ID='379611206344-i0po2uqug7nb9lf3o8cqpcmoos384n0u.apps.googleusercontent.com';
            const REDIRECT_URL='https://auth.expo.io/@paichato/gofinances';
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
    const {user,signInWithGoogle}=context;
    return {user,signInWithGoogle}
    // return context;
}
