import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/registerUser';
import Login from './components/login';
import ListUsers from './components/listUsers';
import UpdateUser from './components/updateuser';
import DeleteUser from './components/deleteuser';
import { Link } from 'react-router-dom';

function App() {
  const [toggle, setToggle] = useState(true);
  const [imageArray, setImageArray] = useState([]);

  // Fetch images
  const getImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setImageArray(data);
  }

  useEffect(() => { getImages() }, []);

  return (
    <Router>
      <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/list-users">List Users</Link></li>
          <li><Link to="/update-user">Update User</Link></li>
          <li><Link to="/delete-user">Delete User</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<Home imageArray={imageArray} toggle={toggle} setToggle={setToggle} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list-users" element={<ListUsers />} />
          <Route path="/update-user" element={<UpdateUser />} />
          <Route path="/delete-user" element={<DeleteUser />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = ({ imageArray, toggle, setToggle }) => (
  <div>
    <h1>List Images</h1>
    <button onClick={() => setToggle(!toggle)}>Press me</button>
    <br />
    {imageArray.map((item, index) => (
      <div key={index}>
        {toggle && (
          <div>
            <img src={item.download_url} width={"50%"} alt={item.author} />
            <h2>{item.author}</h2>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default App;
