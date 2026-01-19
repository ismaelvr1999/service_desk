import * as z from "zod";
export const formLoginSchema = z.object({
    email: z.email(),
    password: z.string()
});