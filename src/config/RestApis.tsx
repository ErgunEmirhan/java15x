const prodUrl = 'www.java15x.com'
const devUrl = 'http://localhost:9090/v1/dev'
const testUrl = 'http://localhost:9090/v1/test'
const server = devUrl;

const apis = {
    authService: server + '/user',
    userService: server + '/user',
    postService: server + '/post'
}

export default apis