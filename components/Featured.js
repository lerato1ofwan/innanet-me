import styles from '../styles/Featured.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import featuredImg from '../public/imgs/featured-img.jpg'
import PageTitle from './PageTitle'
import Button from './Button'

const Featured = () => {
    return ( 
        <div className={styles.container}>

            <div className={styles.heading}>
                <PageTitle text="Featured post"/>
                <Link href="/"><a>Views Of A 21-Year-Old Software Developer.</a></Link>
            </div>
            
            <div className={styles.content}>
                
                <div className={styles.left}>
                   
                    <p>
                        In this article I share my views and persections on the software development industry in South Africa, at first glance. 
                        I start by sharing my past experiences prior to working an engineer in the industry and furthur discussing some painful truths I had to 
                        learn on my own; before closing off with some reflective analysis and wholesome advice.
                        <br></br>
                        <br></br>
                        This is really where my story began.
                    </p>
                    
                    <Button text="Read More" type="blue-action" />
                    
                </div>

                <div className={styles.right}>
                    <Image
                        src={featuredImg}
                        alt='Featured post image'
                        width={500}
                        height={300}
                        placeholder='blur'
                    />
                </div>
            
            </div>
        </div>
     );
}
 
export default Featured;