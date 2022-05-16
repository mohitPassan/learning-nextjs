import Link from "next/link";

const PostsList = ({ posts }) => {
    return (
        <>
            <h1>Post list here:</h1>
            <ul>
                {
                    posts.map(post => (
                        <Link href={`/posts/${post.id}`} key={post.id}>
                            <a>
                                <li key={post.id}>
                                    {post.id} {post.title}
                                </li>
                            </a>
                        </Link>
                    ))
                }
            </ul>
        </>
    )
}

export default PostsList;

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
        props: {
            posts: data
        }
    }
}