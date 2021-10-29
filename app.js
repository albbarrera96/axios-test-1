new Vue ({
  el: '#vue-app',

data: {
  posts: []
},

methods: {
    getPosts (){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.posts = response.data)
    }

}

});
