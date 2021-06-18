import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import CountdownTimer from '../components/CountdownTimer'
import Hero from '../components/Hero'
import { isInDev } from '../utils/GeneralHelpers'

export default function Home() {

  return (
    <div>
        <Head>
        <title>Lerato Letsepe | Home</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      { isInDev() ? 
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