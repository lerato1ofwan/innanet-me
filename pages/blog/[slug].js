const BlogPost = ({ post }) => {
    
    console.log(post)

    return ( 
        <div>
            {post.Content}
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
  
    return {
        props: { 
            post: posts[0]
        },
        revalidate: 1000,
    };
}