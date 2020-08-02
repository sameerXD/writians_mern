import React, {
  useEffect,useState
} from "react";
const formData = new FormData();

function UpdatePost(props) {
    const [data,setData] = useState({title:"k",CreatedAt:"2020-07-25T18:33:24.000Z", tags:[
            "frontend"
        ],html :"fsfs"});
  useEffect(() => {
    setData({title: "bad ass",
      createdAt: "Sun Jul 30 2020 00:03:24 GMT+0530 (India Standard Time)",
      tags: ["kuch bhi"],
      html:"<h1>lorem</h1>"})
    UpdatePost();
  }, []);

  async function UpdatePost(url = 'http://localhost:5000/posts/update/' + props.match.params.id,data1 = {title: data.title,
    createdAt: data.createdAt,
    tags: data.tags,
    html:data.html}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.



    });
    return response.json(data1);
  }

  return ( <
    div >

    <
    h1 > hello dear < /h1> < /
    div >
  )
}

export default UpdatePost;
