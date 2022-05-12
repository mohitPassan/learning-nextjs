import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/users">
        <a>Go to users page</a>
      </Link>
    </div>
  );
}

export default Home;