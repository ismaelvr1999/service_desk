import { PrismaClient } from "@generated/prisma/internal/class";
import { CreateTeamDTO, EditTeamDTO, AddAgentDTO } from "./team.dto";
import ApiError from "@utils/apiError";
import HttpStatus from "@constants/httpStatuses";
import RoleService from "@module/role/role.service";
export default class TeamService {
    constructor(
        private prisma: PrismaClient,
        private roleService: RoleService
    ) { }

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

    async addAgent(agent: AddAgentDTO) {
        
        const { userId, teamId, roleName } = agent
        const role = await this.roleService.getRoleByName(roleName);
        const data = {
            userId,
            teamId,
            roleId: role.id
        }
        return this.prisma.userTeam.create({ data });
    }

}