import Image from 'next/image'
import styles from '../styles/SocialIcons.module.scss'
import { motion } from 'framer-motion';
import { Fragment } from 'react';

const SocialIcons = ({ isHome }) => {

    return ( 
        <Fragment>
            {isHome ?
                <motion.div className={`${styles[`social-links`]} ${styles[`${isHome}`]}`}
                    initial={{ y: -250 }} 
                    animate={{ y: 12 }} 
                    transition={{ delay: 3, duration: 1 }}>
                    <ul>
                        <li><a target="_blank" href="https://www.github.com/lerato1ofwan" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/github.svg" alt="github" width="25" height="25"/></a></li>
                        <li><a target="_blank" href="https://www.twitter.com/lerato1ofwan" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/twitter.svg" alt="twitter" width="25" height="25"/></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/lerato-letsepe-1312b5156/" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/linkedin.svg" alt="linkedin" width="25" height="25"/></a></li>
                    </ul>
                </motion.div>
            :
                <div className={`${styles[`social-links`]} ${styles[`${isHome}`]}`}>
                    <ul className={styles.slinks}>
                        <li><a className={styles.slinks} target="_blank" href="https://www.github.com/lerato1ofwan" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/github.svg" alt="github" width="25" height="25"/></a></li>
                        <li><a className={styles.slinks} target="_blank" href="https://www.twitter.com/lerato1ofwan" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/twitter.svg" alt="twitter" width="25" height="25"/></a></li>
                        <li><a className={styles.slinks} target="_blank" href="https://www.linkedin.com/in/lerato-letsepe-1312b5156/" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/linkedin.svg" alt="linkedin" width="25" height="25"/></a></li>
                    </ul>
                </div>
                }
        </Fragment>
     );
}
 
export default SocialIcons;