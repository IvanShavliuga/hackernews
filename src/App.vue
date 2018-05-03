<template>
  <div id="app">
    <navigation></navigation>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation/Navigation';
import TopNews from './components/Pages/TopNews';

export default {
  name: 'app',
  data () {
    return {
      message: 'Another Hacker News App'
    }
  },
  components: { Navigation },
}
</script>



<style lang="scss">
$nav-height: 4rem;
html, body {
  margin: 0;
  box-sizing: border-box;
  display: flex;
  min-height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  min-height: 100%;
  width: 100vw;
}

main {
  margin: 3.5rem auto;
}

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
