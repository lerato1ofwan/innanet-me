import styles from '../styles/Blogs.module.scss'
import PageTitle from './PageTitle';
import Button from './Button';
import PostPreviewCard from './PostPreviewCard'
import { motion } from 'framer-motion';
import { stagger, yfadeInUp } from '../src/Motions';

const Blogs = ({posts}) => {

    return ( 
        <div className={styles.container}>
            <div className={styles.content}>

                <div className={styles.heading}>
                    <PageTitle text="Blogs"/>
                    <p className={styles.subtitle}>Latest articles <span>→</span></p>
                </div>

                <motion.div className={styles['blogs-container']}
                    variants={yfadeInUp} initial="hidden" animate="show"
                >
                    {posts.map((post) => (
                        <motion.div variants={stagger}>
                            <PostPreviewCard key={post.id} post={post} />
                        </motion.div>
                    ))}
                </motion.div>
                
                <div className={styles.more}>
                    <Button text="View All" type="" link="blog" />
                </div>
    
            </div>
        </div>
     );
}
 
export default Blogs;