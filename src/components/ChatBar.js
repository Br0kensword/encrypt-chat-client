import React, { Component } from 'react';
import ChatLog from "./ChatLog";
import io from 'socket.io-client';

const socket = io("http://localhost:3000")

class ChatBar extends Component {
  constructor(props) {
  	super(props)
  	this.state = {value: "", chat:[]};
  	socket.on("chat message", (msg) => {
  	  	this.updateMessages(msg);
  });
  }

  handleSubmit = (event) => {
  	event.preventDefault();
  	socket.emit("chat message", this.state.value);
  	this.updateMessages(this.state.value);
  	let input = document.getElementById('send');
  	input.value = "";
  }

  handleChange = (event) => {
  	this.setState({value : event.target.value});
  }

  updateMessages = (msg) => {
  	let newChat = this.state.chat;
  	newChat.push(msg);
  	this.setState({chat: newChat });
    this.autoScroll();
  }

  autoScroll = () => {
    let chat = document.getElementById('chatDisplay');
    let scrollHeight = chat.clientHeight;
    let contentHeight = chat.scrollHeight;
    chat.scrollTop = contentHeight - scrollHeight;
  }


  render() {
    return (
      <div className="Chat">
          <ul>
          	<ChatLog log={this.state.chat} />
          </ul>
      	<form onSubmit={this.handleSubmit}>
      		<input id="send" type="text" onChange={this.handleChange} autoComplete='off' /><button>Send</button>
      	</form>
      </div>
    );
  }
}

export default ChatBar;