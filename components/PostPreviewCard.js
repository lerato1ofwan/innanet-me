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
                <Image
                    className={styles.cover}
                    src={imageUrl}
                    alt={`Cover Image for ${post.Title}`}
                    width={img.width}
                    height={img.height}
                    placeholder="blur"
                    blurDataURL={blurDataUrl()}
                />
                <div className={styles.socials}>
                    <ul>
                        <li><a target="_blank" href="https://www.twitter.com/lerato1ofone" rel="noopener noreferrer"><Image src="/icons/twitter.svg" alt="twitter" width="30" height="30"/></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/lerato-letsepe-1312b5156/" rel="noopener noreferrer"><Image src="/icons/linkedin.svg" alt="linkedin" width="30" height="30"/></a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.content}>

                <Link href={`/${post.dev}`}><a className={styles.title}>{post.Title}</a></Link>

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
                    <Image
                        className={styles.avatar}
                        src={profileImageUrl}
                        alt={`Cover Image for ${post.Title}`}
                        width={50}
                        height={30}
                    />
                    <p>{post.author.Name}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
     );
    }
 
export default PostPreviewCard;