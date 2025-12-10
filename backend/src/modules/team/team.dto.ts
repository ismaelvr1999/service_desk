import { AddAgent, CreateTeam, EditTeam, RemoveAgent } from "./team.schema";
import * as z from "zod";
export type CreateTeamDTO = z.infer<typeof CreateTeam >;
export type EditTeamDTO = z.infer<typeof EditTeam >;
export type AddAgentDTO = z.infer<typeof AddAgent >;
export type RemoveAgentDTO = z.infer<typeof RemoveAgent >;