import React from 'react'
import styles from "../styles/Resume.module.scss"
import { resume } from "../public/resume.pdf"
import Link from "next/link"

const Resume = () => {
    return(
        <div className={styles.container}>
            {/* <Link><a href={resume} target="_blank">Download here (PDF)</a></Link> */}
            {/* <img src="https://res.cloudinary.com/da9eikxhk/image/upload/v1629417533/Lerato_Letsepe_Resume_GIF_ehrtsj.gif" alt="Lerato Letsepe resume gif"  width="700" /> */}
        </div>
    )
}

export default Resume;