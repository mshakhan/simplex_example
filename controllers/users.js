simplex.controller.define('users', {
  actions: {
    index: function() {
      this.title = 'Users controller'
      this.id = this.params.id 
    }
  }
})

