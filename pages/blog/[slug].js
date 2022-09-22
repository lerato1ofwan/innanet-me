import Image from 'next/image';
import save from '../../public/icons/save.svg';
import styles from '../../styles/BlogPost.module.scss';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import { LinkTag, Qoute } from '../../components/MarkdownComponents';
import { getDate } from '../../src/GeneralHelpers';
import { serialize } from 'next-mdx-remote/serialize';
import back from '../../public/icons/back.svg';
import { motion } from 'framer-motion';

const BlogPost = ({ post, content }) => {
  const components = {
    a: LinkTag,
    blockquote: Qoute,
  };

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const date = getDate(post.PublishedDate);
  const profileImageUrl = post.author.ProfileImage.url;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className={styles.container}
    >
      <div className={styles.back} onClick={(e) => router.push('/blog')}>
        <Image
          className={styles.back}
          src={back}
          alt='back button arrow'
          width={20}
          height={15}
        />
        <span>Back to blogs</span>
      </div>
      <div className={styles['blog-post-content']}>
        <h1>{post.Title}</h1>

        <div className={styles.info}>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src={profileImageUrl}
              alt={`Cover Image for ${post.Title}`}
              width={35}
              height={35}
            />
            <div>
              <p>{post.author.Name}</p>
              <p className={styles.date}>
                <span>On </span>
                {date}
              </p>
            </div>
          </div>

          <div className={styles.share}>
            <ul>
              <li>
                <a
                  target='_blank'
                  href={`http://twitter.com/share?text=🚀Check you this amazing blog post by @lerato1ofone 😃🔌&url=${process.env.NEXT_PUBLIC_HOST}/${post.Slug}`}
                  rel='noopener noreferrer'
                >
                  <img
                    className={styles.social}
                    src='/icons/twitter.svg'
                    alt='twitter'
                    width='25'
                    height='25'
                  />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `${process.env.NEXT_PUBLIC_HOST}/${post.Slug}`
                  )}`}
                  rel='noopener noreferrer'
                >
                  <img
                    className={styles.social}
                    src='/icons/linkedin.svg'
                    alt='linkedin'
                    width='25'
                    height='25'
                  />
                </a>
              </li>
              <li>
                <Image
                  className={styles.bookmark}
                  src={save}
                  alt='save'
                  width={20}
                  height={20}
                />
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.wrapper}>
          <MDXRemote {...content} components={components} />
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const response = await fetch(`${process.env.STRAPI_URL}/posts`);
  const posts = await response.json();

  return {
    paths: posts.map((blogPost) => ({
      params: {
        slug: blogPost.Slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const response = await fetch(`${process.env.STRAPI_URL}/posts?Slug=${slug}`);
  const posts = await response.json();
  const post = posts[0];

  const content = await serialize(post.Content);

  return {
    props: {
      post,
      content,
    },
    revalidate: 1800,
  };
}
