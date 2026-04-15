type User = {
  id: number;
  name: string;
  email: string;
};

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function BlogPage() {
  const users = await getUsers();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <a href={`/blog/${user.id}`}>
            <h3>{user.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
