import ApiError from "@utils/apiError";
import { PrismaClient } from "@generated/prisma/internal/class";
import HttpStatus from "@constants/httpStatuses";
export default class RoleService {
    constructor(private prisma: PrismaClient) { }

    async getRoleByName(name: string) {
        const role = await this.prisma.role.findUnique({
            where: {
                name
            }
        });
        if(role === null){
            throw new ApiError(HttpStatus.NOT_FOUND,"Role not found");
        }
        return role;
    }
}