import { config } from "dotenv";
import * as awilix from "awilix";
config({quiet:true});

const {
    PORT = 5000
} = process.env;

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.CLASSIC,
    strict: true
})

export default container;

//ENV 
container.register({
    port: awilix.asValue(PORT)
})