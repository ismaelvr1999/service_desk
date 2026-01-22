import { Outlet, NavLink } from "react-router";

export default function UserLayout (){
    return(
      <div className="w-full h-screen bg-primary">
        <Outlet />
      </div>  
    );
}