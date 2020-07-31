import React ,{useEffect,useState} from "react";

function PostBlog(props){


// useEffect(() => {

//    postData();
//  }, []);
//
// //post data
// async function postData(url = 'http://localhost:5000/posts', data = {"title": "seventh post",
//     "createdAt": "Sun Jul 26 2020 00:03:24 GMT+0530 (India Standard Time)",
//     "tags": ["frontend"],
//     "html":"<h1>lorem gypsum</h1>"}) {
//
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//
//     },
//
//     body: JSON.stringify(data)
//   });
//   return response.json();
// }
console.log(props.tags, props.createdAt, props.html);
  return (<div>
    <p>posted!!!{props.title} </p>
    </div>

  )
};


export default PostBlog;
