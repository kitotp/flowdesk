import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import SideBar from "../components/Sidebar";

const RootLayout = () => (
  <>
    <div className="flex flex-row bg-[#0f1118]">
      <SideBar />
      <Outlet />
    </div>

    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
