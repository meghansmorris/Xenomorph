import React from "react"

class Post extends React.Component {
  constructor(props) {
    super(props)
  }
  //onclick show modal
  render() {
    const { postTitle, postContent, commentCount, toggleModal } = this.props
    return (
      <div onClick={toggleModal}>
        <h2>{postTitle}</h2>
        <p>{postContent}</p>
        <p>There are {commentCount} comments</p>
      </div>
    )
  }
}

export default Post
