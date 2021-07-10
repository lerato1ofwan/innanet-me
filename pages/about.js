import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/About.module.scss'
import SocialIcons from '../components/SocialIcons'
import { motion } from 'framer-motion';

const About = () => {
    return ( 
        <motion.div className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
        >
            <Head>
                <title>Lerato Letsepe | About</title>
                <link rel="icon" href="/logo.svg" />
            </Head>    
            <div className={styles.content}>
                <div className={styles.about}>
                    <h2>About me → </h2>
                </div>

                <div className={styles.me}>
                    <div className={styles.image}>
                        
                    </div>
                    <div className={styles.info}>
                        <h1>Hey there!</h1>
                        <h3>My name is <span>Lerato Letsepe</span></h3>
                        <p>I'm a 22-year-old full stack developer at Retro Rabbit who works with C#, JavaScript and sometimes Java. I love everything .NET, React, NextJs, Node, Flutter, Spring Boot, AWS and lots of other modern web technologies I get to interact with daily!<br></br><br></br>On days when I don't feel like writing code I'm always happy to get my hands a little dirty with some design work in Adobe Illustrator and Figma.<br></br><br></br>I have a passion for sharing my knowledge with other people and motivating others by displaying my passion for programming!</p>
                    </div>
                    
                    <ul>
                        <li><a target="_blank" href="https://www.github.com/lerato1ofone" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/github.svg" alt="github" width="25" height="25"/></a></li>
                        <li><a target="_blank" href="https://www.twitter.com/lerato1ofone" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/twitter.svg" alt="twitter" width="25" height="25"/></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/lerato-letsepe-1312b5156/" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/linkedin.svg" alt="linkedin" width="25" height="25"/></a></li>
                    </ul>
                </div>

                <div className={styles.resume}>
                    <Link href="/resume"><h2 className={styles['nav-link']}>Get my resume <span>→</span> </h2></Link>
                </div>
            </div>
        </motion.div>
     );
}
 
export default About;