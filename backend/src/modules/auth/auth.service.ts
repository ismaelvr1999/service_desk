import HttpStatus from "@constants/httpStatuses";
import { CreateUserDTO, UserCredentialsDTO } from "@module/user/user.dto";
import UserService from "@module/user/user.service";
import ApiError from "@utils/apiError";
import JWT from "@utils/jwt";
import bcrypt from "bcrypt";
export default class AuthService {
    constructor(private userService: UserService, private jwt: JWT) { }

    async signUp(newUser: CreateUserDTO) {
        newUser.password = await bcrypt.hash(newUser.password, 10);
        await this.userService.createUser(newUser);
    }

    async login(userCredentials: UserCredentialsDTO) {
        const user = await this.userService.getUser(userCredentials.email);
        const isPassValid = await bcrypt.compare(userCredentials.password, user.password);
        if (!isPassValid) {
            throw new ApiError(HttpStatus.UNAUTHORIZED, "Password incorrect");
        }
        const payload = this.jwt.getPayload(user);
        const token = this.jwt.signToken(payload)
        return { token, profile: payload }
    }
}