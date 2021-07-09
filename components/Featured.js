import styles from '../styles/Featured.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import PageTitle from './PageTitle'
import Button from './Button'
import { getStrapiMedia } from "../src/media";
import { blurDataUrl } from '../src/GeneralHelpers'
import { motion } from 'framer-motion'

const Featured = ({post}) => {
    const { Title, Cover, FeaturedSubtitle, Slug  } = post;

    const imageUrl = getStrapiMedia(Cover);
    const img = Cover.formats.small;

    return ( 
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className={styles.container}>

            <div className={styles.heading}>
                <PageTitle text="Featured post"/>
                <Link href={`/blog/${Slug}`}><a>{Title}</a></Link>
            </div>
            
            <div className={styles.content}>

                <div className={styles.left}>
                    <div dangerouslySetInnerHTML={{__html:`<p>${FeaturedSubtitle}</p>`}}></div>
                    <Button text="Read More" type="blue-action" link={`/blog/${Slug}`} />
                </div>

                <motion.div className={styles.right}
                    whileHover={{
                        scale: 1.1
                    }}
                >
                  <Link href={`/blog/${Slug}`}>
                    <Image
                            src={imageUrl}
                            alt={`Cover Image for ${Title}`}
                            width={img.width}
                            height={img.height}
                            placeholder="blur"
                            blurDataURL={blurDataUrl()}
                        />
                  </Link>
                    
                </motion.div>
            
            </div>
        </motion.div>
     );
}
 
export default Featured;