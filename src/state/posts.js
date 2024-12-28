import { v4 as uuidv4 } from "uuid";

import { SET_SAVING } from "@/state";

export const SET_POSTS = "SET_POSTS";

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;
    default:
      return state;
  }
};

const getPostsDirectory = () =>
  navigator.storage
    .getDirectory()
    .then((root) => root.getDirectoryHandle("posts", { create: true }));

export const loadPosts = () => async (dispatch) => {
  const dir = await getPostsDirectory();

  const posts = [];
  for await (const handle of dir.values()) {
    const file = await handle.getFile();
    const text = await file.text();
    const json = JSON.parse(text);
    posts.push(json);
  }

  dispatch({
    type: SET_POSTS,
    posts,
  });
};

export const createPost = () => async (dispatch) => {
  dispatch({ type: SET_SAVING, saving: true });

  const id = uuidv4();

  const posts = await getPostsDirectory();
  const postHandle = await posts.getFileHandle(`${id}.json`, { create: true });

  const writable = await postHandle.createWritable();
  await writable.write(JSON.stringify({ id }));
  await writable.close();

  dispatch({ type: SET_SAVING, saving: false });
  dispatch(loadPosts());
};
