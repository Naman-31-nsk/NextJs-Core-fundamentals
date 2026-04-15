type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

async function getUser(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
}

export default async function BlogDetail({
  params,
}: {
  params: { id: string };
}) {
  const user = await getUser(params.id);

  return (
    <div style={{ padding: "20px" }}>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
}
