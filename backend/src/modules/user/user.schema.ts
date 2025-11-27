import * as z from "zod";

export const CreateUser = z.object({
    firstName: z.string(),
    lastName: z.string(),
    password: z.string(),
    email: z.email(),
    phoneNumber: z.string().optional()
});

export const UserCredentials = z.object({
    password: z.string(),
    email: z.email()
});
