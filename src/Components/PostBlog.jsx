import React ,{useEffect,useState} from "react";

function PostBlog(props){


useEffect(() => {

   postData();
 }, []);
//DATe

const date = new Date();


//post data
async function postData(url = 'http://localhost:5000/posts', data = {"title": props.title,
    "createdAt": date,
    "tags": props.tags,
    "html":"<h1>"+props.html+"</h1>"}) {

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },

    body: JSON.stringify(data)
  });
  return response.json();
}

  return (<div>
    <p>posted!!! </p>
    </div>

  )
};


export default PostBlog;
