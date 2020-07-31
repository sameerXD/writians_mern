import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
//pages
import PostList from "./Components/postList";
import Post from "./Components/Post";
import PostBlog from "./Components/PostBlog";
import BlogForm from "./Components/BlogForm";
import DeletePost from "./Components/DeletePost";

function App(){
  return(
    <BrowserRouter>
    <Switch>
    <Route path = "/posts/delete/:id" component = {DeletePost}/>
    <Route path ="/posts/form" component={BlogForm}/>
    <Route path = "/posts/post" component={PostBlog}/>
    <Route path ="/posts/:id" component={Post}/>
    <Route path ="/posts" component={PostList}/>

    </Switch>
    </BrowserRouter>
  )
}

export default App;
