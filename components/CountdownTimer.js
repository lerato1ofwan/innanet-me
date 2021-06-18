import Countdown from 'react-countdown'
import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import styles from '../styles/CountdownTimer.module.scss'

const Home = () => <span>You are good to go!</span>;

const formatTime = (time) => (time).toLocaleString(undefined, {minimumIntegerDigits: 2});

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Home />;
    } else {
      // Render a countdown
      return (
          <div className={styles.countdown}>
            <div className={`${styles.time} ${styles.days}`}>
                <span>{formatTime(days)}</span>
                <span>days</span>
            </div>
            <div className={`${styles.time} ${styles.hours}`}>
                <span>{formatTime(hours)}</span>
                <span>hours</span>
            </div>
            <div className={`${styles.time} ${styles.minutes}`}>
                <span>{formatTime(minutes)}</span>
                <span>minutes</span>
            </div>
            <div className={`${styles.time} ${styles.seconds}`}>
                <span>{formatTime(seconds)}</span>
                <span>seconds</span>
            </div>
            {/* <span className={styles.time}>{formatTime(days)}:{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</span>
            <span className={styles['time-details']}>days hours minutes seconds</span> */}
        </div>
      );
    }
  };

const CountdownTimer = () => {
    return ( 
        <div>
            <h2>Launching In</h2>
            <Countdown date={Date.now() + 1230000000} renderer={renderer} />
        </div> 
    );
}
 
export default CountdownTimer;