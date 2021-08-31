import React from 'react'
import styles from "../../../styles/PsControls.module.scss"

function Controls() {
    return (
        <svg className={styles.controls} width="90" height="90" viewBox="0 0 177 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M57.6413 50.5L87.5 0.968481L117.359 50.5H57.6413Z" stroke="#DA58A7"/>
        <path d="M176 96.5C176 111.739 164.309 124 150 124C135.691 124 124 111.739 124 96.5C124 81.2605 135.691 69 150 69C164.309 69 176 81.2605 176 96.5Z" stroke="#BFD6FF" strokeWidth="2"/>
        <rect x="0.5" y="68.5" width="51" height="52" stroke="#8C41EE"/>
        <line y1="-1.5" x2="67.425" y2="-1.5" transform="matrix(-0.675193 -0.737641 0.724995 -0.688754 116 176.803)" stroke="white" strokeWidth="3"/>
        <line y1="-1.5" x2="67.7837" y2="-1.5" transform="matrix(-0.675193 0.737641 -0.724995 -0.688754 110.767 127)" stroke="white" strokeWidth="3"/>
        </svg>
    )
}

export default Controls