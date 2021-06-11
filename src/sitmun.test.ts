const SitmunJs = require('../dist/sitmun.umd')

describe('SitmunJS', () => {
    test('setup', () => {
        const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })
        console.log(SitmunJsClient)
    })

    test('successful login', async () => {
        const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })
        await SitmunJsClient.login("user12", "user12")
        expect(SitmunJsClient.isLogged()).toBe(true)
    })

    test('failed login', async () => {
        const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })
        await SitmunJsClient.login("user12", "user12x")
        expect(SitmunJsClient.isLogged()).toBe(false)
    })

    test('request workspace', async () => {
        const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })
        await SitmunJsClient.workspace().then((data) => {
            console.log(JSON.stringify(data, null, 2))
        })
    })

    test('request workspace application', async () => {
        const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })
        await SitmunJsClient.workspaceApplication(1, 41).then((data) => {
            console.log(JSON.stringify(data, null, 2))
        })
    })

})