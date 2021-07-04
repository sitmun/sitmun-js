import type {MockWorkspace} from "./mockWorkspace";
import type {MockUser} from "./mockUser";
import {MockWorkspaceApplication} from "./mockWorkspaceApplication";

export type Configuration = {
    users: MockUser[],
    workspaces: MockWorkspace[],
    workspaceApplications: MockWorkspaceApplication[]
}

