import { useEffect, useState } from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

const FakeApiApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setData(posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleAddPost = () => {
    const updatedPosts = [{ ...newPost, id: data.length + 1 }, ...data];
    setData(updatedPosts);
    setNewPost({ title: "", body: "" });
  };

  if (loading) return <p>Loading posts...</p>;

  return (
    <div>
      <PostForm
        title={newPost.title}
        body={newPost.body}
        onInputChange={handleInputChange}
        onAddPost={handleAddPost}
      />
      <PostsContainer posts={data} />
    </div>
  );
};

export default FakeApiApp;
