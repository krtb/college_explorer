<template>

  <div class="hello">

    <div class="card w-50 mx-auto" style="width: 200px;">
  <div class="card-body">
    <h1 class="card-title">{{ msg }}</h1>
    <p class="card-text " >
      
      Hi! This is a web app built with Vue, Node and Express. <br />
      
      You can click on the "schools" link you can view a list
      of colleges and universities in New York city that offer a bachelor's 
      degree in education.

    </p>
  </div>
</div>

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello, world!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  margin: 100px;
}

.card-text {
  padding: 50px;
}
</style>
