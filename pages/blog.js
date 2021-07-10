import styles from '../styles/BlogsPage.module.scss'
import { sortByDate } from '../src/GeneralHelpers';
import BlogSnippet from '../components/BlogSnippet';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Blog = ({ posts }) => {
    
    return ( 
        <motion.div className={styles.container}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}>
            <Head>
                <title>Lerato Letsepe | The Blog</title>
            </Head>

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

        </motion.div>
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