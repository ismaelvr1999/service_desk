import { JWTPayloadDTO } from "@module/auth/auth.dto";

export default class JWT {
    constructor(private secret:string ){}
    signToken(payload: JWTPayloadDTO){

    }
} 