function Contact() {
  return (
    <section style={styles.section}>
      <div style={styles.box}>
        <h2>Contact Me</h2>
        <p>Email: patidarrakshali9@gmail.com</p>
        <p>Mobile No: +91 7440388908</p>
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
    backgroundColor: "#cffbfc",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // 👈 top align
  },
  box: {
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "20px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
  },
};

export default Contact;