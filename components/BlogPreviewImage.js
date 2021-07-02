import styles from '../styles/BlogPreviewImage.module.scss';
import { blurDataUrl } from '../src/GeneralHelpers';
import { getStrapiMedia } from '../src/media';
import Image from 'next/image';

const BlogPreviewImage = ({ post }) => {
    
    const imageUrl = getStrapiMedia(post.Cover);
    const img = post.Cover.formats.thumbnail;

    return ( 
        <img
            src={imageUrl}
            alt={`Cover Image for ${post.Title}`}
            width={284}
            height={206}
        />
     );
}
 
export default BlogPreviewImage;