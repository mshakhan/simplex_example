exports.env = {
  type: 'dev',
  root: __filename.replace(/\/config\/env.js$/, ''), // keep it simple =)
  port: 8000
}

node.mixin(require('../vendor/simplex/lib/simplex.js'))
