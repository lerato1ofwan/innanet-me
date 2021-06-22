import styles from '../styles/Featured.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import PageTitle from './PageTitle'
import Button from './Button'
import { getStrapiMedia } from "../src/media";
import { blurDataUrl } from '../src/GeneralHelpers'


const Featured = ({post}) => {
    const { Title, Cover, FeaturedSubtitle, Slug  } = post;

    const imageUrl = getStrapiMedia(Cover);
    const img = Cover.formats.small;

    return ( 
        <div className={styles.container}>

            <div className={styles.heading}>
                <PageTitle text="Featured post"/>
                <Link href="/"><a>{Title}</a></Link>
            </div>
            
            <div className={styles.content}>

                <div className={styles.left}>
                    <div dangerouslySetInnerHTML={{__html:`<p>${FeaturedSubtitle}</p>`}}></div>
                    <Button text="Read More" type="blue-action" link={`blogs/${Slug}`}/>
                </div>

                <div className={styles.right}>
                    <Image
                        src={imageUrl}
                        alt={`Cover Image for ${Title}`}
                        width={img.width}
                        height={img.height}
                        placeholder="blur"
                        blurDataURL={blurDataUrl()}
                    />
                </div>
            
            </div>
        </div>
     );
}
 
export default Featured;