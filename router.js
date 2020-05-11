const routes = require('./routes')

const routePaths = {
  "/": routes.home,
  "/test": routes.test,
}

const route = (path, response) => {
  if (routePaths[path]) {
    routePaths[path](response)
  } else {
    response.writeHead(404, {
      'Content-Type': 'text/plain'
    })
    response.write(`damn it, the url [${path}] was wrong!`)
    response.end()
  }

}

module.exports.route = route
