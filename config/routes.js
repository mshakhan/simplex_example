simplex.routes.root(function() {
  return { controller: 'root', action: 'index' }
})

// urls like /controller/action or /controller/action/id
simplex.routes.map('^\\/(\\w+)\\/?(\\w*)*\\/?(\\d*)', defaultHandler)

function defaultHandler(match) {
  var location = {}
  location.controller = match[1]
  location.action = match[2] ? match[2] : 'index'
  if(match[3]) {
    location.id = match[3]    
  }
  
  return location
}

