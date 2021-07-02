import Footer from "./Footer"
import Navbar from "./Navbar"
import styles from '../styles/Layout.module.scss'
import { isInDev } from "../src/GeneralHelpers"

const Layout = ({ children }) => {

    const isHome = children.type.name.toLowerCase() == "home";

    return (
        <div className={styles.content}>

        { isInDev() ? 
            <div></div> :
            <Navbar isHome={isHome}/>
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