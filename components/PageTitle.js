import styles from '../styles/PageTitle.module.scss'

const PageTitle = ({text}) => {
    return ( <p className={styles.text}>{text}</p> );
}
 
export default PageTitle;