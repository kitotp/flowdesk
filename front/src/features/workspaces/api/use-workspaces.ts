import { useQuery } from "@tanstack/react-query";
import { getWorkspaces } from "./workspaces.api";

export function useWorkspaces(enabled: boolean) {
  return useQuery({
    queryKey: ["workspaces"],
    queryFn: getWorkspaces,
    enabled: enabled,
  });
}
