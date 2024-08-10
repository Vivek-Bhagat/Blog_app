import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="w-full">
      <div className="w-full h-64 bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:bg-gray-600 duration-100 hover:text-white">
        <div className="w-full h-36 bg-gray-300 overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 h-28 flex flex-col justify-between">
          <h2 className="text-xl font-bold truncate">{title}</h2>
          {/* Optional: Add a description or other content here */}
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
