import React ,{useState} from "react";
import {
  Link
} from "react-router-dom";
// post page
import PostBlog from "./PostBlog";

function BlogForm(props){
  const[data ,setData] = useState({title:"",tags:"",createdAt:"",html:""});
  const[set, handleSet] = useState(false);
  var {title,tags,createdAt,html} = data;
  function handleChange(event){
    if (event.target.placeholder==="title"){
      setData({title : event.target.value});

    }else if(event.target.placeholder==="tags"){
      setData({tags: event.target.value});

    }else if(event.target.placeholder==="created at"){
      setData({createdAt : event.target.value});

    }else if(event.target.placeholder==="html"){
      setData({html : event.target.value});

    }
     }

  function handleClick(event){
    handleSet(true);
    event.preventDefault()
  }



//form
// <input type="text" id="lname" onChange = {handleChange} placeholder = "tags"   />
//
// <input type="text" id="lname" onChange = {handleChange} placeholder = "created at"  />
//
// <input type="text" id="html"  onChange = {handleChange}  placeholder = "html" />

  return(
    <div className="container">
        <h1>Hello {title}</h1>
        <form >
          <input
            onChange={handleChange}
            type="text"
            placeholder="title"
            value={title}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="tags"
            value={tags}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="createdAt"
            value={createdAt}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="html"
            value={html}
          />
          <button type="submit" onClick={handleClick}>Submit</button>
          {set?<PostBlog title = {title} tags = {tags} createdAt={createdAt} html={html}/>:console.log("error")}
        </form>
      </div>
)
};

export default BlogForm;
