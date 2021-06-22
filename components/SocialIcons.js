import Image from 'next/image'
import styles from '../styles/SocialIcons.module.scss'

const SocialIcons = () => {
    return ( 
        <div className={styles['social-links']}>
            <ul>
                <li><a target="_blank" href="https://www.github.com/lerato1ofone" rel="noopener noreferrer"><Image src="/icons/github.svg" alt="github" width="30" height="30"/></a></li>
                <li><a target="_blank" href="https://www.twitter.com/lerato1ofone" rel="noopener noreferrer"><Image src="/icons/twitter.svg" alt="twitter" width="30" height="30"/></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/lerato-letsepe-1312b5156/" rel="noopener noreferrer"><Image src="/icons/linkedin.svg" alt="linkedin" width="30" height="30"/></a></li>
            </ul>
        </div>
     );
}
 
export default SocialIcons;