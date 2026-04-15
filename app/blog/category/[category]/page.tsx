import Link from "next/link";

const blogs = [
  { id: "1", title: "Learn Next.js", category: "tech" },
  { id: "2", title: "Life Tips", category: "lifestyle" },
];

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const filtered = blogs.filter(
    (b) => b.category === params.category
  );

  return (
    <div style={styles.container}>
      <h1>Category: {params.category}</h1>

      {filtered.map((blog) => (
        <div key={blog.id} style={styles.card}>
          <h3>{blog.title}</h3>

          <Link href={`/blog/${blog.id}`}>
            <button>Read</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { textAlign: "center" as const, padding: "20px" },
  card: {
    margin: "10px auto",
    padding: "10px",
    width: "200px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};
