<template>
  <div id="app">
    <Information />
    <Chat2 />
  </div>
</template>

<script>

import Information from './components/Information.vue';
import Chat2 from './components/Chat2.vue';

export default {
  name: 'app',
  components: {
    Information,
    Chat2
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,800');
body {
  margin: 0;
  padding: 0;
  color: #2B303D;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  border: 10px solid #2B303D;
  box-sizing: border-box;
}
</style>
