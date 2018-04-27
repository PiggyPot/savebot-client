<template>
  <div class="information_wrap">
    <div class="text-wrap">
      <h1>Savebot ⚡️</h1>
      <p>
        Savebot is a free tool that will help you calcuate how much money you
        could have saved after a peroid of time.
      </p>  
      <p>
        Savebot takes into consideration compound interest, for a clear
        visualisation into how important interest can aid your saving over time.
      </p>
      <p>
        To use Savebot, just naturally answer the questions it asks you.
      </p>
    </div>
    <img src="../assets/pigbg.jpg" class="pigbg"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .information_wrap {
    flex: 1;
    background-color: #F6F6F4;
    z-index: -2;
  }

  .text-wrap {
    padding: 0 20px;
  }

  .pigbg {
    width: 60%;
    transform: scaleX(-1);
    position: absolute;
    bottom: 0;
    z-index: -1;
  }
  
</style>
