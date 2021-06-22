import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import CountdownTimer from '../components/CountdownTimer'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import Blogs from '../components/Blogs'
import { isInDev } from '../src/GeneralHelpers'

export default function Home({posts}) {

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
          <Featured post={posts.find(post => post.Featured)}/>
          <Blogs posts={posts.length > 8 ? posts.slice(0, 8) : posts} />
        </div>
      }
      
    </div>
  )
}

export async function getStaticProps() {
    
  // get the featured post from our api

  const response = await fetch(`${process.env.STRAPI_URL}/posts`);
  const posts = await response.json();

  return {
      props : {
          posts
      }
  }
}