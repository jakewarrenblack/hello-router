<template>
  <div id="app">
    <NavBar/>

    <img alt="Vue logo" src="./assets/logo.png">
    <!-- have to tell app.vue where to display our pages -->
    <!-- you should only ever have one router-view! -->
    <router-view/>

    <footer>
      This is a footer
    </footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app{
  text-align:center;
}
footer{
  padding:1rem;
  font-size:0.8rem;
  width:100%;
  background:lightblue;
  height: max-content;
  text-align:center;
}
</style>
