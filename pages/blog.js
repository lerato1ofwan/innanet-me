import styles from '../styles/BlogsPage.module.scss'
import { sortByDate } from '../src/GeneralHelpers';
import BlogSnippet from '../components/BlogSnippet';

const Blog = ({ posts }) => {
    
    return ( 
        <div className={styles.container}>

                <h1>Blogs</h1>

                <div className={styles.blogs}>
                    <ul>
                        {posts.map(post => (
                            <li key={post.Slug}>
                                <BlogSnippet post={post}/>
                            </li>
                        ))}
                    </ul>
                </div>

        </div>
     );
}

export default Blog;

export async function getStaticProps() {
    
    // get the posts from our api
  
    const response = await fetch(`${process.env.STRAPI_URL}/posts`);
    const posts = await response.json();
  
    return {
        props : {
            posts: posts.sort(sortByDate)
        }
    }
  }