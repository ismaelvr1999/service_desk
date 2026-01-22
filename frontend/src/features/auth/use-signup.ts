import { useAppSelector } from "@app/hooks";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { type FormSignUp, formSignUpSchema, signUp, selectIsUserAuth } from "@features/auth";
import { useNavigate } from "react-router";
const useSignUp = () => {
    const { register, handleSubmit } = useForm<FormSignUp>({
        resolver: zodResolver(formSignUpSchema)
    });
    const nav = useNavigate();
    const isUserAuth = useAppSelector(selectIsUserAuth);
    const onSubmit: SubmitHandler<FormSignUp> = async (d) => {
        try {
            await signUp(d);
            nav("/login");
        } catch (error) {
            console.log((error as Error).message)
        }
    }
    useEffect(() => {
        if (isUserAuth) {
            nav("/home");
        }
    }, [isUserAuth]);
    return { register, handleSubmit, onSubmit }
}

export default useSignUp;