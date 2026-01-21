import { Outlet, Navigate } from "react-router";
import { useAppSelector } from "@app/hooks";
import { selectIsUserAuth} from "@features/auth";
const ProtectedRouters = () => {
    const isUserAuth = useAppSelector(selectIsUserAuth);
    //const dispatch = useAppDispatch();
    console.log(isUserAuth)
    return isUserAuth ? <Outlet /> : <Navigate to="login" replace />
}

export default ProtectedRouters;