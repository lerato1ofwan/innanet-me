import styles from '../styles/Contact.module.scss';
import Image from 'next/image';
import handshake from '../public/icons/handshake.svg'

const Contact = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Get in touch!</h1>
                <p>Let's work on something together.</p>

                <div className={styles.handshake}>
                    <Image src={handshake} />
                    <p>Collaborate with me</p>
                </div>


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
        </div>
     );
}
 
export default Contact;