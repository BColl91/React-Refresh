import { useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [userid, setUserid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!userid || !email || !password) {
      setError("All fields are required.");
      return;
    }

    const response = await fetch(
      "https://login-production-a610.up.railway.app/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: userid, email: email, password: password })
      }
    );
    const output = await response.json();
    if (response.ok) {
      console.log("SUCCESS");
      
      setError(null);
    } else {
      setError(output.message || "Registration failed.");
    }
  };

  return (
    <div>
      <h1>Sign-In</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={submitHandler}>
        <label>User Id</label><br />
        <input type='text' name='userid' onChange={(event) => setUserid(event.target.value)} /><br /><br />
        <label>Email</label><br />
        <input type='text' name='email' onChange={(event) => setEmail(event.target.value)} /><br /><br />
        <label>Password</label><br />
        <input type='password' name='password' onChange={(event) => setPassword(event.target.value)} /><br /><br />
        <input type='submit' value="Submit" />
      </form>
      <hr />
    </div>
  );
}


export default Register