import { useDispatch, useSelector } from "react-redux";

// import { useLocation } from "wouter";

import { map } from "ramda";

import Post from "@/post";
import { createPost } from "@/state";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  // const [location, navigate] = useLocation();

  const createPostHandler = () => {
    dispatch(createPost());
  };

  const posts_el =
    posts.length > 0 ? (
      map((post) => <Post key={post.id} post={post} />, posts)
    ) : (
      <div className="italic text-slate-500 p-2">No Posts</div>
    );

  return (
    <div>
      <h2 className="p-2 text-2xl">Posts</h2>
      {posts_el}
      <button
        onClick={createPostHandler}
        className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-bold border rounded-xl px-3 py-1 m-2"
      >
        Create Post
      </button>
    </div>
  );
};

export default Posts;
