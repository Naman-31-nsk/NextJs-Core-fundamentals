export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={styles.body}>
        
        <nav style={styles.nav}>
          <h2 style={{ margin: 0 }}> Naman Dev</h2>
        </nav>

      
        <main style={styles.main}>{children}</main>

        <footer style={styles.footer}>
          <p>© 2026 Naman Singh Kushwaha | React Developer</p>
        </footer>
      </body>
    </html>
  );
}

const styles = {
  body: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f2f5",
  },
  nav: {
    background: "#0070f3",
    color: "white",
    padding: "15px 20px",
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center" as const,
    padding: "15px",
    background: "#222",
    color: "white",
  },
};
