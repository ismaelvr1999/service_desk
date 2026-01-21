import * as z from "zod";
export const formLoginSchema = z.object({
    email: z.email(),
    password: z.string()
});


export const userSchema = z.object({
    id: z.uuid(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.email(),
    phoneNumber: z.string().nullable(),
    picture: z.string().nullable()
})
