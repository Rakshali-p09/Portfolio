function Projects() {
  return (
    <section style={styles.section}>
      <h2>My Projects</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Portfolio Website</h3>
          <p>Built using React</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    padding: "60px 20px",
    paddingTop: "120px",   // 👈 important
    textAlign: "center",
    backgroundColor: "#fbfee0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // 👈 top align
  },
  grid: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
  },
};

export default Projects;