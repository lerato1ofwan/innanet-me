import styles from '../styles/BlogPreviewImage.module.scss';
import { blurDataUrl } from '../src/GeneralHelpers';
import Image from 'next/image';

const BlogPreviewImage = ({ post }) => {
    
    const imageUrl = post.Cover.url;
    const img = post.Cover.formats.thumbnail;

    return ( 
        <Image
            className={styles.cover}
            src={imageUrl}
            alt={`Cover Image for ${post.Title}`}
            width={340}
            height={250}
            placeholder='blur'
            blurDataURL={blurDataUrl()}
        />
     );
}
 
export default BlogPreviewImage;