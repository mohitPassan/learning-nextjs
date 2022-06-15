import Link from "next/link";

const Home = () => {
    return (
        <div>
            <h1>Types of rendering</h1>
            <p>There are three types of rendering in NextJS</p>
            <ol>
                <Link href="/ssg">
                    <a>
                        <li>Static Site Generation</li>
                    </a>
                </Link>
                <Link href="/ssr">
                    <a>
                        <li>Server Side Rendering</li>
                    </a>
                </Link>
                <Link href="/csr">
                    <a>
                        <li>Client Side Fetching</li>
                    </a>
                </Link>
                <Link href="/swr">
                    <a>
                        <li>Bonus: SWR</li>
                    </a>
                </Link>
            </ol>
            <p>Click on list item to see a demo</p>
        </div>
    );
};

export default Home;
