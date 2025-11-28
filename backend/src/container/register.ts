import { config } from "dotenv";
import * as awilix from "awilix";

config({ quiet: true });

const {
    PORT = 5000,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_NAME,
    DATABASE_HOST,
    DATABASE_PORT,
    CONNECTION_LIMIT,
    NODE_ENV,
    JWT_SECRET
} = process.env;

const dbConfig = {
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    host: DATABASE_HOST,
    database: DATABASE_NAME,
    port: DATABASE_PORT,
    connectionLimit: CONNECTION_LIMIT
}

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.CLASSIC,
    strict: true
})

export default container;

//ENV 
container.register({
    port: awilix.asValue(PORT),
    dbConfig: awilix.asValue(dbConfig),
    debugging: awilix.asValue(NODE_ENV === "development"),
    secret: awilix.asValue(JWT_SECRET)
})
//DB Client
container.register({
    prisma: awilix.asValue(require("@lib/prisma").default)
});

//SERVICES
container.register({
    userService: awilix.asClass(require("@module/user/user.service").default),
    authService: awilix.asClass(require("@module/auth/auth.service").default)
});
//CONTROLLERS
container.register({
    authController: awilix.asClass(require("@module/auth/auth.controller").default)
});
//UTILS
container.register({
    jwt: awilix.asClass(require("@utils/jwt").default)
})