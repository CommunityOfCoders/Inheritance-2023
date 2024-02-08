import React, { useEffect, useState } from "react";
import noimg from '../images/noimg.png'

const Blog = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        if (!blogs) {
          const response = await fetch('/api/news/general/');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log('Fetched blogs:', data);
          setBlogs(data.articles);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [blogs, setBlogs]);

  const truncateContent = (content) => {
    const truncatedContent = content.replace(/\.{3}.*$/, '...');
    return truncatedContent;
  };

  const renderBlogPosts = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {loading ? (
          <div>Loading...</div>
        ) : (
          blogs.map((blog) =>
            blog.description && blog.urlToImage ? (
              <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md blog-post">
                <div className="flex justify-center items-center">
                  {blog.urlToImage ? (
                    <img className="w-full max-h-[300px] h-auto object-cover" src={blog.urlToImage} alt="" />
                  ) : (
                    <img src={noimg} alt="" />
                  )}
                </div>
                <h2 className="mt-6 text-2xl font-sans font-bold mb-4">{blog.title}</h2>
                <p>{blog.author ? <>By: {blog.author}</> : null}</p>
                <p className="mt-2 text-gray-700 mb-4">
                  {blog.content ? truncateContent(blog.content.slice(0, 90)) : blog.description.slice(0, 90)}
                </p>
                <a target="_blank" href={blog.url} rel="noreferrer" className="text-green-600">Read more...</a>
              </div>
            ) : null
          )
        )}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen overflow-auto">
      <div className="container mx-auto mt-8 grid gap-8">
        {renderBlogPosts()}
      </div>
    </div>
  );
};

export default Blog;
