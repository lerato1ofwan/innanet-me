import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import styles from '../../styles/BlogPost.module.scss'

const BlogPost = ({ post, content }) => {
    const {Title} = post;

    const LinkTag = props => <a target="_blank" href={props.href} rel="noopener noreferrer">{props.children}</a>

    const Qoute = props => {
        return (
            <div className={styles.quote}>
                <p>
                    {props.children.props.children[0]}
                </p>
                <a target="_blank" href={props.children.props.children[1].props.href} rel="noopener noreferrer">
                    {props.children.props.children[1].props.children}
                </a>
            </div>
        )
    }

    const components = {
        a: LinkTag,
        blockquote: Qoute
      }

    return ( 
        <div className={styles.container}>
            <div className={styles['blog-post-content']}>
                <h1>{Title}</h1>

                <div className="wrapper">
                    <MDXRemote {...content} components={components}/>
                </div>
              
            </div>
        </div>
     );
}
 
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
        fallback: false,
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
            content
        },
        revalidate: 1000,
    };
}