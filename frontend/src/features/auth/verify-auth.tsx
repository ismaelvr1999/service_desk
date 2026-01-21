import { Outlet } from "react-router";
import { useAppDispatch } from "@app/hooks";
import { verify, setIsUserAuth, setUser, userSchema, setLoading } from "@features/auth";
import { useEffect } from "react";
const VerifyAuth = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        verify().then((result) => {
            const profile = userSchema.parse(result.data.profile);
            dispatch(setUser(profile));
            dispatch(setIsUserAuth(true));
            dispatch(setLoading(false));
        }).catch((error) => {
            console.log((error as Error).message);
            dispatch(setIsUserAuth(false));
            dispatch(setLoading(false));
        })
    }, [])
    return <Outlet />
}

export default VerifyAuth;