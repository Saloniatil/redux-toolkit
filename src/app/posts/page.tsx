/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "@/redux/slices/postsSlice";
import styles from "./page.module.css";
import { useState } from "react";

import React from 'react'

const Posts = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts = useSelector((state: any) => state.posts)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddPost = (e: any) => {
    e.preventDefault();

    if(!title && !description) return;
    const newPost = {
      id: Date.now(),
      title: title,
      description: description,
    };

    dispatch(addPost(newPost));

    // Reset form fields
    setTitle('');
    setDescription('');
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRemovePost = (postId: any) => {
    dispatch(deletePost(postId));
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}
     
      >
        <input
          type="text"
          className={styles.input}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          className={styles.input}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className={styles.button}
           onClick={handleAddPost}
        >Add New Post</button>
      </form>
      <h1 className={styles.heading}>Posts</h1>
      {posts ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        posts.map((post: any) => (
          <div key={post.id} className={styles.post}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.description}>{post.description}</p>
            <button
              className={styles.deleteButton}
              onClick={() => handleRemovePost(post.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  )
}

export default Posts