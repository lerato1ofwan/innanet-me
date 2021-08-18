import React from 'react'
import styles from "../../../styles/PsControls.module.scss"

export default function Triangle({ count }) {
    return (
        <svg className={`${styles[`${count}`]} ${styles['triangle-control']}`} width="53" height="41" viewBox="0 0 63 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.64133 50.5L31.5 0.968481L61.3587 50.5H1.64133Z" stroke="#DA58A7"/>
        </svg>
    )
}