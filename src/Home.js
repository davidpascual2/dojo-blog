
import BlogList from './BlogList';
import useFetch from './useFetch'; //import custom hook

const Home = () => {

    // let name = 'mario'
    // const [name, setName] = useState('mario') //must be invoked (use praenthasis), store it, use array destructuring
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     setName('luigi');
    //     setAge(30);
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log(`hello ${name} `, e);
    // }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs)
    // }

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs') 

    return ( 
        <div className="home">
            { error && <div> {error} </ div> }
            { isPending && <div> Loading...</ div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'david')} title="Davids blogs" /> */}
        </div>

     );
}
 
export default Home;