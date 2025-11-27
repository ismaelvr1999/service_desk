import { PrismaClient } from "@generated/prisma/internal/class";
import { CreateUserDTO } from "./user.dto";
import ApiError from "@utils/apiError";
import HttpStatus from "@constants/httpStatuses";
export default class UserService {

    constructor(private prisma: PrismaClient) { }
    async createUser(newUser: CreateUserDTO) {
        const user = await this.prisma.user.create({
            data: newUser
        });
        return user;
    }

    async getUser(email: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        });
        if (user === null) {
            throw new ApiError(HttpStatus.NOT_FOUND, "User not found")
        }
        return user;
    }
}