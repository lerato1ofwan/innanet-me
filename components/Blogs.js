import styles from '../styles/Blogs.module.scss'
import PageTitle from './PageTitle';

const Blogs = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <PageTitle text="Blogs"/>
                    <p className={styles.subtitle}>Latest articles <span>→</span></p>
                </div>
            </div>
        </div>
     );
}
 
export default Blogs;