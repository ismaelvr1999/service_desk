import { formLoginSchema } from "./auth.schema";
import * as z from "zod";
export type FormLogin = z.infer<typeof formLoginSchema>;