node.mixin(require('../vendor/simplex/lib/simplex.js'))

simplex.env = {
  type: 'dev',
  root: __filename.replace(/\/config\/env.js$/, ''), // keep it simple =)
  port: 8000,
  db: {
    adapter: 'sqlite3',
    dbName: simplex.utils.joinPath([simplex.env.root, 'blog.db'])
  }  
}
