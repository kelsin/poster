import { clsx } from "clsx";
import { Link } from "wouter";

const Post = ({ post }) => {
  const classes = clsx({ italic: !post.name }, "p-2");
  return (
    <div className={classes}>
      <Link href={`/edit/${post.id}`}>{post.name || "New Post"}</Link>
    </div>
  );
};

export default Post;
