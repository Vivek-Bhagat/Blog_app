import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
// import { Container, PostCard } from "../components";
import Container from "../components/container/Container.jsx";
import PostCard from "../components/PostCard.jsx";
import Home1 from "./Home1";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full h-screen">
        <Home1 />
      </div>
    );
  }

  return (
    <div className="w-full py-8 bg-gray-100">
      <Container>
        <h1 className="text-3xl  text-center mb-8">Latest Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
