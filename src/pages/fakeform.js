import React from "react";
import firebase from "../components/Firebase/Firebase";

export default class FakeFormPage extends React.Component {
  constructor() {
      super();
      this.state = {
        name: "S",
        title: "title",
        post: "post"
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleGet = this.handleGet.bind(this);
  }

  handleChange = event => {
    const {
        name,
        value
    } = event.target;
    this.setState({
        [name]: value
    });
  };

  handleGet(e) {
    e.preventDefault();
    console.log("inside handle get")

    var request = require("request");

    var options = { method: 'GET',
      url: 'https://hackathon1-d30d4.firebaseio.com/post.json',
       };
    
    request(options, function (error, response) {
      if (error) throw new Error(error);
    
      console.log(response);
    });
  }
  
  handleSubmit(e) {
      e.preventDefault();
      const itemsRef = firebase.database().ref('post');
      const post= {
          name: this.state.name,
          title: this.state.title,
          post: this.state.post
      }
      itemsRef.push(post);
      this.setState({
          name: "",
          title: "",
          post: ""
      })
  };

  render() {
    return (
        <>
      <form>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="name" />
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="title" />
        <input type="text" name="post" value={this.state.post}  onChange={this.handleChange} placeholder="post"  />
        <button onClick={this.handleSubmit} type="submit">Submit</button>
      </form>

      </>
    )
  }
}

