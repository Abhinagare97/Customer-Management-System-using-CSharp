import { useState } from "react";
import { useNavigate } from "react-router-dom"; //

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:5232/login/${username}/${password}`, {
        method: "POST",
      });

      const result = await response.text(); // API returns "1" or "0"

      if (result === "1") {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("loggedInUser", username);
        navigate("/profile");
      } else {
        setMessage("Invalid credentials ");
      }
    } catch (error) {
      setMessage("Error connecting to the server! ");
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <h2>Enter Username and Password</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
