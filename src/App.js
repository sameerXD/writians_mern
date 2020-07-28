import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
//pages
import PostList from "./Components/postList";
import Post from "./Components/Post";

function App(){
  return(
    <BrowserRouter>
    <Switch>
    <Route path ="/posts/:id" component={Post}/>
    <Route path ="/posts" component={PostList}/>

    </Switch>
    </BrowserRouter>
  )
}

export default App;
