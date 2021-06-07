import fetch from 'isomorphic-unfetch'
import {Workspace} from "./workspace/workspace";
import {WorkspaceApplication} from "./workspaceapplication/workspaceapplication";

type Config = {
    basePath?: string
}

type Token = {
    id_token: string,
}

class SitmunJS {
    private readonly basePath?: string
    private token?: string

    constructor(config: Config) {
        this.basePath = config.basePath
    }

    async login(username: string, password: string) {
        let oldToken = this.token
        this.token = null
        await this.request<Token>('api/authenticate', {
            method: 'post',
            body: JSON.stringify({ username: username, password: password})
        }).then(value => {
                this.token = value.id_token
                console.log("success")
            }
        ).catch( _ => this.token = oldToken)
    }

    isLogged(): boolean {
        return this.token != null
    }

    async workspaceApplication(applicationId: number, territoryId: number): Promise<WorkspaceApplication> {
        return this.request<WorkspaceApplication>(`api/workspace/application/${applicationId}/territory/${territoryId}`)
    }

    async workspace(): Promise<Workspace> {
        return this.request<Workspace>('api/workspace')
    }

    protected request<T> (endpoint: string, options?: RequestInit): Promise<T> {
        const url = this.basePath + endpoint
        const headers = {
            'Content-type': 'application/json'
        }

        if (this.token != null) {
            headers['Authorization'] = this.token
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