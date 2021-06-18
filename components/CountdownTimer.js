import Countdown from 'react-countdown'
import React from 'react'
import styles from '../styles/CountdownTimer.module.scss'

const Home = () => <span>You are good to go!</span>;

const formatTime = (time) => (time).toLocaleString(undefined, {minimumIntegerDigits: 2});

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Home />;
    } else {
      // Render the countdown
      return (
          <div className={styles.countdown}>
            <div className={`${styles.time} ${styles.days}`}>
                <span className={styles['time-value']}>{formatTime(days)}</span>
                <span>days</span>
            </div>
            <div className={`${styles.time} ${styles.hours}`}>
                <span className={styles['time-value']}>{formatTime(hours)}</span>
                <span>hours</span>
            </div>
            <div className={`${styles.time} ${styles.minutes}`}>
                <span className={styles['time-value']}>{formatTime(minutes)}</span>
                <span>minutes</span>
            </div>
            <div className={`${styles.time} ${styles.seconds}`}>
                <span className={styles['time-value']}>{formatTime(seconds)}</span>
                <span>seconds</span>
            </div>
        </div>
      );
    }
  };

const CountdownTimer = () => {
    return ( 
        <div>
            <h2>Launching In</h2>
            <Countdown date='2021-07-02T12:00:00' renderer={renderer} />
        </div> 
    );
}
 
export default CountdownTimer;