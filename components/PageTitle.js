import styles from '../styles/PageTitle.module.scss'

const PageTitle = ({text, featured}) => {
    return ( featured == true ? <p className={`${styles['p-text']}`}>{text}</p> : <p className={`${styles.text} ${styles[`${featured}`]}`}>{text}</p> );
}
 
export default PageTitle;