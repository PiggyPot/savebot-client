<template>
  <div class="chat-container" id="chat">
    <div>
    <transition name="fade">
      <h1>{{serverMessage}}</h1>
    </transition>
    </div>
    <div class="form-wrapper">
      <form action="">
        <input v-model="clientMessage" id="msg" autocomplete="off" placeholder="Type your message here" />
        <button v-on:click.prevent="SendMessage('hello')">
          <img src="../assets/tick.svg" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat2',
  data: function() {
    return {
      context: null,
      clientMessage: '',
      serverMessage: '',
    }
  },
  sockets: {
    chatMessage: function(data) {
      this.$data.context = data.context;
      this.$data.serverMessage = data.msg[0];
    }
  },
  methods: {
    SendMessage: function() {
      if (this.$data.clientMessage == '') {
       return false;
      }

      this.$socket.emit('chat message', {
        context: this.$data.context,
        msg: this.$data.clientMessage,
      });
      this.$data.clientMessage = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1 {
    font-weight: 400;
    font-size: 3vw;
  }

  .chat-container {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    padding-bottom: 100px;
    overflow-y: scroll;
    background-color: #1BD9CD;
    flex: 1;
    padding-top: 58px;
  }

  .form-wrapper {
    width: 100%;
    min-width: 300px;
  }

  form {
    display: flex;
    align-items: center;
    width: 50%;
  }

  form input {
    flex: 1;
    border: 0;
    font-size: 2.5vw;
    background-color: transparent;
    border-radius: 6px;
    outline: none;
    height: 40px;
    color: #2B303D;
    font-weight: bold;
  }
  form button {
    border: none;
    background: white;
    border-radius: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    height: 40px;
    width: 40px;
    margin-left: 20px;
  }
  
  form button img {
    position: relative;
    top: 1.5px;
    width: 25px;
    height: 25px;
  }

  input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #19D1C8;
  } 

  form button:hover {
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .messages {
    display: flex;
    flex-direction: column;
  }

  li {
    list-style: none;
    padding: 15px;
    border-radius: 25px;
    min-width: 100px;
    max-width: 50%;
    width: auto;
    margin: 5px 0;
    color: #3D496F;
    font-weight: bold;
  }
  
  .bot {
    background-color: #49FBAC;
  }

  .user {
    background-color: #FFDE84;
    align-self: flex-end;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s, transform .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform:translateY(5px);
  }
</style>
