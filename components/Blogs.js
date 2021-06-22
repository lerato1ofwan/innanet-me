import styles from '../styles/Blogs.module.scss'
import PageTitle from './PageTitle';
import Button from './Button';
import PostPreviewCard from './PostPreviewCard'

const Blogs = ({posts}) => {

    return ( 
        <div className={styles.container}>
            <div className={styles.content}>

                <div className={styles.heading}>
                    <PageTitle text="Blogs"/>
                    <p className={styles.subtitle}>Latest articles <span>→</span></p>
                </div>

                <div className={styles['blogs-container']}>
                    {posts.map((post) => (
                            <PostPreviewCard key={post.id} post={post} />
                    ))}
                </div>
                
                <div className={styles.more}>
                    <Button text="View All" type="blue-action" link="blogs"/>
                </div>
    
            </div>
        </div>
     );
}
 
export default Blogs;