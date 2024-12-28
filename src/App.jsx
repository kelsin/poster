import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "wouter";

import Edit from "@/edit";
import Posts from "@/posts";
import Saving from "@/saving";
import { loadPosts } from "@/state";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div className="">
      <h1 className="text-6xl font-bold">Poster</h1>
      <Switch>
        <Route path="/edit/:id">
          <Edit />
        </Route>
        <Route>
          <Posts />
        </Route>
      </Switch>
      <Saving />
    </div>
  );
};

export default App;
