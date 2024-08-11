import React from "react";
import Container from "../components/container/Container.jsx";
import PostForm from "../components/post-form/PostForm.jsx";
// import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
