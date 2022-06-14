import { useRouter } from 'next/router';

const PostPage = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return (<h1>Loading..</h1>)
    }

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
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();

    const paths = data.slice(0, 3).map(post => ({
        params: {
            postId: String(post.id)
        }
    }));

    return {
        paths,
        fallback: "blocking"
    }
}

export const getStaticProps = async (context) => {
    const { params: { postId } } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();

    if (!data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post: data
        }
    }
}