import styles from '../styles/Button.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Button = ({text, type, link }) => {

    const router = useRouter();

    return ( 
        <div className={`${styles[`${type}`]} ${styles.all}`} onClick={() => router.push(`/${link}`)}>
            <Link href={`/${link}`}><a>{text}</a></Link>
        </div>
     );
}
 
export default Button;