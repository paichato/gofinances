import React, { createContext, ReactNode, useContext, useState } from 'react';
const {CLIENT_ID}=process.env;
const {REDIRECT_URL}=process.env;
import * as AuthSession from 'expo-auth-session'
import * as AppleAuthentication from 'expo-apple-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import keys from './utils/keys';

interface AuthProviderProps{
    children:ReactNode
}

interface IAuthContextData{
    user:User;
    signInWithGoogle():Promise<void>;
    signInWithApple():Promise<void>;
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
    // console.log(CLIENT_ID);
    

    const signInWithGoogle=async()=> {
        try {
            
            const RESPONSE_TYPE='token';
            const SCOPE=encodeURI('profile email');
            

           const authUrl=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

           const {type,params}= await AuthSession.startAsync({authUrl})as AuthorizationResponse; 
            if(type=='success'){
                const response=await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                // console.log('response:',JSON.stringify(response));

                if(response.status===200){
                     const userInfo=await response.json();
                console.log(userInfo);
                const userLoged={
                    id: String(userInfo.id),
                    name: userInfo.given_name,
                    email: userInfo.email,
                    photo: userInfo?.picture,
                }
                setUser(userLoged);

                await AsyncStorage.setItem(keys.storage.user,JSON.stringify(userLoged));
                
                }else{
                    // console.log(JSON.stringify(response,0,2));
                    const errorResponse=await response.json()
                    throw new Error(JSON.stringify(errorResponse.error));
                }
                
               
            }
            // else{
            //     throw new Error(userInfo.error);
            // }
           
           
        } catch (error : any) {
            throw new Error(error);
        }
    }

    const signInWithApple=async()=>{
        try {
            const credential=await AppleAuthentication.signInAsync({
                requestedScopes:[
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ]
            });

            if(credential){
                console.log(credential);
                
                const userLoged={
                    id: String(credential.user),
                    name: credential.fullName!.givenName!,
                    email: credential.email!,
                    photo: undefined,
                };
                 setUser(userLoged);

            await AsyncStorage.setItem(keys.storage.user,JSON.stringify(userLoged));
            }

            

        } catch (error:any) {
            throw new Error(error);
        }
    }

    return <AuthContext.Provider value={{user,signInWithGoogle, signInWithApple}}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext=()=>{
    const context=useContext(AuthContext);
    const {user,signInWithGoogle,signInWithApple}=context;
    return {user,signInWithGoogle,signInWithApple}
    // return context;
}
