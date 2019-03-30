import React from "react"

import Layout from "../components/layout"
import Modal from "../components/modal"
import PostList from "../components/postList"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      posts: [
        { postTitle: "Help Javascript", postContent: "<div> Not working", commentCount: "42" },
        { postTitle: "Help Javascript", postContent: "<div> Not working", commentCount: "42" }
      ]
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render() {
    return (
      <Layout>

        <button onClick={this.toggleModal}>Open Modal</button>
        <PostList posts={this.state.posts} />
        {this.state.isModalOpen ?
          (
            <Modal toggleModal={this.toggleModal} title="Test title" styles={{ color: "red" }}>
              <div>Content for modal</div>
            </Modal>
          )
          : null}

      </Layout>
    )
  }
}

export default IndexPage
