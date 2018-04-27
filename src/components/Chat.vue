<template>
  <div class="chat-container" id="chat">
    <div>
    <h1>SaveBot</h1>
    <ul>
      <transition-group name="fade" class="messages">
        <li v-for="message in messages" :key="message.id" :class="message.from">
          {{message.text}}
        </li>
      </transition-group>
    </ul>
    </div>
    <div class="form-wrapper">
      <form action="">
        <input v-model="clientMessage" id="msg" autocomplete="off" placeholder="Type your message here" />
        <button v-on:click.prevent="SendMessage('hello')">
          <img src="../assets/send-icon.svg" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data: function() {
    return {
      uniqueID: 0,
      context: null,
      clientMessage: '',
      messages: [],
    }
  },
  sockets: {
    chatMessage: function(data) {
      this.$data.context = data.context;
      data.msg.map(msg => {
        this.$data.uniqueID += 1;

        this.$data.messages.push({
          id: this.$data.uniqueID,
          from: 'bot',
          text: msg,
        })
      });
    }
  },
  methods: {
    SendMessage: function() {
      if (this.$data.clientMessage != '') {
        this.$data.uniqueID += 1;
        this.$data.messages.push({id: this.$data.uniqueID, from: 'user', text: this.$data.clientMessage});
        this.$socket.emit('chat message', {
          context: this.$data.context,
          msg: this.$data.clientMessage,
        });
        this.$data.clientMessage = '';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .chat-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    padding-bottom: 100px;
    overflow-y: scroll;
  }

  .form-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-right: 20px;
  }

  form {
    display: flex;
  }

  form input {
    flex: 1;
    border: 0;
    padding: 10px;
    margin: 15px;
    font-size: 16px;
    font-weight: bold;
    color: #3D496F;
    border-radius: 6px;
    outline: none;
    height: 40px;
  }
  form button {
    position: absolute;
    width: 40px;
    right: 15px;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
  }

  form button:hover {
    cursor: pointer;
    transform:scale(1.05);
  }

  form button img {
    position: relative;
    top: 30px;
    right: 10px;
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
