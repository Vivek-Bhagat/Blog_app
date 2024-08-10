import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
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
      <>
        {/* <div className="w-full py-8 mt-4 text-center min-h-screen">
          <Container>
            <div className="flex flex-wrap">
            <div className="p-2 w-full h-auto">
              <h1 className="text-3xl font-bold hover:text-gray-500 text-blue-700">
                Login to read posts
              </h1>
            </div>
          </div>
          </Container>
        </div> */}
        <Home1 />
      </>
    );
  }
  return (
    <div className="w-full py-8 flex flex-wrap">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
