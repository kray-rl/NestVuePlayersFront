<template>
  <div id="app">
    <div id="nav">
      <h1>Nest Players Test App</h1>
      <button><router-link to="/home">Начало</router-link></button>
      <button><router-link to="/top">Топ 5</router-link></button>
      <button><router-link to="/full">Весь список</router-link></button>
    </div>
    <div class="wrapper">
      <router-view/>
    </div>
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

button{
  min-width: 150px;
  margin-right: 20px;
  border: 1px solid green;
  background: white;
}

.wrapper{
  border: 1px solid green;
  max-width: 1350px;
  margin: 0 auto;
  border-radius: 25px;
}
</style>
