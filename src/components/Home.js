import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpg";
function Home() {
  const navigate = useNavigate();

  return (
    <section style={styles.container}>
        <img 
  src={profile} 
  alt="profile" 
  style={{
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #38bdf8",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
  }} 
/>
      <h1> I'm Rakshali Patidar 👋</h1>
      <p>Aspiring Developer 🚀</p>

      <button
  onClick={() => navigate("/projects")}
  style={styles.button}
  onMouseOver={(e) => e.target.style.backgroundColor = "#1e293b"}
  onMouseOut={(e) => e.target.style.backgroundColor = "#0f172a"}
>
  View Projects
</button>
    </section>
  );
}

const styles = {
  container: {
    padding: "60px",
    textAlign: "center",
  },
 button: {
  marginTop: "20px",
  padding: "12px 25px",
  backgroundColor: "#0f172a",
  color: "white",
  border: "none",
  borderRadius: "25px",   // 🔥 makes it rounded
  cursor: "pointer",
  fontSize: "16px"
}
};

export default Home;