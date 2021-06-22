import styles from '../styles/Button.module.scss'
import Link from 'next/link'

const Button = ({text, type}) => {

    return ( 
        <div className={`${styles[`${type}`]} ${styles.all}`}>
            <Link href="/blogs"><a>{text}</a></Link>
        </div>
     );
}
 
export default Button;