<template>
  <div id="app">
    <div id="nav">
      <button><router-link to="/home">Home</router-link></button>
      <button><router-link to="/top">Top</router-link></button>
      <button><router-link to="/full">Full</router-link></button>
    </div>
    <router-view/>
  </div>
</template>

<style>

  .form-wrapper {
    width: 500px;
    margin: 0 auto;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
