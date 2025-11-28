import * as z from "zod";
export const User = z.object({
    id: z.uuid(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string(),
    email: z.email(),
    picture: z.string().nullable(),
    phoneNumber: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const CreateUser = z.object({
    firstName: User.shape.firstName,
    lastName: User.shape.lastName,
    password: User.shape.password,
    email: User.shape.email,
    phoneNumber: User.shape.phoneNumber,
});

export const UserCredentials = z.object({
    password: User.shape.password,
    email: User.shape.email
});
