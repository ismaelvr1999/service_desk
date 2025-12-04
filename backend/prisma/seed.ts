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
        ]
    });
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