import React from "react"

class Post extends React.Component {
  constructor(props) {
    super(props)
  }
  //onclick show modal
  render() {
    const { postTitle, postContent, commentCount, toggleModal, id, indexValue } = this.props
    return (
      <div>
        <h2>{postTitle}</h2>
        <p>{postContent}</p>
        <p>There are {commentCount} comments</p>
        <button onClick={toggleModal} id={indexValue}>More</button>
      </div>
    )
  }
}

export default Post
