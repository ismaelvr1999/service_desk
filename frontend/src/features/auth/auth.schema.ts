import * as z from "zod";

export const userSchema = z.object({
    id: z.uuid(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.email(),
    phoneNumber: z.string().nullable(),
    picture: z.string().nullable()
})

export const formLoginSchema = z.object({
    email: userSchema.shape.email,
    password: z.string()
});

export const formSignUpSchema = z.object({
    firstName: userSchema.shape.firstName,
    lastName: userSchema.shape.lastName,
    email: userSchema.shape.email,
    phoneNumber: userSchema.shape.firstName,
    password: z.string()
});