import Link from "next/link";

const localBlogs = [
  { id: "1", title: "Learn Next.js", category: "tech" },
  { id: "2", title: "Life Tips", category: "lifestyle" },
];

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function BlogPage() {
  const users = await getUsers();

  return (
    <div style={styles.container}>
      <h1>📰 Blog Page</h1>

      {/* LOCAL BLOGS */}
      <h2>Local Blogs</h2>
      <div style={styles.grid}>
        {localBlogs.map((blog) => (
          <div key={blog.id} style={styles.card}>
            <h3>{blog.title}</h3>

            <Link href={`/blog/${blog.id}`}>
              <button>View</button>
            </Link>

            <Link href={`/blog/category/${blog.category}`}>
              <button>Category</button>
            </Link>
          </div>
        ))}
      </div>

      {/* API USERS */}
      <h2>API Users</h2>
      <div style={styles.grid}>
        {users.map((user: any) => (
          <div key={user.id} style={styles.card}>
            <h3>{user.name}</h3>

            <Link href={`/blog/${user.id}`}>
              <button>View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px", textAlign: "center" as const },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap" as const,
  },
  card: {
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "200px",
  },
};
