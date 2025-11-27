import { PrismaClient } from "@generated/prisma/internal/class";
import { CreateUserDTO } from "./user.dto";
export default class UserService {

    constructor(private prisma: PrismaClient) { }
    async createUser(newUser: CreateUserDTO) {
        const user = await this.prisma.user.create({
            data: newUser
        });
        return user;
    }
}