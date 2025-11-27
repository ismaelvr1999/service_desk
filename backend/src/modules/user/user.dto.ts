import * as z from "zod";
import { CreateUser, UserCredentials } from "./user.schema";

export type CreateUserDTO = z.infer<typeof CreateUser>;

export type UserCredentialsDTO = z.infer<typeof UserCredentials>