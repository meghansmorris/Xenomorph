import React from "react"
import Post from "./post"
import styled from "styled-components"

const StyledPostList = styled.div`
 display: flex;
 flex-direction: column;
 margin: 0 auto;
 width: 80%;
`;
class PostList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  //getPosts() function
  componentDidMount() {
    //getPosts()
  }

  render() {
    const { posts, toggleModal } = this.props;
    return (
      <StyledPostList>
        {posts.map((post, index) => {
          return (
            <Post key={index} id={post.id}
              indexValue={index}
              postTitle={post.postTitle}
              postContent={post.postContent}
              commentCount={post.commentCount}
              toggleModal={toggleModal}
            />
          )
        })}
      </StyledPostList>
    )
  }
}

export default PostList
