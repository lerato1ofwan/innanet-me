import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.scss';
import { motion } from 'framer-motion';
import { fadeInUp, opacity, secondOpacity } from '../src/Motions';

const About = () => {

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    return (
        <motion.div className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Head>
                <title>Lerato Letsepe | About</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
            <motion.div className={styles.content}>
                <div className={styles.about}>
                    <h2>About me → </h2>
                </div>

                <div className={styles.me}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        variants={fadeInUp}
                        initial='initial'
                        animate='animate'
                    >
                        <Image className={styles.image} src={"/images/IMG_4738.jpg"} alt="About me image" objectFit="cover" fill={true}
                            width={250}
                            height={250} />
                    </motion.div>


                    <motion.div className={styles.info}
                        variants={opacity}
                        initial='initial'
                        animate='animate'
                    >
                        <h1>Hey there!</h1>
                        <h3>My name is <motion.span variants={secondOpacity}>Lerato Letsepe <span style={{ fontSize: '1.5rem' }}>&#128516;</span></motion.span></h3>
                        <p>I'm a {getAge("1999/12/01")}-years old FULL STACK ENGINEER at Raging River (Pty) Ltd who works with C#, JavaScript and sometimes Java. I love everything .NET, React, NextJs, Node, Flutter, Spring Boot, AWS and lots of other modern web technologies I get to interact with daily!<br></br><br></br>On days when I don't feel like writing code I'm always happy to get my hands a little dirty with some design work in Adobe Illustrator and Figma.<br></br><br></br>I have a passion for sharing my knowledge with other people and motivating others by displaying my passion for programming!</p>
                    </motion.div>

                    <ul>
                        <li><a target="_blank" href="https://www.github.com/lerato1ofwan" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/github.svg" alt="github" width="25" height="25" /></a></li>
                        <li><a target="_blank" href="https://www.twitter.com/lerato1ofwan" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/twitter.svg" alt="twitter" width="25" height="25" /></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/lerato-letsepe-1312b5156/" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/linkedin.svg" alt="linkedin" width="25" height="25" /></a></li>
                    </ul>
                </div>

                <motion.div variants={secondOpacity} initial='initial' animate='animate' className={styles.resume}>
                    <a href="./LeratoLetsepe-Cv.pdf" target='_blank'><h2 className={styles.icon}>Get my resume <span>→</span> </h2></a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default About;