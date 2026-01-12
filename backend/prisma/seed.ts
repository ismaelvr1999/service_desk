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
            { name: "read_ticket_comments", description: "read ticket comments" },
            { name: "create_ticket_comment", description: "create ticket comment" },
            { name: "delete_ticket", description: "delete ticket" },
            { name: "update_ticket_agent", description: "update ticket agent" },
            { name: "update_ticket_status", description: "update ticket status" },
            { name: "read_team", description: "read team" },
            { name: "update_team", description: "update team" },
            { name: "read_team_agents", description: "read team agents" },
            { name: "add_team_agent", description: "add team agent" },
            { name: "update_team_agent", description: "update team agent" },
            { name: "remove_team_agent", description: "remove team agent" },
            { name: "read_team_tickets", description: "remove team tickets" },

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
            { roleName: "admin", permissionName: "read_ticket_logs" },
            { roleName: "requester", permissionName: "read_ticket_comments" },
            { roleName: "agent", permissionName: "read_ticket_comments" },
            { roleName: "admin", permissionName: "read_ticket_comments" },
            { roleName: "requester", permissionName: "create_ticket_comment" },
            { roleName: "agent", permissionName: "create_ticket_comment" },
            { roleName: "admin", permissionName: "create_ticket_comment" },
            { roleName: "admin", permissionName: "delete_ticket" },
            { roleName: "agent", permissionName: "update_ticket_agent" },
            { roleName: "admin", permissionName: "update_ticket_agent" },
            { roleName: "agent", permissionName: "update_ticket_status" },
            { roleName: "admin", permissionName: "update_ticket_status" },
            { roleName: "agent", permissionName: "read_team" },
            { roleName: "admin", permissionName: "read_team" },
            { roleName: "admin", permissionName: "update_team" },
            { roleName: "agent", permissionName: "read_team_agents" },
            { roleName: "admin", permissionName: "read_team_agents" },
            { roleName: "admin", permissionName: "add_team_agent" },
            { roleName: "admin", permissionName: "update_team_agent" },
            { roleName: "admin", permissionName: "remove_team_agent" },
            { roleName: "agent", permissionName: "read_team_tickets" },
            { roleName: "admin", permissionName: "read_team_tickets" },
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