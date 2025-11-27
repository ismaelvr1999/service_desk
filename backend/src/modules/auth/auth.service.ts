import { CreateUserDTO, UserCredentialsDTO } from "@module/user/user.dto";
import UserService from "@module/user/user.service";
import bcrypt from "bcrypt";
export default class AuthService {
    constructor(private userService: UserService) { }

    async signUp(newUser: CreateUserDTO) {
        newUser.password = await bcrypt.hash(newUser.password,10);
        await this.userService.createUser(newUser);
    }

    async login(userCredentials: UserCredentialsDTO){
        const user = await this.userService.getUser(userCredentials.email);

    }
}