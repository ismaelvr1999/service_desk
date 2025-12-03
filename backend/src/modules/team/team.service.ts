import { PrismaClient } from "@generated/prisma/internal/class";
import { CreateTeamDTO, EditTeamDTO, AddAgentDTO } from "./team.dto";
import ApiError from "@/src/utils/apiError";
import HttpStatus from "@/src/constants/httpStatuses";
export default class TeamService {
    constructor(private prisma: PrismaClient) { }

    async createTeam(newTeam: CreateTeamDTO) {
        return this.prisma.team.create({
            data: newTeam
        });
    }

    async getTeam(id: string) {
        return this.prisma.team.findUnique({
            where: {
                id
            }
        });
    }

    async updateTeam(id: string, data: EditTeamDTO) {
        try {
            return await this.prisma.team.update({ where: { id }, data });
        }
        catch (error: any) {
            if (error.code == "P2025") {
                throw new ApiError(HttpStatus.NOT_FOUND, "Team not found");
            }
            throw new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, "Error in update team")
        }
    }

    async deleteTeam(id: string) {
        try {
            return this.prisma.team.delete({
                where: {
                    id
                }
            });
        }
        catch (error: any) {
            if (error.code == "P2025") {
                throw new ApiError(HttpStatus.NOT_FOUND, "Team not found");
            }
            throw new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, "Error in delete team")
        }
    }

    async addAgent(agent:AddAgentDTO){
        //TODO: getRole using agent.roleName
        /* return this.prisma.userTeam.create({
            data:{

            }
        }) */
    }

}