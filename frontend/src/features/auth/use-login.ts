import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { useNavigate } from "react-router";
import {
    setUser,
    setIsUserAuth,
    type FormLogin,
    signIn,
    formLoginSchema,
    userSchema,
    setLoading,
    selectIsUserAuth
} from "@features/auth";
import { useEffect } from "react";
const useLogin = () => {
    const { register, handleSubmit } = useForm<FormLogin>({
        resolver: zodResolver(formLoginSchema)
    });
    const dispatch = useAppDispatch();
    const isUserAuth = useAppSelector(selectIsUserAuth);
    const nav = useNavigate();

    const onSubmit: SubmitHandler<FormLogin> = async (d) => {
        try {
            const result = await signIn(d);
            const user = userSchema.parse(result.data.profile);
            dispatch(setIsUserAuth(true));
            dispatch(setUser(user));
            dispatch(setLoading(false));
            nav("/home");
        } catch (error) {
            console.error((error as Error).message)
        }
    }

    useEffect(() => {
        if (isUserAuth) {
            nav("/home");
        }
    }, [isUserAuth])

    return { register, handleSubmit, onSubmit }
}

export default useLogin;