import React from "react";

const PostForm = ({ title, body, onInputChange, onAddPost }) => {
  return (
    <div>
      <label>Title: </label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onInputChange}
        placeholder="Title"
      />
      <br />
      <label>Body: </label>
      <textarea
        name="body"
        value={body}
        onChange={onInputChange}
        placeholder="Body"
      ></textarea>
      <br />
      <button onClick={onAddPost}>Submit</button>
    </div>
  );
};

export default PostForm;
