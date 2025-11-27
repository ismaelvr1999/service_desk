import HttpStatus from "@constants/httpStatuses";

export default class ApiError extends Error{
    public status: HttpStatus; 
    constructor(status:HttpStatus,message:string){
        super(message);
        this.name = "ApiError";
        this.status = status;
        Error.captureStackTrace(this,this.constructor);
    }
}