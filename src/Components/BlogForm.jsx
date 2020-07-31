import React ,{useState} from "react";
import {
  Link
} from "react-router-dom";
// post page
import PostBlog from "./PostBlog";

function BlogForm(props){
  const[data ,setData] = useState({title:"",tags:"",html:""});
  const[set, handleSet] = useState(false);
  //DESTRUCTURE THE DATA
  var {title,tags,createdAt,html} = data;


  function handleChange(event){
    const {name,value} = event.target;
    setData(prevValue=>{
      return {
        ...prevValue,
        [name]:value
      }
    })
     }

  function handleClick(event){
    handleSet(true);
    event.preventDefault()
  }


  return(
    <div className="container">
        <h1>Hello {title}</h1>
        <form >
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="TITLE"
            value={title}
          />
          <input
            onChange={handleChange}
            type="text"
            name="tags"
            placeholder="tags"
            value={tags}
          />
    
          <input
            onChange={handleChange}
            type="text"
            name="html"
            placeholder="html"
            value={html}
          />

          <button type="submit" onClick={handleClick}>Submit</button>
          {set?<PostBlog title = {title} tags = {tags}  html={html}/>:console.log("error")}
        </form>
      </div>
)
};

export default BlogForm;
