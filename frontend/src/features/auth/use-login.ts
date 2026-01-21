import { useForm, type SubmitHandler, } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@app/hooks";
import { useNavigate } from "react-router";
import { 
    setUser, 
    setIsUserAuth, 
    type FormLogin, 
    signIn, 
    formLoginSchema,
    userSchema
} from "@features/auth";
const useLogin = () => {
    const { register, handleSubmit } = useForm<FormLogin>({
        resolver: zodResolver(formLoginSchema)
    });
    const dispatch = useAppDispatch();
    const nav = useNavigate();
    const onSubmit: SubmitHandler<FormLogin> = async (d) => {
        try {
            const result = await signIn(d);
            const user = userSchema.parse(result.data.profile);
            dispatch(setIsUserAuth(true));
            dispatch(setUser(user));
            nav("/home");
        } catch (error) {
            console.error((error as Error).message)
        }
    }
    return { register, handleSubmit, onSubmit }
}

export default useLogin;