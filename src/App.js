import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import PostList from "./Components/postList";

function App(){
  return(
    <BrowserRouter>
    <Switch>
    <Route path ="/posts" component={PostList}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
