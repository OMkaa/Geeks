// import { useState, useEffect } from "react"

// const PostPage = () => {
//   const [posts, setPosts] =useState([])

// useEffect(() => {
//   fetch("https://dummyjson.com/docs/posts")
//     .then((response) => response.json())
//     .then((json) => setPosts(json))
// }, [])
 
//   return (
//     <div>PostPage
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default PostPage

import React, { useState, useEffect } from "react";

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setPosts(json))
  }, []);

  return (
    <div>
      <h2>Post Page</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default PostPage;
