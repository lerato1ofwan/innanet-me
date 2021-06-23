import styles from '../styles/PostPreviewCard.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { getStrapiMedia } from '../src/media';
import { blurDataUrl, getDate } from '../src/GeneralHelpers';

const PostPreviewCard = ({ post }) => {

    const tags = post.Tags.split(',');
    const date = getDate(post.PublishedDate);

    const imageUrl = getStrapiMedia(post.Cover);
    const img = post.Cover.formats.medium;

    const profileImageUrl = getStrapiMedia(post.author.ProfileImage);
    
    return ( 
        <div className={styles.blog}>
            <div className={styles['cover-image']}>

                <Link href={`/${post.Slug}`}>
                    <a>
                        <Image
                            className={styles.cover}
                            src={imageUrl}
                            alt={`Cover Image for ${post.Title}`}
                            width={img.width}
                            height={img.height}
                            placeholder="blur"
                            blurDataURL={blurDataUrl()}
                        />
                    </a>
                </Link>
                
                <div className={styles.socials}>
                    <ul>
                        <li><a target="_blank" href={`http://twitter.com/share?text=🚀Check you this amazing blog post by @lerato1ofone 😃🔌&url=${process.env.NEXT_PUBLIC_HOST}/${post.Slug}`} rel="noopener noreferrer"><img className={styles.social} src="/icons/twitter.svg" alt="twitter" width="25" height="25"/></a></li>
                        <li><a target="_blank" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_HOST}/${post.Slug}`)}`} rel="noopener noreferrer"><img className={styles.social} src="/icons/linkedin.svg" alt="linkedin" width="25" height="25"/></a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.content}>

                <Link href={`/${post.Slug}`}><a className={styles.title}>{post.Title}</a></Link>

                <ul className={styles.tags}>
                    {tags.map((tag, index) => (
                        <li key={index}>
                            <Link href={`/blog${tag}`}>
                            <a><span>&#35;</span>{tag.replace(/\s+/g, '')}</a>
                            </Link>
                        </li>
                    ))}
                </ul>

                <p>
                    {post.Subtitle}
                </p>

                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src={profileImageUrl}
                        alt={`Cover Image for ${post.Title}`}
                        width={50}
                        height={50}
                    />
                    <div>
                        <p>{post.author.Name}</p>
                        <p className={styles.date}><span>On </span>{date}</p>
                    </div>
                </div>
            </div>
        </div>
     );
    }
 
export default PostPreviewCard;