import React from "react"
import { comment } from "postcss-selector-parser"

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments,
    }
  }
  componentDidMount() {
    //load post text
  }
  //onclick show modal
  render() {
    const { postContent, commentCount } = this.props
    return (
      <div onClick={showModal}>
        {postContent}
        <p>{commentCount} comments</p>
      </div>
    )
  }
}

export default Post
