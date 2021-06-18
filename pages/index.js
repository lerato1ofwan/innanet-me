import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import CountdownTimer from '../components/CountdownTimer'
import Hero from '../components/Hero'

export default function Home() {

  const inDev = new Date();
  const launchDate = new Date('July 02, 2021 12:00:00');

  return (
    <div>
        <Head>
        <title>Lerato Letsepe | Home</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      {inDev > launchDate ? 
        <div className={styles['launch-container']}>
          <div className={styles['launch-content']}>
            <h1>Innanet → me [Personal Website]</h1>
            <CountdownTimer />
          </div>
        </div> :
        <div>
          <Hero />
        </div>
        }
      
    </div>
  )
}