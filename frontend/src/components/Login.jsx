import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login/', {
        username,
        password,
      });
      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: ''
//     });

//     const { username, password } = formData;
//     const history = useHistory();

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = async e => {
//         e.preventDefault();
//         try {
//             const config = {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             };
//             const body = JSON.stringify({ username, password });
//             const res = await axios.post('/api/login/', body, config);
//             console.log(res.data);
//             // Redirect or update state after successful login
//             history.push('/dashboard');  // Change to your desired route
//         } catch (err) {
//             console.error(err.response.data);
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={onSubmit}>
//                 <input type="text" placeholder="Username" name="username" value={username} onChange={onChange} required />
//                 <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} required />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
