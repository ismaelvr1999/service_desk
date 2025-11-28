import * as z from "zod";
import { CreateUser, User, UserCredentials } from "./user.schema";

export type CreateUserDTO = z.infer<typeof CreateUser>;
export type UserCredentialsDTO = z.infer<typeof UserCredentials>;
export type UserDTO = z.infer<typeof User>;