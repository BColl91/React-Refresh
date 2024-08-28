import { useState } from 'react';
import readcookie from '../utils/readcookie';

const DeleteUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //SUBMITHANDLER
  const submitHandler = async (event) => {
    event.preventDefault();
    const token = readcookie("jwt_token");
    
    try {
      const response = await fetch("http://localhost:5002/users/deleteUser", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const output = await response.json();
      if (response.ok) {
        setMessage("User deleted successfully!");
      } else {
        setMessage(`Error: ${output.message || 'Failed to delete user.'}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  }

  return (
    <div>
      <h1>!!DELETE USER!!</h1>
      <form onSubmit={submitHandler}>
        <label>Email</label><br />
        <input type='text' name='email' onChange={(event) => setEmail(event.target.value)} /><br /><br />
        <label>Password</label><br />
        <input type='text' name='password' onChange={(event) => setPassword(event.target.value)} /><br /><br />
        <input type='submit' value="Submit" />
      </form>
      <p>{message}</p>
      <hr />
    </div>
  );
}

export default DeleteUser;
