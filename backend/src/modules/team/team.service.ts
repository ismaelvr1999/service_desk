import { PrismaClient } from "@generated/prisma/internal/class";
import { CreateTeamDTO, EditTeamDTO } from "./team.dto";
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
        return this.prisma.team.update({
            where: {
                id
            },
            data
        });
    }

    async deleteTeam(id: string) {
        return this.prisma.team.delete({
            where: {
                id
            }
        });
    }

}