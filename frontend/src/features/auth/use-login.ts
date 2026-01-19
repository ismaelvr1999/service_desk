import { useForm, } from "react-hook-form";
import { formLoginSchema } from "./auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FormLogin } from "./auth.types";
const useLogin = () => {
    const { register, handleSubmit } = useForm<FormLogin>({
        resolver: zodResolver(formLoginSchema)
    });

    return {register, handleSubmit}
}

export default useLogin;