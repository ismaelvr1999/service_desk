import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from "@generated/prisma/client"
import container from "@container/register";

const dbConfig  = container.resolve("dbConfig");
const adapter = new PrismaMariaDb(dbConfig);
const prisma = new PrismaClient({ adapter });

export default prisma;