import { PrismaClient } from "../generated/prisma/client";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { config } from "dotenv";
config({ quiet: true });
const {
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_NAME,
    DATABASE_HOST,
    DATABASE_PORT,
    CONNECTION_LIMIT,
} = process.env;
const dbConfig = {
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    host: DATABASE_HOST,
    database: DATABASE_NAME,
    port: Number(DATABASE_PORT),
    connectionLimit: Number(CONNECTION_LIMIT)
}
const adapter = new PrismaMariaDb(dbConfig);
const prisma = new PrismaClient({ adapter });
async function main() {
    await prisma.role.createMany({
        data: [
            { name: "admin", description: "admin role" },
            { name: "agent", description: "agent role" },
            { name: "requester", description: "requester role" },
        ],
        skipDuplicates: true
    });

    await prisma.permission.createMany({
        data: [
            { name: "create_ticket", description: "create ticket" },
            { name: "read_ticket", description: "read ticket" },
            { name: "read_ticket_logs", description: "read ticket logs" },
        ],
        skipDuplicates: true
    });

    await prisma.rolePermission.createMany({
        data: [
            { roleName: "requester", permissionName: "create_ticket" },
            { roleName: "agent", permissionName: "create_ticket" },
            { roleName: "admin", permissionName: "create_ticket" },
            { roleName: "requester", permissionName: "read_ticket" },
            { roleName: "agent", permissionName: "read_ticket" },
            { roleName: "admin", permissionName: "read_ticket" },
            { roleName: "requester", permissionName: "read_ticket_logs" },
            { roleName: "agent", permissionName: "read_ticket_logs" },
            { roleName: "admin", permissionName: "read_ticket_logs" }
        ],
        skipDuplicates: true
    })

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })