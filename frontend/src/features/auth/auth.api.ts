import type { FormLogin } from "./auth.types";
import axios from "@shared/lib/axios";

export const signIn = async(data: FormLogin) =>{
    return axios.post("login",data)
}