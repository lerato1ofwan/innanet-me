import styles from '../styles/BlogPreviewImage.module.scss';
import { blurDataUrl } from '../src/GeneralHelpers';
import { getStrapiMedia } from '../src/media';
import Image from 'next/image';

const BlogPreviewImage = ({ post }) => {
    
    const imageUrl = getStrapiMedia(post.Cover);
    const img = post.Cover.formats.thumbnail;

    return ( 
        <Image
            className={styles.cover}
            src={imageUrl}
            alt={`Cover Image for ${post.Title}`}
            width={310}
            height={250}
            placeholder='blur'
            blurDataURL={blurDataUrl()}
        />
     );
}
 
export default BlogPreviewImage;