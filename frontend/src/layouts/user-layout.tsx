import { Outlet, NavLink } from "react-router";

export default function UserLayout() {
  return (
    <div className="w-full h-screen bg-primary flex">
      {/* Menu */}
      <div className="h-screen p-2 flex flex-col justify-between bg-menu">
        {/* Links */}
        <div>
          {/* Link */}
          <NavLink to={"#"} className="flex flex-col items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="text-body">
              <g fill="none" fill-rule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path fill="currentColor" d="M13 4a1 1 0 0 1 .993.883L14 5a1 1 0 0 0 1.993.117L16 5a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2a1 1 0 0 1-.993-.883L16 19a1 1 0 0 0-1.993-.117L14 19a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm2 9a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m0-5a1 1 0 0 0-.993.883L14 9v1a1 1 0 0 0 1.993.117L16 10V9a1 1 0 0 0-1-1" />
              </g>
            </svg>
            <h1 className="text-base text-body">Tickets</h1>
          </NavLink>

          {/* Link */}
          <NavLink to={"/teams"} className="flex flex-col items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="text-body">
              <path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5m-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6z" />
            </svg>
            <h1 className="text-base text-body text-center">Teams</h1>
          </NavLink>

          {/* Link */}
          <NavLink to={"#"} className="flex flex-col items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="text-body">
              <path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2" />
            </svg>
            <h1 className="text-base text-body text-center">Alerts</h1>
          </NavLink>
        </div>
        {/* user link */}
        <NavLink to={"#"} className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16" className="text-body">
            <path fill="currentColor" d="M11 7c0 1.66-1.34 3-3 3S5 8.66 5 7s1.34-3 3-3s3 1.34 3 3" />
            <path fill="currentColor" fill-rule="evenodd" d="M16 8c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8M4 13.75C4.16 13.484 5.71 11 7.99 11c2.27 0 3.83 2.49 3.99 2.75A6.98 6.98 0 0 0 14.99 8c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 2.38 1.19 4.49 3.01 5.75" clip-rule="evenodd" />
          </svg>
        </NavLink>
      </div>
      {/* Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}