<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-view>1</router-view>
  </div>
</template>

<script>
//  es6中向外暴露成员
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your xiangyang'
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
</style>
