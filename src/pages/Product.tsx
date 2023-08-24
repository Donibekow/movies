import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getPostStart, getPostSuccess, getPostError } from "../redux/post";
import axios from "axios";
import "../Styles/Product.css";

function Product() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  const getPost = async () => {
    try {
      dispatch(getPostStart());
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(getPostSuccess(response.data));
    } catch (error) {
      dispatch(getPostError("Error Resposnse"));
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="post-container">
      <h1 className="post-heading">Posts</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li className="post-item" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
