function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

  return (
    <section style={styles.section}>
      <h2>My Skills</h2>

      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.card}>{skill}</div>
        ))}
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
    backgroundColor: "#e0f2fe",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // 👈 top align
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  card: {
    padding: "10px 20px",
    backgroundColor: "#0f172a",
    color: "white",
    borderRadius: "20px",
  },
};

export default Skills;