import { JWTPayloadDTO } from "@module/auth/auth.dto";
import { UserDTO } from "@module/user/user.dto";
import jwt from "jsonwebtoken";
export default class JWT {
    constructor(private secret: string) { }
    signToken(payload: JWTPayloadDTO) {
        return jwt.sign(payload,this.secret,{expiresIn: "7d"});
    }
    getPayload(user: UserDTO){
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            picture: user.picture,
            phoneNumber: user.phoneNumber
        }
    }
} 