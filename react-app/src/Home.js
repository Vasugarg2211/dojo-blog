import { useState } from "react";
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs,setBlogs] = useState([
        {title:"Hello World" ,body:"lorem ipsum...", author:"vasu" ,id:1},
        {title:"Hello cpp" ,body:"lorem ipsum titsum...", author:"nitin" ,id:2},
        {title:"Jai Shree ram" ,body:"lorem ipsum world...", author:"Ram bhagat" ,id:3}
    ]);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blogs => blogs.id !== id );
        setBlogs(newBlogs);
    }
    
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    //   }
    
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete = {handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blogs) => blogs.author === 'vasu')} title="Vasu's blogs" /> */}
        </div>
    );
}
 
export default Home;

