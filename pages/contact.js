import styles from '../styles/Contact.module.scss';
import Image from 'next/image';
import handshake from '../public/icons/handshake.svg'
import Head from 'next/head';
import { motion } from 'framer-motion';
import { easing, fadeInUp } from '../src/Motions';

const Contact = () => {
    return ( 
        <motion.div className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
             <Head>
                <title>Lerato Letsepe | Collab</title>
                <link rel="icon" href="/logo.svg" />
            </Head>

            <div className={styles.content}>
                <motion.h1
                    variants={fadeInUp}
                    initial='initial'
                    animate='animate'
                >Get in touch!</motion.h1>
                <motion.p
                    variants={fadeInUp}
                    initial='initial'
                    animate='animate'
                >Let's work on something together.</motion.p>

                <motion.div className={styles.handshake}
                    variants={fadeInUp}
                    initial='initial'
                    animate='animate'
                >
                    <Image src={handshake} />
                    <p>Collaborate with me</p>
                </motion.div>


                <div className={styles.form}>
                    <p>Contact Form</p>
                    <form type="submit">
                        <div className={styles['form-content']}>
                            <div className={styles.left}>
                                <label for="name">Your name</label><br></br>
                                <input type="text" onChange={e => {}} name="name" className={styles['input-field']} autoComplete="off" /><br></br>
                                <label for="email">Your email</label><br></br>
                                <input type="text" onChange={e => {}} name="email" className={styles['input-field']} />
                            </div>
                           
                            <div className={styles.right}>
                                <label for="message">Message</label><br></br>
                                <textarea type="text" onChange={e => {}} name="message" className={styles['message-input-field']} autoComplete="off" rows="5" cols="30"></textarea>
                            </div>
                        </div>
                        
                        <div className={styles.submit}><button className={styles.send}>Send Message</button></div>
                    </form>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Contact;