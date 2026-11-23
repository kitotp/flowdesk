import { request } from "../../../shared/api/request";
import type { Workspace } from "../types";

export function getWorkspaces() {
  return request<Workspace[]>("workspaces", {
    method: "GET",
  });
}
