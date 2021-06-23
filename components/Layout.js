import Footer from "./Footer"
import Navbar from "./Navbar"
import styles from '../styles/Layout.module.scss'
import { isInDev } from "../src/GeneralHelpers"

const Layout = ({ children }) => {

    return (
        <div className={styles.content}>

        { isInDev() ? 
            <div></div> :
            <Navbar />
        }
            {children}

        { isInDev() ? 
            <div></div> :
            <Footer />
        }
           
        </div>
    )
}

export default Layout