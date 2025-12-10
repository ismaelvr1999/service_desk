import * as z from "zod";

export const Team = z.object({
    id: z.uuid(),
    name: z.string(),
    displayName: z.string(),
    email: z.email().nullable(),
    ownerId: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const UserTeam = z.object({
    userId: z.uuid(),
    teamId: z.uuid(),
    roleId: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date()
})

export const CreateTeam = z.object({
    name: Team.shape.name,
    displayName: Team.shape.displayName,
    email: Team.shape.email,
    ownerId: Team.shape.ownerId
});

export const EditTeam = z.object({
    name: Team.shape.name,
    displayName: Team.shape.displayName,
    email: Team.shape.email
});

export const AddAgent = z.object({
    userId: UserTeam.shape.userId,
    teamId: UserTeam.shape.teamId,
    roleName: z.string()
});

export const RemoveAgent = z.object({
    userId: UserTeam.shape.userId,
    teamId: UserTeam.shape.teamId
});