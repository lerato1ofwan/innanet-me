import styles from '../styles/BlogSnippet.module.scss'
import BlogPreviewImage from './BlogPreviewImage';
import Author from './Author';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { delay } from 'lodash';

const BlogSnippet = ({ post }) => {
    
    return (
        <motion.div className={styles.snippet}
          style={{
              cursor: 'pointer'
          }}
            whileHover={{
                boxShadow: "0 0.4rem 2rem rgba(34, 68, 123, 0.2)",
                scale: 1.04,
                padding: "0.5rem"
            }}
            transition={{delay: 0.1, type: 'tween'}}
        >
            
            <BlogPreviewImage className={styles['blog-snippet']} post={post}/>
            
            <div className={styles.info}>
                <Link href={`/blog/${post.Slug}`}><a className={styles.title}>{post.Title}</a></Link>
                <Link href={`/blog/${post.Slug}`}><p className={styles.subtitle}>{post.Subtitle}</p></Link>
                <Author post={post} withSave={true}/>
            </div>
        </motion.div>
     );
}
 
export default BlogSnippet;