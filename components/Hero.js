import styles from '../styles/Hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {


    return (
        <div className={styles.container}>

            <div className={styles['left']}>
             
            
            </div>

            <div className={styles['right']}>
                <div className={styles.content}>
                    <svg className={styles.dev} width="202" height="75" viewBox="0 0 202 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.5979 2.7998C35.9979 2.7998 42.4645 4.26647 47.9979 7.1998C53.5312 10.1331 57.7979 14.2665 60.7979 19.5998C63.8645 24.8665 65.3979 30.9665 65.3979 37.8998C65.3979 44.7665 63.8645 50.8665 60.7979 56.1998C57.7979 61.5331 53.4979 65.6665 47.8979 68.5998C42.3645 71.5331 35.9312 72.9998 28.5979 72.9998H2.29785V2.7998H28.5979ZM27.4979 58.1998C33.9645 58.1998 38.9979 56.4331 42.5979 52.8998C46.1979 49.3665 47.9979 44.3665 47.9979 37.8998C47.9979 31.4331 46.1979 26.3998 42.5979 22.7998C38.9979 19.1998 33.9645 17.3998 27.4979 17.3998H19.3979V58.1998H27.4979Z" stroke="#1B1B1B" strokeWidth="4"/>
                        <path d="M94.0541 16.4998V30.6998H116.954V43.8998H94.0541V59.2998H119.954V72.9998H76.9541V2.7998H119.954V16.4998H94.0541Z" stroke="#1B1B1B" strokeWidth="4"/>
                        <path d="M198.956 2.7998L174.056 72.9998H152.656L127.756 2.7998H145.956L163.356 55.7998L180.856 2.7998H198.956Z" stroke="#1B1B1B" strokeWidth="4"/>
                    </svg>
                    <p>&amp; hobbist designer</p>
                </div>

              



            </div>
            
        </div>
      );
}
 
export default Hero;