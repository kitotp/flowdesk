import { IoIosArrowDown } from "react-icons/io";

type WorkspaceWidgetProps = {
    workspaceName: string,
    workspaceImage?: string
}

export default function WorkspaceWidget({workspaceName, workspaceImage}: WorkspaceWidgetProps){
    return(
        <div className="bg-[#181a21] rounded-md items-center flex flex-row">
            <img src={workspaceImage} />
            <div className="flex flex-col ">
                <h1 className="text-white">{workspaceName}</h1>
                <p className="text-gray-300 text-[12px]">Workspace</p>
            </div>

            <IoIosArrowDown className="text-white shrink-0 ml-5" />
        </div>
    )
}