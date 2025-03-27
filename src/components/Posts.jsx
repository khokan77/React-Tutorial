import { use } from "react";
import Post from "./Post";


export default function Posts({postPromise}) {
    const posts = use(postPromise);
    return (
        <div>
            <p>All Posts here: {posts.length}</p>
            {
                posts.map(post => <Post key={post.id} post = {post} ></Post> )
            }
        </div>
    );
}