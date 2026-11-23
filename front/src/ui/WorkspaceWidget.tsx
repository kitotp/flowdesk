import { IoIosArrowDown } from "react-icons/io";
import { useUser } from "../features/auth/api/use-me";
import { useEffect, useState } from "react";
import { useWorkspaces } from "../features/workspaces/api/use-workspaces";
import type { Workspace } from "../features/workspaces/types";

type WorkspaceWidgetProps = {
  workspaceName: string;
  workspaceImage?: string;
};

export default function WorkspaceWidget({
  workspaceName,
  workspaceImage,
}: WorkspaceWidgetProps) {
  const user = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const { data: workspaces = [], isPending, isError } = useWorkspaces(isOpen);

  return (
    <div
      className="bg-[#181a21] rounded-md items-center flex flex-row"
      onClick={() => setIsOpen(true)}
    >
      <img src={workspaceImage} />
      <div className="flex flex-col ">
        <h1 className="text-white">{workspaceName}</h1>
        <p className="text-gray-300 text-[12px]">Workspace</p>
      </div>

      <IoIosArrowDown className="text-white shrink-0 ml-5" />

      {isOpen && (
        <div>
          <select>
            {workspaces.map((item) => (
              <option value={item.id}>{item.id}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
