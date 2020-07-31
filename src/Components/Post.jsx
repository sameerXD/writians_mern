import React,{useState,useEffect} from "react";


function Post(props){
  const [post,setPost] = useState({});
  
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

  return(
    <div>
     {renderPost()}
    </div>
  )
};

export default Post;
