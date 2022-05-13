import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link href="/users">
          <a>Go to users page</a>
        </Link>
      </div>
      <div>
        <Link href="/posts">
          <a>Go to posts page</a>
        </Link>
      </div>
    </div>
  );
}

export default Home;