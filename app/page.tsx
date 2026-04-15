import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to My Blog App </h1>

      <Link href="/blog">
        <button>Go to Blog</button>
      </Link>

      <br /><br />

      <Link href="/contact">
        <button>Contact Page</button>
      </Link>
    </div>
  );
}
