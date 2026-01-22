import { Outlet, NavLink } from "react-router";

export function AuthLayout() {
    return (
        <div className="w-screen h-screen bg-primary">
            <div className="flex gap-6 justify-end items-center p-5">
                <NavLink to="/login" className="cursor-pointer text-xl text-body font-semibold" end>
                    Login
                </NavLink>
                <NavLink to="/signup" className="cursor-pointer text-xl bg-blue rounded-xl p-2 text-primary font-semibold" end>
                    Sign Up
                </NavLink>
            </div>
            <div className="w-full h-fit flex justify-center">
                <Outlet />
            </div>
        </div>
    );
}

