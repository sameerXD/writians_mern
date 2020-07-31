import React,{ useState, useEffect  } from "react";
import {Link} from "react-router-dom";

//function for getting year
function renderDate(dateString){
  const renderMonth = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
  const date = new Date(dateString);
  return renderMonth[date.getMonth()] +" " + date.getDate()+" " + date.getFullYear();


}
//render tags

function renderTags(tags){
  return tags.map((tag)=>{
    return (<span key = {tag}> {tag} </span>)
  })
}

function PostList(){

  //using hooks to fetch data

const [posts,setPosts] = useState([]);

useEffect(() => {
   getPosts();

 }, []);

//using async and await to get promise
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
      <Link to = {"/posts/" + post._id}>
      <button key = {post._id}>
        <h1>{post.title}</h1>
        <span>{ renderDate(post.createdAt)}
        </span>

        <div>{renderTags(post.tags)}</div>
        </button>
        </Link>
      ))}
    </div>
  )
};

export default PostList;
