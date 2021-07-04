const SitmunJs = require('../dist/sitmun.umd')

async function ensureLogin(target, user, password) {
    expect(target.isLogged()).toBe(false)
    await target.login(user, password)
    expect(target.isLogged()).toBe(true)
    expect(target.loggedUser()).toBe(user)
}

describe('SitmunJS', () => {
    test('setup', () => {
        const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })
        expect(SitmunJsClient.isLogged()).toBe(false)
    })

    test('public client requests workspace', async () => {
        const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })
        expect(SitmunJsClient.isLogged()).toBe(false)

        await SitmunJsClient.workspace().then((data) => {
            expect(data.territories.length).toBe(7)
        })
    })

    test('successful login', async () => {
        const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })
        await ensureLogin(SitmunJsClient, "user12", "user12")

        await SitmunJsClient.workspace().then((data) => {
            expect(data.territories.length).toBe(322)
        })
    })

    test('failed login', async () => {
        const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })
        await SitmunJsClient.login("user12", "user12x")
        expect(SitmunJsClient.isLogged()).toBe(false)
    })

    test('logout', async () => {
        const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })
        await ensureLogin(SitmunJsClient, "user12", "user12")
        SitmunJsClient.logout()
        expect(SitmunJsClient.isLogged()).toBe(false)
    })

    test('request workspace', async () => {
        const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })

        expect(SitmunJsClient.isLogged()).toBe(false)
        await SitmunJsClient.workspace().then((data) => {
            expect(data.territories.length).toBe(7)
        })

        await ensureLogin(SitmunJsClient, "user12", "user12")

        await SitmunJsClient.workspace().then((data) => {
            expect(data.territories.length).toBe(322)
        })

    })

    test('request workspace application', async () => {
        const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })
        await SitmunJsClient.workspaceApplication(1, 41).then((data) => {
            expect(data.roles.length).toBe(1)
        })

        await ensureLogin(SitmunJsClient, "user12", "user12")

        await SitmunJsClient.workspaceApplication(1, 41).then((data) => {
            expect(data.roles.length).toBe(2)
        })
    })

})
