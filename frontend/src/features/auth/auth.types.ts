import { formLoginSchema, userSchema } from "./auth.schema";
import * as z from "zod";
export type FormLogin = z.infer<typeof formLoginSchema>;
export type User = z.infer<typeof userSchema>
export type AuthState = {
    isUserAuth: true | false,
    user: User | null
}

