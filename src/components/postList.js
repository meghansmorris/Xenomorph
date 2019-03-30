import React from "react"
import Post from "./post"

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [];
    }
  }
  //getPosts() function
  componentDidMount() {
    //getPosts()
  }
  render() {
    return (
      <div>
        {this.state.posts.map(post => {
          return(
            <Post 
            postTitle={#}
            postContent={#}
            commentCount={#}
            />
          )
        })}
      </div>
    )
  }
}

export default PostList
