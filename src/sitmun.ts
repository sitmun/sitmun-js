import 'isomorphic-unfetch';
import {Workspace} from "./workspace/workspace";
import {WorkspaceApplication} from "./workspaceapplication/workspaceapplication";
import {Configuration} from "./fixture/configuration";
import {MockWorkspace} from "./fixture/mockWorkspace";
import {MockWorkspaceApplication} from "./fixture/mockWorkspaceApplication";

type Config = {
    basePath?: string,
    data?: Configuration
}

type Token = {
    id_token: string,
}

class SitmunJS {
    private readonly basePath?: string
    private readonly data?: Configuration
    private token?: string
    private user?: string

    constructor(config: Config) {
        this.basePath = config.basePath
        this.data = config.data
    }

    async login(username: string, password: string) {
        if (this.data) {
            if (this.data.users.find(user => user.username == username && user.password == password)) {
                this.user = username
                this.token = username
            }
        } else {
            let oldToken = this.token
            this.token = null
            await this.request<Token>('api/authenticate', {
                method: 'post',
                body: JSON.stringify({username: username, password: password})
            }).then(value => {
                    this.token = value.id_token
                    this.user = username
                }
            ).catch(_ =>
                this.token = oldToken
            )
        }
    }

    isLogged(): boolean {
        return this.token != null
    }

    loggedUser(): string {
        return this.user
    }

    logout() {
        this.token = null
        this.user = null
    }

    async workspaceApplication(applicationId: number, territoryId: number): Promise<WorkspaceApplication> {
        if (this.data) {
            return new Promise((resolve, reject) => {
                const mockWorkspaceApplication: MockWorkspaceApplication = this.data.workspaceApplications.find(workspace => {
                    return workspace.username == this.user
                        && workspace.applicationId == applicationId
                        && workspace.territoryId == territoryId
                })
                if (mockWorkspaceApplication) {
                    resolve(mockWorkspaceApplication.workspaceApplication)
                } else {
                    reject({statusText: "Not found"})
                }
            })
        } else {
            return this.request<WorkspaceApplication>(`api/workspace/application/${applicationId}/territory/${territoryId}`)
        }
    }

    async workspace(): Promise<Workspace> {
        if (this.data) {
            return new Promise((resolve, reject) => {
                const mockWorkspace: MockWorkspace = this.data.workspaces.find(workspace => workspace.username == this.user)
                if (mockWorkspace) {
                    resolve(mockWorkspace.workspace)
                } else {
                    reject({statusText: "Not found"})
                }
            })
        } else {
            return this.request<Workspace>('api/workspace')
        }
    }

    protected request<T> (endpoint: string, options?: RequestInit): Promise<T> {
        const url = this.basePath + endpoint
        const headers = {
            'Content-type': 'application/json'
        }

        if (this.token != null) {
            headers['Authorization'] = 'Bearer ' + this.token
        }

        const config = {
            ...options,
            headers,
        }

        return fetch(url, config).then(r => {
            if (r.ok) {
                return r.json()
            }
            throw new Error(r.statusText)
        })
    }
}

export default SitmunJS