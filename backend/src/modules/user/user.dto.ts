import * as z from "zod";
import { CreateUser } from "./user.schema";

export type CreateUserDTO = z.infer<typeof CreateUser>;