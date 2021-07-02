import styles from '../styles/BlogSnippet.module.scss'
import BlogPreviewImage from './BlogPreviewImage';
import Author from './Author';
import Link from 'next/link';

const BlogSnippet = ({ post }) => {
    return (
        <div className={styles.snippet}>
            
            <BlogPreviewImage className={styles['blog-snippet']} post={post}/>
            
            <div className={styles.info}>
                <Link href={`blog/${post.Slug}`}><a className={styles.title}>{post.Title}</a></Link>
                <Link href={`blog/${post.Slug}`}><p className={styles.subtitle}>{post.Subtitle}</p></Link>
                <Author post={post} withSave={true}/>
            </div>
        </div>
     );
}
 
export default BlogSnippet;