import { useUser } from "../features/auth/api/use-me";
import WorkspaceWidget from "../ui/WorkspaceWidget";

export default function SideBar() {
  const user = useUser();

  return (
    <div className="flex flex-col justify-start items-center border h-screen">
      <h1>Flowdesk</h1>

      <WorkspaceWidget workspaceName="Acme Studios" />

      <div className="flex flex-row mt-auto items-center">
        <div className="w-8 h-8 rounded-full bg-white" />

        <div className="flex flex-col  text-white items-center justify-center">
          <p>{user?.email}</p>
          <p>Acme studio</p>
        </div>
      </div>
    </div>
  );
}
