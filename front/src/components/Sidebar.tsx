import WorkspaceWidget from "../ui/WorkspaceWidget";



export default function SideBar(){
    return(
        <div className="flex flex-col justify-start items-center border h-screen">
            <h1>Flowdesk</h1>

            <WorkspaceWidget workspaceName="Acme Studios"/>
        </div>
    )
}