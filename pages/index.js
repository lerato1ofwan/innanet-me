import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import CountdownTimer from '../components/CountdownTimer'

export default function Home() {
  return (
    <div>
        <Head>
        <title>Lerato Letsepe | Home</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Innanet → me [Personal Website]</h1>
          <CountdownTimer />
        </div>
      </div>
    </div>
  )
}