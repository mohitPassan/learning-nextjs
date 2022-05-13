const PostPage = ({ post }) => {
    return (
        <>
            <h1>{post.title}</h1>
            <h2>{post.id}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default PostPage;

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    postId: "1"
                }
            },
            {
                params: {
                    postId: "2"
                }
            },
            {
                params: {
                    postId: "3"
                }
            },
            {
                params: {
                    postId: "4"
                }
            },
            {
                params: {
                    postId: "5"
                }
            }
        ],
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { params: { postId } } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();

    return {
        props: {
            post: data
        }
    }
}