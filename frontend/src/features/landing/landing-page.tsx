import { NavLink } from "react-router";
import useLanding from "./use-landing";
export default function LandingPage() {
    useLanding();
    return (
        <div className="w-screen h-screen bg-primary flex justify-center items-center">
            <div>
                <h1 className="text-5xl text-body font-bold mb-5">Welcome to service desk</h1>
                <div className="flex justify-center items-center gap-8">
                    <NavLink to="/login" className="cursor-pointer text-3xl text-body font-bold" end>
                        Login
                    </NavLink>
                    <NavLink to="/signup" className="cursor-pointer text-3xl bg-blue rounded-xl p-2 text-primary font-bold" end>
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </div>
    )
}