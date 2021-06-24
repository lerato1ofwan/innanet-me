import styles from '../styles/Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={styles.content}>
                
                <div className={styles.heading}>
                    <h2>What's cutting?</h2>
                    <p>I’ve decided to move my content to my own platform because it gives me the creative freedom <span>&amp;</span> flexibility to play around with some ideas I have for the future, so feel at home here.</p>
                </div>

                <div className={styles['reach-out']}>

                    <div className={styles.left}>
                        <div>
                            <h2>Like what you see?</h2>
                            <Link href='/hire'>
                                <a className={styles['hire-me']}>Hire me</a>
                            </Link>
                        </div>

                        <h2 className={styles.connect}>Connect with me</h2>

                        <ul className={styles.socials}>
                            <li><a target="_blank" href="https://www.github.com/lerato1ofone" rel="noopener noreferrer"><Image src="/icons/github.svg" alt="github" width="30" height="30"/></a></li>
                            <li><a target="_blank" href="https://www.twitter.com/lerato1ofone" rel="noopener noreferrer"><Image src="/icons/twitter.svg" alt="twitter" width="30" height="30"/></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/lerato-letsepe-1312b5156/" rel="noopener noreferrer"><Image src="/icons/linkedin.svg" alt="linkedin" width="30" height="30"/></a></li>
                        </ul>

                    </div>

                    <div className={styles.right}>
                        <h2 className={styles.title}>Say hi<span className={styles.hi}>&#128071;</span></h2>

                        <form type="submit">
                            <input type="text" onChange={e => {}} name="name" className={styles['input-field']} placeholder="Your name" autoComplete="off" />
                            <input type="text" onChange={e => {}} name="email" className={styles['input-field']} placeholder="Your email address" />
                            <input type="text" onChange={e => {}} name="subject" className={styles['input-field']} placeholder="The subject" autoComplete="off"/>
                            <textarea type="text" onChange={e => {}} name="message" className={styles['message-input-field']} placeholder="Message" autoComplete="off" rows="20" cols="50"></textarea>
                            <div className={styles.submit}><button className={styles.send}>Send</button></div>
                        </form>

                    </div>

                </div>
            </div>

            <div className={styles.copyright}>
                <p>Designed & Developed with <span>💙</span> by Lerato Letsepe</p>
                <p><span>&copy;</span> Copyright Lerato Letsepe. All rights reserved.</p>
            </div>
        </footer> 
    );
}
 
export default Footer;