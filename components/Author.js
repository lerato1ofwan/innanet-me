import styles from '../styles/Author.module.scss';
import { getDate } from '../src/GeneralHelpers';
import Image from 'next/image'
import save from '../public/icons/save.svg'

const Author = ({ post, withSave }) => {

    const date = getDate(post.PublishedDate);
    const profileImageUrl = post.author.ProfileImage.url;

    return ( 
        <div className={styles.author}>
            <img
                className={styles.avatar}
                src={profileImageUrl}
                alt={`Cover Image for ${post.Title}`}
                width={50}
                height={50}
            />
            <div className={styles.info}>
                <div>
                    <p>{post.author.Name}</p>
                    <p className={styles.date}><span>On </span>{date}</p>
                </div>
                {withSave == true ? 
                   <div className={styles.save}>
                        <Image className={styles.bookmark} src={save} alt="save" width="25" height="25"/>
                   </div>
                     :
                    null
                }
            </div>
        </div>
     );
}
 
export default Author;