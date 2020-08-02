import React, {
  useState,
  useEffect
} from "react";

function DeletePost(props) {

  useEffect(() => {
    DeletePost();
  }, []);

  async function DeletePost(url = 'http://localhost:5000/posts/' + props.k11) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'

      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
    return response.json();
  }

  return ( <
    p > deleted Post < /p>
  )
}

export default DeletePost;
