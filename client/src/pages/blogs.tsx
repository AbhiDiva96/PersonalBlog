import { useEffect, useState } from "react";
import { BlogContainer } from "../components/blogContainer";
import { api } from "../api";

// interface Blog {
//   id: number;
//   title: string;
//   description: string;
//   content: string;
// }

export default function Blogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blog/bulk");
        setBlogs(response.data.blogs);  // Ensure the correct path for the response
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);  // Don't forget to stop the loading indicator
      }
    };
    fetchBlogs();
  }, []);  // Ensure the effect runs only once when the component mounts

  return (
    <div>
      {error && <div>Error fetching blogs. Please try again later.</div>}
      {loading && <div>Loading blogs...</div>}

      {!loading && !error && blogs.length === 0 && <div>No blogs available.</div>}

      {!loading && !error && blogs.map((blog) => (
        <BlogContainer key={blog.id} id={blog.id} title={blog.title} description={blog.description} />
      ))}
  
    </div>
  );
}
