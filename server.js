const http = require('http')
const url = require('url')

const start = (router) => {
  const handleRequest = (request, response) => {
    let path = url.parse(request.url).pathname
    router(path, response)
  }

  http.createServer(handleRequest).listen(3000)
}

module.exports.start = start
