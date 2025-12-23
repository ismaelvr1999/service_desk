import { PrismaClient } from "@generated/prisma/internal/class";
import {
    CreateTeamDTO,
    EditTeamDTO,
    AddAgentDTO,
    RemoveAgentDTO,
    UpdateTeamAgentDTO
} from "./team.dto";
import handlerPrismaError from "@utils/handlerPrismaError";
import ApiError from "@utils/apiError";
import HttpStatus from "@constants/httpStatuses";
export default class TeamService {
    constructor(
        private prisma: PrismaClient
    ) { }

    async createTeam(newTeam: CreateTeamDTO) {
        const team = await this.prisma.team.create({
            data: newTeam
        });
        await this.addAgent({ userId: newTeam.ownerId, teamId: team.id, roleName: "admin" })
        return team;
    }

    async getTeam(id: string) {
        return this.prisma.team.findUnique({
            where: {
                id
            }
        });
    }

    async updateTeam(id: string, data: EditTeamDTO) {
        return this.prisma.team.update({ where: { id }, data })
            .catch(handlerPrismaError);
    }

    async deleteTeam(id: string) {
        return this.prisma.team.delete({
            where: {
                id
            }
        }).catch(handlerPrismaError);
    }

    async addAgent(agent: AddAgentDTO) {
        return this.prisma.userTeam.create({ data: agent })
            .catch(handlerPrismaError);
    }
    async removeAgent(agent: RemoveAgentDTO) {
        const { userId, teamId } = agent;
        return this.prisma.userTeam.delete({
            where: {
                userId_teamId: {
                    userId,
                    teamId
                }
            }
        }).catch(handlerPrismaError)
    }

    async getTeamAgents(id: string) {
        return this.prisma.team.findUnique({
            where: {
                id
            },
            include: {
                agents: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                firstName: true,
                                lastName: true,
                                email: true
                            }
                        }
                    }
                }
            }
        });
    }

    async updateTeamAgent(data: UpdateTeamAgentDTO) {
        return this.prisma.userTeam.update({
            where: {
                userId_teamId: {
                    userId: data.userId,
                    teamId: data.teamId
                }
            },
            data: {
                roleName: data.roleName
            }
        }).catch(handlerPrismaError);
    }

    async getTeamTickets(id: string) {

        const team = await this.prisma.team.findUnique({
            select: {
                tickets: true
            },
            where: {
                id
            }
        });
        if (team === null) {
            throw new ApiError(HttpStatus.NOT_FOUND,"Team not found")
        }
        return team.tickets
    }
}