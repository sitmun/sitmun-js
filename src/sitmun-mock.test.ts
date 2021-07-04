const SitmunJs = require('../dist/sitmun.umd')
import type {Configuration} from './fixture/configuration'

const data : Configuration = {
    users : [{username: "user12", password: "user12" }],
    workspaces : [
        {
            workspace : {
                config: [],
                territories: [{
                    id: 1,
                    name: "example",
                    userConfigurations: []
                }]
            }
        },
        {
            username: "user12",
            workspace : {
                config: [],
                territories: [{
                    id: 1,
                    name: "example 1",
                    userConfigurations: []
                },{
                    id: 2,
                    name: "example 2",
                    userConfigurations: []
                }]
            }
        }
    ],
    workspaceApplications : [
        {
            applicationId: 1,
            territoryId: 41,
            workspaceApplication: {
                config: [],
                territory: {
                   id: 41,
                   name: "Territory"
                },
                application: {
                    id: 1,
                    name: "Application",
                    type: "I",
                    background: []
                },
                roles: [
                    {
                        id: 1,
                        name: "role 1",
                        tasks: [],
                        permissions: [],
                        trees: []
                    }
                ]
            }

        },
        {
            username: "user12",
            applicationId: 1,
            territoryId: 41,
            workspaceApplication: {
                config: [],
                territory: {
                    id: 41,
                    name: "Territory"
                },
                application: {
                    id: 1,
                    name: "Application",
                    type: "I",
                    background: []
                },
                roles: [
                    {
                        id: 1,
                        name: "role 1",
                        tasks: [],
                        permissions: [],
                        trees: []
                    },
                    {
                        id: 2,
                        name: "role 2",
                        tasks: [],
                        permissions: [],
                        trees: []
                    }
                ]
            }

        }
    ]
}

async function ensureLogin(target, user, password) {
    expect(target.isLogged()).toBe(false)
    await target.login(user, password)
    expect(target.isLogged()).toBe(true)
    expect(target.loggedUser()).toBe(user)
}

describe('SitmunJS-mock', () => {
    test('setup', () => {
        const SitmunJsClient = new SitmunJs({data: data})
        expect(SitmunJsClient.isLogged()).toBe(false)
    })

    test('public client requests workspace', async () => {
        const SitmunJsClient = new SitmunJs({data: data})
        expect(SitmunJsClient.isLogged()).toBe(false)

        await SitmunJsClient.workspace().then((data) => {
            expect(data.territories.length).toBe(1)
        })
    })

    test('successful login', async () => {
        const SitmunJsClient = new SitmunJs({ data: data })
        await ensureLogin(SitmunJsClient, "user12", "user12")

        await SitmunJsClient.workspace().then((data) => {
            expect(data.territories.length).toBe(2)
        })
    })

    test('failed login', async () => {
        const SitmunJsClient = new SitmunJs({ data: data })
        await SitmunJsClient.login("user12", "user12x")
        expect(SitmunJsClient.isLogged()).toBe(false)
    })

    test('logout', async () => {
        const SitmunJsClient = new SitmunJs({ data: data })
        await ensureLogin(SitmunJsClient, "user12", "user12")
        SitmunJsClient.logout()
        expect(SitmunJsClient.isLogged()).toBe(false)
    })

    test('request workspace', async () => {
        const SitmunJsClient = new SitmunJs({ data: data })

        expect(SitmunJsClient.isLogged()).toBe(false)
        await SitmunJsClient.workspace().then((data) => {
            expect(data.territories.length).toBe(1)
        })

        await ensureLogin(SitmunJsClient, "user12", "user12")

        await SitmunJsClient.workspace().then((data) => {
            expect(data.territories.length).toBe(2)
        })

    })

    test('request workspace application', async () => {
        const SitmunJsClient = new SitmunJs({ data: data })
        await SitmunJsClient.workspaceApplication(1, 41).then((data) => {
            expect(data.roles.length).toBe(1)
        })

        await ensureLogin(SitmunJsClient, "user12", "user12")

        await SitmunJsClient.workspaceApplication(1, 41).then((data) => {
            expect(data.roles.length).toBe(2)
        })
    })
})
