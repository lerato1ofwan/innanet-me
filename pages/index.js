import Head from 'next/head';
import CountdownTimer from '../components/CountdownTimer';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Blogs from '../components/Blogs';
import { isInDev, sortByDate } from '../src/GeneralHelpers';
import { motion } from 'framer-motion';

export default function Home({posts}) {

  return (
    <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
           ease: 'easeOut',
           duration: 1
        }}
        >
        <Head>
          <title>Lerato Letsepe | Home, Software Engineer</title>
          <link rel="icon" href="/logo.svg" />
        </Head>

        { isInDev() ? 
            <CountdownTimer />
          :
          <div>
          <Hero />
          <Featured post={posts.find(post => post.Featured)}/>
          <Blogs posts={posts.length > 8 ? posts.slice(0, 8) : posts} />
        </div>
      }
      
    </motion.div>
  )
}

export async function getStaticProps() {
    
  // get the posts from our api

  const response = await fetch(`${process.env.STRAPI_URL}/posts`);
  const posts = await response.json();

  return {
      props : {
          posts: posts.sort(sortByDate)
      }
  }
}