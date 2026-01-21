import type { FormLogin } from "./auth.types";
import axios from "@shared/lib/axios";

export const signIn = async(data: FormLogin) =>{
    return axios.post("login",data)
}

export const signUp = async(data: FormLogin) =>{
    return axios.post("signup",data)
}

export const verify = async() =>{
    return axios.post("verify")
}