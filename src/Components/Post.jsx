import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";

import DeletePost from "./DeletePost";
function Post(props){
  const [post,setPost] = useState({});
  const[set, handleSet] = useState(false);

  useEffect(()=>{
    getPosts();
  },[]);

  const getPosts = async ()=>{
    const data = await fetch("http://localhost:5000/posts/"+props.match.params.id);

    const set = await data.json();
    setPost(set);
  }
  function renderHtml(){
    return {__html:post.html}
  }
  function renderPost(){
    return <div dangerouslySetInnerHTML={renderHtml()}></div>;
  }
function k1(){
  console.log(props.match.params.id);
  handleSet(true);

}
  return(
    <div>
     {renderPost()}

     <button key = {post._id} onClick={() => {if(window.confirm('Delete the item?')){k1()};}}>Delete Post</button>
     {set?<DeletePost k11={post._id}/>:console.log("error")}

     <Link to={"/posts/update/" + post._id}>
     <button key = {post._id}>Update Post</button>
     </Link>
    </div>
  )
};

export default Post;
