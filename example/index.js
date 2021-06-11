import SitmunJs from '@sitmun/sitmun-js'

const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })

console.log("Login")
console.log("=====")
await SitmunJsClient.login("user12", "user12")
console.log("Successful")

SitmunJsClient.workspace().then((data ) => {
    console.log("\nRequest workspace data")
    console.log("======================")
    console.log("Configuration data:")
    console.log(data.config)
    console.log("Territory data:")
    console.log(data.territories)
})

SitmunJsClient.workspaceApplication(1, 41).then((data ) => {
    console.log("\nRequest workspace application data")
    console.log("==================================")
    console.log("Configuration data:")
    console.log(data.config)
    console.log("Territory data:")
    console.log(data.territory)
})

