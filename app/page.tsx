import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        
        <h1 style={styles.title}>Naman Singh Kushwaha</h1>
        <p style={styles.subtitle}>React Developer </p>

        
        <p style={styles.desc}>
          Building modern web apps with Next.js, API integration and clean UI.
        </p>

        
        <div style={styles.buttonContainer}>
          <Link href="/blog">
            <button style={styles.button}>Go to Blog</button>
          </Link>

          <Link href="/contact">
            <button style={styles.buttonSecondary}>Contact Me</button>
          </Link>
        </div>

      </div>
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    background: "#f0f2f5",
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    textAlign: "center" as const,
    width: "350px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "16px",
    color: "gray",
    marginBottom: "15px",
  },
  desc: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#0070f3",
    color: "white",
    cursor: "pointer",
  },
  buttonSecondary: {
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#222",
    color: "white",
    cursor: "pointer",
  },
};
