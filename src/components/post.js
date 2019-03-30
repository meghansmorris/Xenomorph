import React from "react"

class Post extends React.Component {
  constructor(props) {
    super(props)
  }
  //onclick show modal
  render() {
    const { postTitle, postContent, commentCount } = this.props
    return (
      <div onClick={showModal}>
        <h2>{postTitle}</h2>
        <p>{postContent}</p>
        <p>There are {commentCount} comments</p>
      </div>
    )
  }
}

export default Post
