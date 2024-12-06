/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: any = [
  { id: 1, title: "Post 1", description: "Description 1" }
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<any>) => {
      state.push(...action.payload);  
    },
    updatePost: (state, action: PayloadAction<any>) => {
      const { id, title, description } = action.payload;
      const postIndex = state.findIndex((post: any) => post.id === id);
      if (postIndex !== -1) {
        state[postIndex].title = title;
        state[postIndex].description = description;
      }
    },
    addPost: (state, action: PayloadAction<any>) => {
      const { id, title, description } = action.payload;
      state.push({ id, title, description });
      
    },
    deletePost: (state, action: PayloadAction<any>) => {
      const postId = action.payload;
      return state.filter((post: any) => post.id !== postId);     
    },
  }
})

export const { addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;