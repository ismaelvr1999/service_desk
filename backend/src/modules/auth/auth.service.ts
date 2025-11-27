import { CreateUserDTO } from "@module/user/user.dto";
import UserService from "@module/user/user.service";

export default class AuthService {
    constructor(private userService: UserService) { }

    async signIn(newUser: CreateUserDTO) {
        return this.userService.createUser(newUser);
    }
}