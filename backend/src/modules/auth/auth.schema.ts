import * as z from "zod";

export const JWTPayload = z.object({
    id: z.uuid(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.email(),
    phoneNumber: z.string().nullable(),
    picture: z.string().nullable()
})
