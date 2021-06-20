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
                    <svg className={styles.dev} width="208" height="74" viewBox="0 0 208 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.714 55.71H27.974C33.5473 55.71 37.8373 54.06 40.844 50.76C43.924 47.46 45.464 42.95 45.464 37.23C45.464 31.4366 43.924 26.89 40.844 23.59C37.8373 20.29 33.5473 18.64 27.974 18.64H20.714V55.71ZM3.33398 71V3.45996H28.854C39.414 3.45996 47.7373 6.50329 53.824 12.59C59.9106 18.6766 62.954 26.89 62.954 37.23C62.954 47.57 59.9106 55.7833 53.824 61.87C47.7373 67.9566 39.414 71 28.854 71H3.33398Z" stroke="black" stroke-width="5"/>
                        <path d="M76.9652 3.45996H125.255V18.64H94.3452V29.2H122.615V44.05H94.3452V55.71H125.255V71H76.9652V3.45996Z" stroke="black" stroke-width="5"/>
                        <path d="M178.776 71H161.506L136.316 3.45996H155.236L170.526 47.13L185.816 3.45996H203.966L178.776 71Z" stroke="black" stroke-width="5"/>
                    </svg>

                    <p>&amp; hobbist designer</p>
                </div>

              



            </div>
            
        </div>
      );
}
 
export default Hero;