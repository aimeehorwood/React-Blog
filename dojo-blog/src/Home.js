import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My chicken soup recipe ",
      body: "lorem ipsum...",
      author: "mary",
      id: 1,
    },
    { title: "Welcome Home!", body: "lorem ipsum...", author: "zara", id: 2 },
    {
      title: "Ways to brush your cat",
      body: "lorem ipsum...",
      author: "mary",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
    }
  

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
