import Footer from './Footer';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.scss'
import { isInDev } from '../src/GeneralHelpers';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';

const Layout = ({ children, route }) => {

    const router = useRouter();

    const isHome = router.route.toLowerCase() == "/" || router.route.toLowerCase() == "/#";

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