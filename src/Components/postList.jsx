import React,{ useState, useEffect  } from "react";
// import axios from "axios";

function PostList(){

  //
  //

  //
  //
const [posts,setPosts] = useState([]);

useEffect(() => {
   getPosts();
 }, []);

const getPosts = async ()=>{
  // const res = await axios.get("http://localhost:3000/posts/");
  const data = await fetch(
        "http://localhost:5000/posts/"
      );
      const set = await data.json();
  setPosts(set);

};
  return (
    <div>
    {posts.map(post => (
        <p>{post.html}</p>
      ))}
    </div>
  )
};

export default PostList;
