import { useEffect } from "react";
import { useAppSelector } from "@app/hooks";
import { useNavigate } from "react-router";
import { selectIsUserAuth } from "@features/auth";
const useLanding = () => {
    const isUserAuth = useAppSelector(selectIsUserAuth);
    const nav = useNavigate();

    useEffect(() => {
        if (isUserAuth) {
            nav("/home");
        }
    }, [isUserAuth])
}

export default useLanding;