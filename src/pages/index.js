import React from "react"

import Layout from "../components/layout"
import Modal from "../components/modal"
import PostList from "../components/postList"
import Post from "../components/post"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      currentPostID: null,
      posts: [
        {
          id: 1,
          postTitle: "Help Javascript",
          postContent: "<div> Not working",
          commentCount: "42", userName: "DanTheMan",
          comments: [
            {
              id: 1,
              commentContent: "here's my solution",
              name: "JanTheWoman"
            }
          ]
        },
        { id: 2, postTitle: "How do React do?", postContent: "SOME WON TAIL MI", commentCount: "1" }
      ]
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    // e.preventDefault
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      currentPostID: e.target.id
    })
    // console.log(e.target.id)
  }

  render() {
    return (
      <Layout>

        {/* <button onClick={this.toggleModal}>Open Modal</button> */}
        <PostList toggleModal={this.toggleModal} posts={this.state.posts} />
        {this.state.isModalOpen ?
          (
            <Modal toggleModal={this.toggleModal} title={this.state.posts[this.state.currentPostID].postTitle} styles={{ color: "black", fontSize: "1.5rem" }}>
              <Post
                postContent={this.state.posts[this.state.currentPostID].postContent}
                commentCount={this.state.posts[this.state.currentPostID].commentCount}
                indexValue={this.state.posts[this.state.currentPostID].indexValue}
                showMore={false}
              />
            </Modal>
          )
          : null}
      </Layout>
    )
  }
}

export default IndexPage
