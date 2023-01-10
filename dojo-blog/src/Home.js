import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([

        { title: 'My chicken soup recipe ', body: 'lorem ipsum...', author: 'mary', id: 1 },
        { title: 'Welcome Home!', body: 'lorem ipsum...', author: 'zara', id: 2 },
        { title: 'Ways to brush your cat', body: 'lorem ipsum...', author: 'mary', id: 3 }
    ])

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> {blog.title}</h2>
                    <p> Written by {blog.author}</p>
                </div>

            ))}

            


        </div>
     );
}
 
export default Home;