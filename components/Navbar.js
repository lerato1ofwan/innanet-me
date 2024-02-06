import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import SocialIcons from './SocialIcons'
import { motion } from 'framer-motion'
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router'

const Navbar = ({ isHome }) => {

    const router = useRouter();
    const { route } = router;

    const [isOpen, setIsOpen] = useState(false);
    const [navbarColor, setNavbarColor] = useState("inactive");
    const navRef = useRef(null);

    const iconVariants = {
        opened: {
          rotate: 0,
        },
        closed: {
          rotate: 0,
        },
      };

      const line1Variants = {
        opened: {
            rotate: 45,
            y: 5,
            background: "black",
        },
        closed: {
            rotate: 0,
            y: 0,
            background: "white",
        },
      };

      const line2Variants = {
        opened: {
            rotate: -45,
            y: -5,
            width: "2.5rem",
            background: "black",
        },
        closed: {
            rotate: 0,
            y: 0,
            background: "white",
            width: "1.5rem",
        },
      };

    const toggleNav = (e) => {
        setIsOpen(!isOpen);

        if(navRef.current.attributes.getNamedItem("style") == null) {
            setNavbarColor("nav-active");
            navRef.current.setAttribute("style", "clip-path: circle(2500px at 100% -10%);");
            document.body.classList.add("hide");
        } 
        else {
            setNavbarColor("inactive");
            navRef.current.attributes.removeNamedItem("style");
            document.body.classList.remove("hide");
        }
    }
  
    return ( 
        <div className={styles.navbar}>

            <div className={`${styles.header} ${styles[`${navbarColor}`]}`}>
               <div id="logo" className={styles.logo}>
                    <Link href='/'>
                       <a onClick={isOpen && toggleNav}> 
                       <svg id="logo-icon" width="100" height="58" viewBox="0 0 135 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.33964 15.454C2.97639 15.8865 1.7518 16.1441 0.660156 16.2409V8.83164C1.59067 8.71384 2.60092 8.435 3.68056 8.0205L3.68061 8.02064L3.69585 8.01455C5.18996 7.41293 6.65375 6.71193 8.08717 5.91199C9.56808 5.11658 10.8376 4.33748 11.8885 3.57355L11.8923 3.57071C12.7032 2.97504 13.3653 2.42516 13.8021 1.93213H23.8543V34.029V34.915H24.8177H34.5245V42.0119H2.34048V34.915H13.3075H14.2708V34.029V11.8206V9.39584L12.571 11.2493C12.0115 11.8596 10.9839 12.5789 9.39462 13.3917L9.39457 13.3916L9.38201 13.3982C7.87492 14.1965 6.19805 14.8817 4.34794 15.4515L4.34792 15.4513L4.33964 15.454Z" stroke="white" strokeWidth="1.25"/>
                            <path d="M103.976 29.6854C102.515 30.1489 101.205 30.4153 100.042 30.4981V22.7394C100.995 22.6379 102.044 22.357 103.18 21.9208L103.18 21.921L103.193 21.916C104.679 21.3175 106.136 20.6198 107.563 19.8235C109.039 19.0308 110.301 18.2561 111.343 17.4984L111.346 17.4962C112.196 16.8714 112.866 16.3088 113.284 15.8187H123.621V48.0928V48.8016H124.392H134.291V56.2529H101.722V48.8016H112.881H113.652V48.0928V25.8844V23.9446L112.292 25.4274C111.71 26.0622 110.659 26.7939 109.062 27.6103L109.052 27.6156C107.533 28.4203 105.844 29.1103 103.983 29.6832L103.976 29.6854Z" stroke="white"/>
                            <path d="M21.0297 33.4033L21.0297 33.4033L21.0309 33.4006C21.9737 31.3447 23.2971 29.5245 25.0052 27.9394L25.0053 27.9395L25.0089 27.936C26.716 26.3199 28.7157 25.0501 31.0127 24.1278L31.0127 24.1278L31.0156 24.1266C33.3397 23.1762 35.8885 22.6979 38.6679 22.6979C41.4837 22.6979 44.0293 23.192 46.3122 24.1722L46.3149 24.1733C48.6499 25.16 50.629 26.4765 52.2597 28.1204L52.2596 28.1204L52.2636 28.1243C53.9371 29.7747 55.2056 31.6263 56.0749 33.6803L56.0748 33.6803L56.0791 33.6897C56.9854 35.7135 57.4357 37.7775 57.4357 39.8865C57.4357 42.0928 56.9665 44.2203 56.0257 46.2731C55.0829 48.2977 53.758 50.1193 52.0468 51.7394L52.0465 51.7396C50.379 53.3206 48.381 54.5747 46.0456 55.4977L46.0431 55.4987C43.7557 56.4171 41.2433 56.8797 38.4999 56.8797C35.6445 56.8797 33.0591 56.4009 30.7369 55.4515C28.4407 54.4975 26.4611 53.213 24.7925 51.6C23.1547 49.9481 21.8844 48.1102 20.9774 46.0847C20.0709 44.0285 19.6201 41.9308 19.6201 39.7888C19.6201 37.5485 20.0897 35.4218 21.0297 33.4033ZM27.8605 45.684L27.8604 45.684L27.8643 45.6914C28.8389 47.528 30.2241 49.0244 32.0117 50.1772L32.0158 50.1798C33.8634 51.3459 36.0507 51.9184 38.556 51.9184C41.1349 51.9184 43.3459 51.3297 45.1616 50.1246C46.9498 48.9379 48.3166 47.4064 49.2531 45.5341L49.2532 45.5341C50.1819 43.6771 50.6502 41.7606 50.6502 39.7888C50.6502 37.6888 50.164 35.7185 49.1915 33.8862C48.2156 32.0471 46.8093 30.5659 44.9832 29.4461C43.1728 28.2801 41.023 27.7081 38.556 27.7081C35.9769 27.7081 33.7659 28.2967 31.9502 29.5017C30.1625 30.6882 28.796 32.2192 27.8596 34.0907C26.9297 35.9163 26.4616 37.8173 26.4616 39.7888C26.4616 41.8853 26.9275 43.8529 27.8605 45.684ZM71.0946 42.7694V56.6353H64.365V22.9421H90.0822V27.8547H71.5946H71.0946V28.3547V37.2967V37.7967H71.5946H86.8896V42.2694H71.5946H71.0946V42.7694Z" stroke="white"/>
                            <path d="M73.0679 33.5385H127.015" stroke="white" strokeWidth="2"/>
                            <path d="M35.9279 16.1945L29.9097 0.934082L36.7849 5.78647V15.5202H43.9095V16.1945H35.9279ZM53.6397 15.5202V16.1945H45.6916V5.78647H53.4885V6.46081H46.5486V10.5507H52.6147V11.1957H46.5486V15.5202H53.6397ZM55.9804 16.1945V5.78647H60.9374C61.6094 5.78647 62.2089 5.94779 62.7353 6.27029C63.2618 6.583 63.6707 6.98858 63.962 7.487C64.2644 7.97564 64.4156 8.48384 64.4156 9.01147C64.4156 9.52945 64.298 10.0133 64.0628 10.4628C63.8276 10.9123 63.4971 11.2885 63.0714 11.5915C62.657 11.8945 62.1696 12.0801 61.6094 12.1486L64.5836 16.1945H63.5922L60.7022 12.2658H56.8374V16.1945H55.9804ZM56.8374 11.5769H61.0214C61.5367 11.5769 61.9848 11.4547 62.3656 11.2104C62.7465 10.966 63.0378 10.6485 63.2394 10.2575C63.4523 9.86669 63.5586 9.45134 63.5586 9.01147C63.5586 8.56195 63.4355 8.1466 63.189 7.76555C62.9538 7.37458 62.6345 7.06186 62.2312 6.82725C61.828 6.583 61.3855 6.46081 60.9038 6.46081H56.8374V11.5769ZM70.541 5.78647H71.2804L76.3214 16.1945H75.414L73.7504 12.7642H68.0542L66.3906 16.1945H65.4664L70.541 5.78647ZM73.5152 12.1486L70.9107 6.69542L68.2558 12.1486H73.5152ZM85.3021 6.46081H80.9332V16.1945H80.0762V6.46081H75.7074V5.78647H85.3021V6.46081ZM91.4376 16.2678C90.6086 16.2678 89.8524 16.1212 89.1692 15.828C88.4857 15.5251 87.8977 15.1244 87.4048 14.6259C86.9118 14.1275 86.531 13.5656 86.2622 12.9402C85.9933 12.3049 85.8589 11.6551 85.8589 10.9906C85.8589 10.2966 85.9989 9.63704 86.279 9.01147C86.559 8.37625 86.9511 7.81432 87.4552 7.32568C87.9704 6.82726 88.5642 6.43643 89.2364 6.15305C89.9196 5.85976 90.659 5.71318 91.4544 5.71318C92.2833 5.71318 93.0395 5.86472 93.7228 6.16765C94.4062 6.47059 94.9942 6.87616 95.4872 7.38436C95.9801 7.89257 96.361 8.45932 96.6298 9.08475C96.8986 9.71033 97.033 10.3456 97.033 10.9906C97.033 11.6941 96.8875 12.3636 96.5962 12.9988C96.3161 13.6243 95.924 14.1862 95.42 14.6846C94.9158 15.1733 94.3221 15.5593 93.6388 15.8427C92.9666 16.126 92.2329 16.2678 91.4376 16.2678ZM86.7158 10.9906C86.7158 11.5866 86.8278 12.1584 87.052 12.7057C87.2872 13.2529 87.6176 13.7465 88.0434 14.1862C88.4689 14.6162 88.9675 14.9582 89.5388 15.2123C90.1212 15.4566 90.7598 15.5788 91.4544 15.5788C92.1713 15.5788 92.8154 15.4469 93.3868 15.1831C93.9692 14.9191 94.4677 14.5673 94.8822 14.1275C95.2967 13.6878 95.6103 13.1991 95.8232 12.6616C96.0473 12.1144 96.1593 11.5573 96.1593 10.9906C96.1593 10.3943 96.0417 9.8226 95.8064 9.27542C95.5824 8.72809 95.2575 8.23945 94.8318 7.8095C94.4062 7.37954 93.902 7.03748 93.3196 6.78331C92.7482 6.52928 92.1266 6.40226 91.4544 6.40226C90.7375 6.40226 90.0876 6.5341 89.5052 6.79805C88.9227 7.06187 88.4242 7.41371 88.0097 7.85344C87.5953 8.29318 87.2759 8.78678 87.052 9.33397C86.8278 9.87151 86.7158 10.4237 86.7158 10.9906Z" fill="white"/>
                            <path d="M70.7558 14.8972C73.6076 14.8972 75.9193 12.7711 75.9193 10.1483C75.9193 7.52557 73.6076 5.39941 70.7558 5.39941C67.9041 5.39941 65.5923 7.52557 65.5923 10.1483C65.5923 12.7711 67.9041 14.8972 70.7558 14.8972Z" stroke="white" strokeWidth="0.3"/>
                            <path d="M96.3622 5.3269L85.5728 16.6676" stroke="white" strokeWidth="0.3"/>
                            <path d="M36.0753 43.4615H22.2031V33.5385H36.0753V43.4615Z" fill="white"/>
                        </svg>
                       </a>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><Link href="/blog"><a className={styles['nav-link']}>Blog</a></Link></li>
                        <li><Link href="/about" ><a className={styles['nav-link']}>About</a></Link></li>
                        <li><Link href="/contact"><a className={`${styles[`nav-link`]} ${styles.collab}`}>Collaborate</a></Link></li>
                    </ul>

               
                <motion.div className={styles.burger} id="burger" 
                    variants={iconVariants}
                    animate={isOpen ? "opened" : "closed"}
                    whileHover={{ scale: 1.1 }}
                    onClick={toggleNav}
                >
                    <motion.div variants={line1Variants} className={styles.line1}></motion.div>
                    <motion.div variants={line2Variants} className={styles.line2}></motion.div>
                </motion.div>
    
                </nav>
            </div>

            {isHome && <motion.div initial={{ x: 0 }} animate={{ x:  "-100vw" }} transition={{ delay: 2, duration: 1.5 }} className={styles.overlay}></motion.div>}

            <SocialIcons isHome={isHome} />

            <div id="nav-bar" className={styles['nav-bar']} ref={navRef}>
                <div className={styles['nav-items']}>
                    <Link href="/" className={styles['nav__link']}><a className={styles[`${isHome ? `active` : ``}`]} onClick={toggleNav}>Home</a></Link>
                    <Link href="/blog" className={styles['nav__link']}><a className={styles[`${route == '/blog' ? `active` : ``}`]} onClick={toggleNav}>Blog</a></Link>
                    <Link href="/about" className={styles['nav__link']}><a className={styles[`${route == '/about' ? `active` : ``}`]} onClick={toggleNav}>About</a></Link>
                    <Link href="/contact" className={styles['nav__link']}><a className={styles[`${route == '/contact' ? `active` : ``}`]} onClick={toggleNav}>Contact</a></Link>
                </div>
                <h2>Connect with me <span>→</span></h2>
                <ul>
                    <li><a target="_blank" href="https://www.github.com/lerato1ofwan" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/github.svg" alt="github" width="25" height="25"/></a></li>
                    <li><a target="_blank" href="https://www.twitter.com/lerato1ofwan" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/twitter.svg" alt="twitter" width="25" height="25"/></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/lerato-letsepe-1312b5156/" rel="noopener noreferrer"><Image className={styles.icon} src="/icons/linkedin.svg" alt="linkedin" width="25" height="25"/></a></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;