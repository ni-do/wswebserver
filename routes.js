const renderWithLayout = (content) => {
  return `
  <html>
  <head>
    <meta charset='utf-8'>
    <title>wsWebServer project</title>
  </head>
  <body>
  ${content}
  </body>
  </html>
  `
}


const home = (response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  })

  response.write(renderWithLayout('<h1>home</h1>'))
  response.end()
}

const test = (response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  })

  response.write(renderWithLayout('<h1>test page</h1>'))
  response.end()
}

module.exports = {
  home,
  test,
}