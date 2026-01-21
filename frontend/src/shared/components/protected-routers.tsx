import { Outlet, Navigate } from "react-router";
import { useAppSelector } from "@app/hooks";
import { selectIsUserAuth ,selectLoading} from "@features/auth";
import Spinner from "./spinner";
const ProtectedRouters = () => {
    const isUserAuth = useAppSelector(selectIsUserAuth);
    const loading = useAppSelector(selectLoading);
    if(loading){
        return <Spinner />
    }
    return isUserAuth ? <Outlet /> : <Navigate to="login" replace />
}

export default ProtectedRouters;