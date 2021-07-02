import Countdown from 'react-countdown'
import React from 'react'
import { getLaunchDate, sortByDate } from '../src/GeneralHelpers';
import styles from '../styles/CountdownTimer.module.scss'
import Home from '../pages';


const formatTime = (time) => (time).toLocaleString(undefined, {minimumIntegerDigits: 2});

let postsData = [];

const getData = async () => {
  const response = await fetch(`${process.env.STRAPI_URL}/posts`);
  postsData = await response.json();
}

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {

  if (completed) {
    // Get posts from api
    getData();

    // Render a completed state
    return <Home posts={postsData} fromCountdown={true}/>;
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
        <div className={styles['launch-container']}>
          <div className={styles['launch-content']}>
            <h1>Innanet → me [Personal Website]</h1>
            <div>
                <h2>Launching In</h2>
                <Countdown date={getLaunchDate()} renderer={renderer} />
            </div> 
          </div>
        </div>
    );
}
 
export default CountdownTimer;