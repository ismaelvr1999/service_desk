import { formLoginSchema, userSchema, formSignUpSchema } from "./auth.schema";
import * as z from "zod";
export type FormLogin = z.infer<typeof formLoginSchema>;
export type FormSignUp = z.infer<typeof formSignUpSchema>
export type User = z.infer<typeof userSchema>
export type AuthState = {
    isUserAuth: boolean,
    user: User | null,
    loading: boolean
}

