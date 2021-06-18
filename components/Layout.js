import Footer from "./Footer"
import Navbar from "./Navbar"
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={styles.content}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout