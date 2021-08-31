import styles from '../styles/Contact.module.scss';
import Image from 'next/image';
import handshake from '../public/icons/handshake.svg'
import Head from 'next/head';
import { motion } from 'framer-motion';
import { easing, fadeInUp } from '../src/Motions';
import { handleOnSubmit } from '../src/GeneralHelpers';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

const Contact = () => {
    const router = useRouter();
    const [messageSent, setMessageSent] = useState(false);

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
                >{router.query?.request === 'hire' ? 'Hire me' : 'Get in touch!'}  </motion.h1>
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
                    <form type="submit" onSubmit={(e) => {
                                handleOnSubmit(e, 'collaboration').then(
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
                        <div className={styles['form-content']}>
                            <div className={styles.left}>
                                <label htmlFor="name">Your name</label><br></br>
                                <input type="text" name="name" className={styles['input-field']} autoComplete="off" required/><br></br>
                                <label htmlFor="email">Your email</label><br></br>
                                <input type="email" name="email" className={styles['input-field']} required/>
                            </div>
                           
                            <div className={styles.right}>
                                <label htmlFor="message">Message</label><br></br>
                                <textarea type="text" name="message" className={styles['message-input-field']} required autoComplete="off" rows="5" cols="30"></textarea>
                            </div>
                        </div>
                        
                        <div className={styles.submit}>
                            {!messageSent && <button className={styles.send} id="submit1">Send Message</button> }
                            {messageSent && <p>Ay thanks, I've received your mail!</p> }
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Contact;