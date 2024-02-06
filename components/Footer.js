import styles from '../styles/Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { handleOnSubmit } from '../src/GeneralHelpers'
import { useState } from 'react';

const Footer = () => {

    const [messageSent, setMessageSent] = useState(false);

    return ( 
        <footer className={styles.footer}>
            <motion.div className={styles.content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.6
                }}
            >
                
                <div className={styles.heading}>
                    <h2 className={styles['footer-div']}>What's cutting?</h2>
                    <p className={styles['footer-div']}>I’ve decided to move my content to my own platform because it gives me the creative freedom <span>&amp;</span> flexibility to play around with some ideas I have for the future, so feel at home here.</p>
                </div>

                <div className={styles['reach-out']}>

                    <div className={styles.left}>
                        <div className={styles['footer-div']}>
                            <h2 className={styles['footer-div']}>Like what you see?</h2>
                            <Link href={{ pathname: '/contact', query: { request: 'hire' } }}>
                                <a className={styles['hire-me']}>Hire me</a>
                            </Link>
                        </div>

                        <h2 className={styles.connect}>Connect with me</h2>

                        <ul className={styles.socials}>
                            <li><a target="_blank" href="https://www.github.com/lerato1ofwan" rel="noopener noreferrer"><Image id="img1" src="/icons/github.svg" alt="github" width="30" height="30"/></a></li>
                            <li><a target="_blank" href="https://www.twitter.com/lerato1ofwan" rel="noopener noreferrer"><Image id="img1" src="/icons/twitter.svg" alt="twitter" width="30" height="30"/></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/lerato-letsepe-1312b5156/" rel="noopener noreferrer"><Image id="img1" src="/icons/linkedin.svg" alt="linkedin" width="30" height="30"/></a></li>
                        </ul>

                    </div>

                    <div className={styles.right}>
                        <h2 className={styles.title}>Say hi<span className={styles.hi}>&#128071;</span></h2>

                        <form type="submit" onSubmit={(e) => {
                                handleOnSubmit(e, 'contact').then(
                                    (result)=> {
                                        const delivered = result.status == 200;
                                        setMessageSent(delivered);
                                        setTimeout(() => {
                                            setMessageSent(false);
                                        }, 2500);
                                    },
                                    (error) => {
                                        const delivered = result.status == 200;
                                        setMessageSent(delivered);
                                        setTimeout(() => {
                                            setMessageSent(false);
                                        }, 2500);
                                    }
                                );
                            }
                        }>
                            <input type="text" onChange={e => {}} name="name" className={styles['input-field']} placeholder="Your name" autoComplete="off" required/>
                            <input type="email" onChange={e => {}} name="email" className={styles['input-field']} placeholder="Your email address" required/>
                            <input type="text" onChange={e => {}} name="subject" className={styles['input-field']} placeholder="The subject" autoComplete="off" required/>
                            <textarea type="text" onChange={e => {}} name="message" className={styles['message-input-field']} placeholder="Message" autoComplete="off" rows="20" cols="50" required></textarea>
                            <div className={styles.submit}>
                                {!messageSent && <button id="submit" className={styles.send}>Send</button> }
                                {messageSent && <p className={styles.white}>Ay thanks, I've received your mail!</p> }
                            </div>
                        </form>

                    </div>

                </div>
            </motion.div>

            <div className={styles.copyright}>
                <p className={styles.design}>Designed & Developed with <span>💙</span> by Lerato Letsepe</p>
                <p className={styles.rights}><span>&copy;</span> Copyright Lerato Letsepe. All rights reserved.</p>
            </div>
        </footer> 
    );
}
 
export default Footer;